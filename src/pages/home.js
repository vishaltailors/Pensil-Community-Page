import { useContext } from "react";
import { CommunityContext } from "../community-provider";
import FAQs from "../components/home-tabs/faqs";
import Feed from "../components/home-tabs/feed";
import Members from "../components/home-tabs/members";
import Testimonials from "../components/home-tabs/testimonials";
import ImageCropModal from "../components/image-crop-modal";

const Home = () => {
  const { communityDetails, activeTab, setActiveTab } =
    useContext(CommunityContext);

  const groupsIcon = ["🕺", "🎨", "🍳", "🎸"];

  const loadTab = () => {
    switch (activeTab) {
      case "Feed":
        return <Feed />;
      case "Description":
        return <p>{communityDetails?.detailDescription}</p>;
      case "Owner & members":
        return <Members />;
      case "Testimonials":
        return <Testimonials />;
      case "FAQs":
        return <FAQs />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="w-full border-x border-base-300">
        <div className="bg-base-100">
          <img
            src={communityDetails?.banner}
            className="aspect-[4/1] w-full object-cover"
            alt=""
          />
          <div className="flex gap-3">
            <div className="avatar-group mt-[-40px] ml-5 -space-x-12">
              {groupsIcon.map((icon) => (
                <div key={icon} className="avatar">
                  <div className="bg-base-200 p-3 text-4xl leading-tight">
                    {icon}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-1 text-sm">Created in May, 2021</div>
          </div>
          <div className="mt-2 flex flex-col gap-3 px-5 sm:px-8">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="text-2xl font-bold">
                  {communityDetails?.title}
                </div>
                <div className="text-sm">
                  10K members &nbsp; ● &nbsp; 20 Groups
                </div>
              </div>
              <button className="btn btn-primary">Join</button>
            </div>
            <p>{communityDetails?.briefDescription}</p>
          </div>
          <div className="home-tabs tabs mt-7 justify-between border-b border-base-300 px-5">
            {communityDetails?.tabs
              .sort((a, b) => a.order - b.order)
              .map((tab) => (
                <div
                  key={tab.label}
                  className={`tab ${
                    activeTab === tab.label ? "tab-active" : ""
                  }`}
                  onClick={() => setActiveTab(tab.label)}
                >
                  {tab.label}
                </div>
              ))}
          </div>
          <div className="mt-3 px-5 py-5 sm:px-8">{loadTab()}</div>
        </div>
      </div>
      <ImageCropModal />
    </>
  );
};

export default Home;
