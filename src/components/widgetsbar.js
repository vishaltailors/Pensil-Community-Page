import User from "../images/sample/me.jpg";

import { BiDotsHorizontalRounded } from "react-icons/bi";
import Notifications from "./widgets/notifications";
import Communities from "./widgets/communities";

const WidgetsBar = () => {
  return (
    <div className="sticky top-0 flex min-w-[320px] flex-col gap-5 self-start border-l py-2 px-5">
      <div className="flex items-center gap-2 pb-3">
        <div className="avatar">
          <div className="mask mask-squircle w-12">
            <img src={User} alt="" />
          </div>
        </div>
        <div className="flex w-full items-center justify-between">
          <div>
            <div className="text-lg font-bold leading-5">Vishal Tailor</div>
            <div className="text-sm">@vishaltailor</div>
          </div>
          <div className="dropdown-end dropdown">
            <label tabindex="0">
              <BiDotsHorizontalRounded size={22} className="cursor-pointer" />
            </label>
            <ul
              tabindex="0"
              className="dropdown-content menu rounded-box w-32 bg-base-100 shadow"
            >
              <li>
                <a>Edit profile</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Notifications />
      <Communities title={"Your communities"} />
      <Communities title={"Joined communities"} />
    </div>
  );
};

export default WidgetsBar;
