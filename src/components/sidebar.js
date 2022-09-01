import Logo from "../images/logo.png";
import { BiHomeAlt } from "react-icons/bi";
import { MdOutlineExplore, MdOutlineMessage, MdEvent } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const menu = [
    {
      label: "Home",
      icon: <BiHomeAlt size={22} />,
      to: "/",
    },
    {
      label: "Explore groups",
      icon: <MdOutlineExplore size={22} />,
      to: "/groups",
    },
    {
      label: "Messages",
      icon: <MdOutlineMessage size={22} />,
      to: "/messages",
    },
    {
      label: "Events",
      icon: <MdEvent size={22} />,
      to: "/events",
    },
  ];

  const groups = [
    {
      label: "Dancers",
      icon: "🕺",
    },
    {
      label: "Guitarists",
      icon: "🎸",
    },
    {
      label: "Artists",
      icon: "🎨",
    },
    {
      label: "Cooks",
      icon: "🍳",
    },
  ];

  const location = useLocation();
  return (
    <>
      <ul className="menu overflow-y-auto bg-base-100 text-base xl:w-64">
        <li className="flex text-xl font-bold">
          <div className="w-full gap-1 px-3 pt-2 pb-3 hover:bg-base-100">
            <img src={Logo} className="w-10 object-contain" />
            <span className="hidden xl:block">Starhouse</span>
          </div>
        </li>
        {menu.map((item) => (
          <li
            key={item.label}
            className={
              item.to === location.pathname
                ? "bordered"
                : "border-l-4 border-base-100"
            }
          >
            <Link to={item.to}>
              {item.icon}
              <span className="hidden xl:block">{item.label}</span>
            </Link>
          </li>
        ))}
        <div className="my-3 border-t border-base-300" />
        <div>
          <h3 className="hidden px-5 py-2 text-xs font-bold uppercase text-gray-500 xl:block">
            Groups
          </h3>
          {groups.map((item) => (
            <li key={item.label}>
              <div className="py-2">
                <span className="mask mask-circle bg-base-200 p-1 text-xl">
                  {item.icon}
                </span>
                <span className="hidden xl:block">{item.label}</span>
              </div>
            </li>
          ))}
        </div>
      </ul>
    </>
  );
};

export default Sidebar;
