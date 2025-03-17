import { Outlet } from "react-router-dom";
import Header from "../components/sections/Header"

export default function DefaultLayout() {
  return (
    <>
      <section className="wrapper font-custom">
        <Header />
        <Outlet />
      </section>
    </>
  );
}