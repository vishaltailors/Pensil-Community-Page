import Owner from "../../images/sample/me.jpg";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillFacebook,
} from "react-icons/ai";
import Profile1 from "../../images/sample/profile-1.jpg";
import Profile2 from "../../images/sample/profile-2.jpg";
import Profile3 from "../../images/sample/profile-3.jpg";
import Profile4 from "../../images/sample/profile-4.jpg";

const Members = () => {
  const members = [
    {
      name: "Moksha shah",
      photo: "MS",
    },
    {
      name: "Jainil sevalia",
      photo: Profile2,
    },
    {
      name: "Jay ramani",
      photo: "JR",
    },
    {
      name: "Abhishek kumar",
      photo: Profile3,
    },
    {
      name: "Bhavesh kumar",
      photo: Profile1,
    },
    {
      name: "John doe",
      photo: Profile4,
    },
  ];
  return (
    <div>
      <div className="flex items-start gap-5">
        <img
          src={Owner}
          className="mask mask-squircle w-36 object-cover"
          alt=""
        />
        <div className="mt-1">
          <div className="text-3xl font-bold">Vishal Tailor</div>
          <p className="ml-1">
            Hi, I am the creator of Starhouse. The idea of Starhouse came into
            my mind a way back ago but I don't know how to start. One day I came
            across this platform and just started it. Today this community is
            run by people and for the people. I am the one who just guide to the
            right path. Having any doubt or any problem, feel free to contact
            me.
          </p>
          <div className="mt-2 flex items-center gap-3">
            <a className="btn btn-ghost btn-circle btn-sm bg-sky-500  text-white">
              <AiFillFacebook size={20} />
            </a>
            <a className="btn btn-ghost btn-circle btn-sm  bg-pink-400 text-white">
              <AiFillInstagram size={20} />
            </a>
            <a className="btn btn-ghost btn-circle btn-sm bg-red-500  text-white">
              <AiFillYoutube size={20} />
            </a>
            <a className="btn btn-ghost btn-circle btn-sm bg-sky-400  text-white">
              <AiOutlineTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10">Community members</div>
      <hr />
      <div className="mt-5 grid grid-cols-3 gap-5">
        {members.map((obj, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="avatar placeholder">
              <div className="mask mask-squircle w-14 bg-neutral-focus text-neutral-content">
                {obj.photo.length > 2 ? (
                  <img src={obj.photo} alt="" className="h-full w-full" />
                ) : (
                  <span className="text-2xl">{obj.photo}</span>
                )}
              </div>
            </div>
            <div className="font-bold">{obj.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
