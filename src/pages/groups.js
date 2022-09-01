import Cooks from "../images/sample/groups/cooks-min.jpg";
import Artists from "../images/sample/groups/artists-min.jpg";
import Guitarists from "../images/sample/groups/guitarists-min.jpg";
import Singers from "../images/sample/groups/singers-min.jpg";
import Dancers from "../images/sample/groups/dancers-min.jpg";
import Magic from "../images/sample/groups/magic-min.jpg";
import Comedians from "../images/sample/groups/comedians-min.jpg";
import Yoga from "../images/sample/groups/yoga-min.jpg";
import Cycling from "../images/sample/groups/cycling-min.jpg";

import GroupCard from "../components/group-card";

const Groups = () => {
  const newGroups = [
    {
      id: "1",
      name: "Cooks",
      icon: "🍳",
      image: Cooks,
      members: "100",
    },
    {
      id: "2",
      name: "Yoga - the art of living",
      icon: "🧘‍♀️",
      image: Yoga,
      members: "500",
    },
    {
      id: "3",
      name: "Magic",
      icon: "🧙‍♀️",
      image: Magic,
      members: "25",
    },
  ];

  const discoverGroups = [
    {
      id: "1",
      name: "Artists",
      icon: "🎨",
      image: Artists,
      members: "100",
    },
    {
      id: "2",
      name: "Guitarists",
      icon: "🎸",
      image: Guitarists,
      members: "500",
    },
    {
      id: "3",
      name: "Singers",
      icon: "🎤",
      image: Singers,
      members: "25",
    },
    {
      id: "4",
      name: "Dancers",
      icon: "🕺",
      image: Dancers,
      members: "75",
    },
    {
      id: "5",
      name: "Comedians",
      icon: "🤡",
      image: Comedians,
      members: "27",
    },
    {
      id: "6",
      name: "Cycling",
      icon: "🚴‍♀️",
      image: Cycling,
      members: "1267",
    },
  ];
  return (
    <div className="w-full border-x border-base-300 px-5 py-3 sm:px-8">
      <div className="text-xl font-bold sm:text-2xl">New groups</div>
      <div className="mt-3 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {newGroups.map((group) => (
          <GroupCard key={group.id} group={group} />
        ))}
      </div>
      <div className="mt-10 text-xl font-bold sm:text-2xl">Explore</div>
      <div className="my-3 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {discoverGroups.map((group) => (
          <GroupCard key={group.id} group={group} />
        ))}
      </div>
    </div>
  );
};

export default Groups;
