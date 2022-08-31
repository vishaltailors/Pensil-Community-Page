import Logo from "../images/logo.png";
import { BiHomeAlt } from "react-icons/bi";
import { MdOutlineExplore, MdOutlineMessage, MdEvent } from "react-icons/md";

const Sidebar = () => {
  const menu = [
    {
      label: "Home",
      icon: <BiHomeAlt size={22} />,
    },
    {
      label: "Explore groups",
      icon: <MdOutlineExplore size={22} />,
    },
    {
      label: "Messages",
      icon: <MdOutlineMessage size={22} />,
    },
    {
      label: "Events",
      icon: <MdEvent size={22} />,
    },
  ];

  const groups = [
    {
      label: "Dancers",
      icon: "🕺",
      submenu: [
        {
          label: "Collaboration",
        },
        {
          label: "Announcements",
        },
        {
          label: "Teaching",
        },
      ],
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
  return (
    <>
      <label for="sidebar" className="drawer-overlay"></label>
      <ul className="menu w-64 overflow-y-auto bg-base-100 p-2 text-base">
        <li className="flex text-xl font-bold">
          <div className="w-full gap-1 px-2.5 pt-0 pb-3 hover:bg-base-100">
            <img src={Logo} className="w-10 object-contain" />
            Starhouse
          </div>
        </li>
        {menu.map((item) => (
          <li key={item.label}>
            <a>
              {item.icon}
              {item.label}
            </a>
          </li>
        ))}
        <hr className="my-3" />
        <div className="ml-[-5px]">
          <h3 className="px-5 py-2 text-xs font-bold uppercase text-gray-500">
            Groups
          </h3>
          {groups.map((item) => (
            <li key={item.label}>
              <div className="py-2">
                {item.submenu ? (
                  <>
                    <div className="collapse-arrow collapse w-full overflow-visible">
                      <input
                        type="checkbox"
                        style={{ padding: 0, minHeight: 0 }}
                      />
                      <div className="fixed-arrow collapse-title min-h-0 p-0">
                        <span className="mask mask-circle mr-3 bg-base-200 p-1 text-xl">
                          {item.icon}
                        </span>
                        {item.label}
                      </div>
                      <div className="collapse-content">
                        <ul className="mt-3 ml-4">
                          {item.submenu.map((subitem) => (
                            <li key={subitem.label}>
                              <a>{subitem.label}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <span className="mask mask-circle bg-base-200 p-1 text-xl">
                      {item.icon}
                    </span>
                    {item.label}
                  </>
                )}
              </div>
            </li>
          ))}
        </div>
      </ul>
    </>
  );
};

export default Sidebar;
