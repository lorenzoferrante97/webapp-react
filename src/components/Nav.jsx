import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
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
    </>
  );
}
