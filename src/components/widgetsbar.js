import User from "../images/sample/me.jpg";

import Notifications from "./widgets/notifications";
import Communities from "./widgets/communities";
import Events from "./widgets/events";

import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import EditCommunityDetails from "./widgets/editcommdetails";
import { CommunityContext } from "../community-provider";

const WidgetsBar = ({ isTablet }) => {
  const location = useLocation();

  const [editDetails, setEditDetails] = useState(false);
  const { setActiveTab } = useContext(CommunityContext);

  return (
    <div
      className={`${
        isTablet
          ? "w-80 bg-base-100 py-5"
          : "sticky top-0 min-w-[270px] self-start py-2 lg:min-w-[320px]"
      } flex flex-col gap-5 px-5`}
    >
      <div className="flex items-center gap-2 px-1 pb-3">
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
            <label tabIndex="0">
              <BiDotsHorizontalRounded size={22} className="cursor-pointer" />
            </label>
            <ul
              tabIndex="0"
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
      {location.pathname === "/" && !editDetails && (
        <button
          className="btn btn-primary"
          onClick={() => {
            setEditDetails(true);
            setActiveTab("Description");
          }}
        >
          Edit community details
        </button>
      )}
      {editDetails ? (
        <EditCommunityDetails setEditDetails={setEditDetails} />
      ) : (
        <>
          {location.pathname === "/events" && <Events />}
          <Notifications />
          <Communities title={"Your communities"} />
          <Communities title={"Joined communities"} />
        </>
      )}
    </div>
  );
};

export default WidgetsBar;
