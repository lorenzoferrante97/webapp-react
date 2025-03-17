import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className='container-fluid mb-10u py-3u xl:px-10u min-h-[72px] max-w-[96%] justify-center rounded-md bg-white shadow shadow-md'>
        <div className='flex h-full flex-row items-center justify-between'>
          {/* logo */}
          <div>
            <span className='font-h5'>BoolMovies</span>
          </div>
          {/* nav */}
          <nav>
            <ul>
              <li>
                <NavLink
                  className='px-3u py-2u font-body-l-regular text-smoke-950 rounded-full'
                  to={"/"}>
                  Home
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
