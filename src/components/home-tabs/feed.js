import Profile3 from "../../images/sample/profile-3.jpg";
import Profile2 from "../../images/sample/profile-2.jpg";

const Feed = () => {
  const feedData = [
    {
      name: "Moksha shah",
      photo: "MS",
      title: "Got selected in finals of International singing competition.",
      group: "Dancers",
      time: "1 hour ago",
    },
    {
      name: "Jainil sevalia",
      photo: Profile2,
      title: "Help me learn guitar.",
      group: "Guitarist",
      time: "7 hours ago",
    },
    {
      name: "Jay ramani",
      photo: "JR",
      title: "The new recipe for cooking a tasty burger.",
      group: "Cooks",
      time: "22 hour ago",
    },
    {
      name: "Abhishek kumar",
      photo: Profile3,
      title: "Learn to draw portraits.",
      group: "Artists",
      time: "29 Aug 2022",
    },
  ];

  return (
    <div className="mt-[-1rem]">
      {feedData.map((obj) => (
        <div key={obj.title} className="flex items-start gap-3 border-b py-4">
          <div className="avatar placeholder">
            <div className="mask mask-squircle w-14 bg-neutral-focus text-neutral-content">
              {obj.photo.length > 2 ? (
                <img src={obj.photo} alt="" className="h-full w-full" />
              ) : (
                <span className="text-2xl">{obj.photo}</span>
              )}
            </div>
          </div>
          <div className="mt-1">
            <div className="text-sm font-semibold">
              {obj.name} •{" "}
              <span className="text-xs font-normal text-gray-400">
                {obj.time} in {obj.group}
              </span>
            </div>
            <div className="text-lg">{obj.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
