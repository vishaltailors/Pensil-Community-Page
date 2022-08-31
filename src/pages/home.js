import { useState } from "react";
import FAQs from "../components/home-tabs/faqs";
import Feed from "../components/home-tabs/feed";
import Members from "../components/home-tabs/members";
import Testimonials from "../components/home-tabs/testimonials";
import Banner from "../images/sample/banner.jpg";

const Home = () => {
  const groupsIcon = ["🕺", "🎨", "🍳", "🎸"];

  const tabs = [
    "Feed",
    "Description",
    "Owner & members",
    "Testimonials",
    "FAQs",
  ];

  const [activeTab, setActiveTab] = useState("Feed");

  const loadTab = () => {
    switch (activeTab) {
      case "Feed":
        return <Feed />;
      case "Description":
        return (
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut iusto
            sequi numquam est quos, voluptatem nihil incidunt, impedit
            voluptates soluta dicta fuga esse labore unde et animi? Repellat
            laudantium temporibus molestiae velit consequatur, distinctio ullam.
            Ipsa soluta exercitationem deleniti ullam quidem molestiae dolores
            laboriosam dignissimos. Quos dolor nihil aperiam nobis quas minus
            dicta maxime aspernatur sed odio rem nulla explicabo, excepturi
            architecto non perferendis consequuntur fugiat amet repudiandae
            perspiciatis molestias ut illum esse. Repellat officia incidunt
            sapiente quis at eos. Ea modi in, assumenda non deserunt vitae
            aperiam atque sint. Est ipsum voluptate iusto sit minima debitis
            error neque veniam. Harum molestiae velit debitis nesciunt earum
            officiis expedita nisi delectus, odio, laboriosam error, assumenda
            corporis repellendus eius dicta veniam veritatis? Temporibus
            repudiandae quos nulla. Delectus quia voluptatibus alias, repellat
            nisi autem ratione dicta sequi aspernatur assumenda labore
            consequuntur doloremque iure harum aliquid veniam amet sapiente
            dolorum vero qui exercitationem. Similique?
          </p>
        );
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
    <div className="w-full border-x">
      <div className="bg-base-100">
        <img src={Banner} className="aspect-[4/1] object-cover" alt="" />
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
          <div className="mt-1 text-sm text-gray-500">Created in May, 2021</div>
        </div>
        <div className="mt-2 flex flex-col gap-3 px-5 sm:px-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="text-2xl font-bold">House of talents!</div>
              <div className="text-sm text-gray-500">
                10K members &nbsp; ● &nbsp; 20 Groups
              </div>
            </div>
            <button className="btn btn-primary">Join</button>
          </div>
          <p>
            We are the one who appreciate every talent. Join world's one of the
            most talented community around the world. Learn, collabrate, teach &
            grow!
          </p>
        </div>
        <div className="home-tabs tabs mt-7 justify-between border-b px-5">
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`tab ${activeTab === tab ? "tab-active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>
        <div className="mt-3 px-5 py-5 sm:px-8">{loadTab()}</div>
      </div>
    </div>
  );
};

export default Home;
