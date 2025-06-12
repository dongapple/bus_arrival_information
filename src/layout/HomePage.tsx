import axios from "axios";
import { useState, useEffect } from "react";
import ModalSetting from "../components/ModalSetting";
import ModalCity from "../components/ModalCity";

interface Position {
  coords: {
    latitude: number;
    longitude: number;
  };
}

interface CityData {
  cityCode: string;
  cityName: string;
}

function HomePage() {
  const [latitude, setLatitude] = useState<number | "">("");
  const [longitude, setLongitude] = useState<number | "">("");

  const [cities, setCities] = useState<CityData[]>([]);
  const [expanded, setExpanded] = useState<boolean>(false); // 클릭으로 펼치고 접히는 상태

  useEffect(() => {
    async function fetchCityData() {
      try {
        const serviceKey = encodeURIComponent(
          "UeSrzAMnYRKOymRSPTLpYuRBx0YaAhMGovsaJuEyRv8PRpK6jdUA90ooPc2sHOV2/pn9kmxzmoLZsSruLcQLfA=="
        );
        const url = `http://apis.data.go.kr/1613000/ArvlInfoInqireService/getCtyCodeList?serviceKey=${serviceKey}&_type=json`;
        const response = await axios.get<any>(url);
        const extractedCities: CityData[] =
          response.data?.response?.body?.items?.item.map((item: any) => ({
            cityCode: item.citycode,
            cityName: item.cityname,
          }));
        setCities(extractedCities);
      } catch (error) {
        console.error("API 호출 오류:", error);
      }
    }

    fetchCityData();
  }, []);

  // 클릭 이벤트 핸들러
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  const fetchLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        success,
        error,

        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const success = (position: Position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
    mapApi(position.coords.latitude, position.coords.longitude);
  };

  const error = (error: Error) => {
    console.error("위치 정보를 가져올 수 없습니다.", error.message);
  };

  const mapApi = async (latitude: number, longitude: number) => {
    try {
      const response = await axios.get(
        `https://dapi.kakao.com/v2/local/geo/coord2address.json?input_coord=WGS84&x=${longitude}&y=${latitude}`,
        {
          headers: {
            Authorization: "KakaoAK b0a1dd956962727b79eac4a73b2cd2be", // 네이티브 앱 키
          },
        }
      );
      const location = response.data.documents[0];
      const locationAddress = location.address.address_name;
      const locationCity = locationAddress
        .split(" ")
        .filter((word: string) => {
          return (
            word.endsWith("시") || word.endsWith("도") || word.endsWith("군")
          );
        })
        .join();

      window.localStorage.setItem("currentPosition", locationCity);
    } catch (error) {
      console.error(error.message);
    }
  };

  const loadStoredPosition = () => {
    const storedPosition = window.localStorage.getItem("currentPosition");
    if (storedPosition) {
      console.log("Stored Position:", storedPosition);
    } else {
      console.log("No stored position found.");
    }
  };

  return (
    <>
      <div>
        <p>위도: {latitude}</p>
        <p>경도: {longitude}</p>
        <button onClick={loadStoredPosition}>위치 확인하기</button>
      </div>
      <div>
        <h2 onClick={toggleExpanded}>도시 코드 및 이름 목록</h2>
        {/* 펼치고 접히는 동작을 구현할 ul 요소 */}
        <ul style={{ display: expanded ? "block" : "none" }}>
          {cities ? (
            cities.map((city, index) => (
              <li key={index}>
                <strong>도시 코드:</strong> {city.cityCode},{" "}
                <strong>도시 이름:</strong> {city.cityName},
              </li>
            ))
          ) : (
            <p>도시 데이터를 불러오는 중입니다...</p>
          )}
        </ul>
      </div>
      {/* <ModalSetting isOpen={true} onClose={() => {}} /> */}
      <ModalCity />
    </>
  );
}

export default HomePage;
