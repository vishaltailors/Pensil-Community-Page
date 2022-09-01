import Profile2 from "../../images/sample/profile-2.jpg";
import Profile4 from "../../images/sample/profile-4.jpg";

const Notifications = () => {
  const notifications = [
    {
      id: "1",
      image: Profile2,
      title: "Jainil sevalia has joined the community",
      time: "1 hour ago",
    },
    {
      id: "2",
      image: Profile4,
      title: "Akshay posted after a long time in coder's club",
      time: "22 hours ago",
    },
  ];
  return (
    <div className="theme-radius bg-base-200 px-6 py-3">
      <div className="font-bold">Recent notifications</div>
      <ul className="mt-1.5 text-sm">
        {notifications.map((notification) => (
          <li
            key={notification.id}
            className="flex items-start gap-3 border-b border-base-300 py-2"
          >
            <img
              src={notification.image}
              alt=""
              className="mask mask-squircle w-10"
            />
            <div>
              <div>{notification.title}</div>
              <div className="text-xs text-gray-500">{notification.time}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
