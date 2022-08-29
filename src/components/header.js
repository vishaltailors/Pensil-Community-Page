import Avatar from "../images/avatar.png";
import Logo from "../images/logo.png";
import { HiMenuAlt1 } from "react-icons/hi";

const Header = () => {
  return (
    <>
      <div className="navbar bg-base-100 px-3 sm:px-5">
        <div className="flex-1">
          <div className="flex items-center text-xl font-bold">
            <label
              for="sidebar"
              className="btn btn-ghost drawer-button px-2 md:hidden"
            >
              <HiMenuAlt1 size={24} />
            </label>
            <img src={Logo} className="w-10 object-contain" />
            Starhouse
          </div>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown-end dropdown">
            <label tabindex="0" className="avatar mt-1 mr-1 cursor-pointer">
              <div className="w-10">
                <img src={Avatar} alt="" className="mask mask-squircle" />
              </div>
            </label>
            <ul
              tabindex="0"
              className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
            >
              <li>
                <a>Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
