import Community1 from "../../images/sample/community-1.jpg";
import Community2 from "../../images/sample/community-2.jpg";

const Communities = ({ title }) => {
  const communities = [
    {
      id: "1",
      name: "Coder's club",
      logo: Community1,
      members: "10K",
    },
    {
      id: "2",
      name: "Happy caffine",
      logo: Community2,
      members: "5K",
    },
  ];
  return (
    <div className="rounded-xl bg-neutral-content p-3">
      <div className="px-3 font-bold">{title}</div>
      <div className="mt-1.5">
        {communities.map((community) => (
          <div
            key={community.id}
            className="flex cursor-pointer items-start gap-2 rounded-xl p-2 hover:bg-base-100"
          >
            <div class="avatar">
              <div class="w-12">
                <img
                  src={community.logo}
                  alt=""
                  className="mask mask-hexagon-2"
                />
              </div>
            </div>
            <div>
              <div>{community.name}</div>
              <div className="text-xs text-gray-500">
                {community.members} members
              </div>
            </div>
          </div>
        ))}
      </div>
      {title === "Joined communities" && (
        <div className="btn btn-link normal-case text-black">See all</div>
      )}
    </div>
  );
};

export default Communities;
