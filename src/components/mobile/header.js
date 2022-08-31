import User from "../../images/sample/me.jpg";
import Logo from "../../images/logo.png";

const Header = () => {
  return (
    <div className="fixed top-0 z-10 w-full bg-base-100">
      <div className="navbar min-h-0 bg-base-100 px-4 py-1 sm:px-8">
        <div className="flex-1">
          <div className="flex items-center text-xl font-bold">
            <img src={Logo} className="w-10 object-contain" alt="" />
            Starhouse
          </div>
        </div>
        <div className="flex-none gap-2">
          <div className="avatar cursor-pointer">
            <label htmlFor="widget-drawer" className="w-9">
              <img src={User} alt="" className="mask mask-squircle" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
