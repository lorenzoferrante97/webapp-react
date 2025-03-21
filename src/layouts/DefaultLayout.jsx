import { Outlet } from "react-router-dom";
import Header from "../components/sections/Header";
import Loader from "../components/Loader";
import { useGlobalContext } from "../contexts/GlobalContext";

export default function DefaultLayout() {
  const { isLoading } = useGlobalContext();

  return (
    <>
      <section className='wrapper bg-smoke-50 pt-10u realtive relative min-h-screen'>
        {isLoading && <Loader />}
        <Header />
        <Outlet />
      </section>
    </>
  );
}
