import Header from './Header';
import { Outlet } from 'react-router-dom';
import HomePage from './HomePage';

function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <HomePage />
    </>
  );
}

export default RootLayout;
import Header from "./Header";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default RootLayout;
