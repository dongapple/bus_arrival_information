import {
  Route,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";

const router = createHashRouter(
  createRoutesFromElements(<Route path="/" element={<RootLayout />}></Route>),
);

export default router;
