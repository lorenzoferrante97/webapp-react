import { Outlet } from "react-router-dom";
import Header from "../components/sections/Header";

export default function DefaultLayout() {
  return (
    <>
      <section className='wrapper bg-smoke-50 pt-10u relative min-h-screen'>
        <Header />
        <Outlet />
      </section>
    </>
  );
}
