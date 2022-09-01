import { createContext, useEffect, useState } from "react";
import Banner from "./images/sample/banner.jpg";

export const CommunityContext = createContext();

const CommunityProvider = ({ children }) => {
  const [communityDetails, setCommunityDetails] = useState();

  const [activeTab, setActiveTab] = useState();

  useEffect(() => {
    const details = JSON.parse(localStorage.getItem("details"));
    if (!details) {
      const initialDetails = {
        title: "House of talents!",
        briefDescription:
          "We are the one who appreciate every talent. Join world's one of the most talented community around the world. Learn, collabrate, teach & grow!",
        tabs: [
          { label: "Feed", order: 1 },
          { label: "Description", order: 3 },
          { label: "Owner & members", order: 4 },
          { label: "Testimonials", order: 5 },
          { label: "FAQs", order: 6 },
        ],
        banner: Banner,
        detailDescription:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut iusto sequi numquam est quos, voluptatem nihil incidunt, impedit voluptates soluta dicta fuga esse labore unde et animi? Repellat laudantium temporibus molestiae velit consequatur, distinctio ullam. Ipsa soluta exercitationem deleniti ullam quidem molestiae dolores laboriosam dignissimos. Quos dolor nihil aperiam nobis quas minus dicta maxime aspernatur sed odio rem nulla explicabo, excepturi architecto non perferendis consequuntur fugiat amet repudiandae perspiciatis molestias ut illum esse. Repellat officia incidunt sapiente quis at eos. Ea modi in, assumenda non deserunt vitae aperiam atque sint. Est ipsum voluptate iusto sit minima debitis error neque veniam. Harum molestiae velit debitis nesciunt earum officiis expedita nisi delectus, odio, laboriosam error, assumenda corporis repellendus eius dicta veniam veritatis? Temporibus repudiandae quos nulla. Delectus quia voluptatibus alias, repellat nisi autem ratione dicta sequi aspernatur assumenda labore consequuntur doloremque iure harum aliquid veniam amet sapiente dolorum vero qui exercitationem. Similique?",
      };
      setCommunityDetails(initialDetails);
      setActiveTab(initialDetails.tabs[0].label);
      localStorage.setItem("details", JSON.stringify(initialDetails));
    } else {
      setCommunityDetails(details);
      setActiveTab(details.tabs[0].label);
    }
  }, []);

  return (
    <CommunityContext.Provider
      value={{
        communityDetails,
        setCommunityDetails,
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </CommunityContext.Provider>
  );
};

export default CommunityProvider;
