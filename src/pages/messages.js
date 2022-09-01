import { useLocation, useOutlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import MessageList from "../components/message-list";
import Profile1 from "../images/sample/profile-1.jpg";
import Profile2 from "../images/sample/profile-2.jpg";
import Profile3 from "../images/sample/profile-3.jpg";

const Messages = () => {
  const messages = [
    {
      id: "1",
      user: "Jainil sevalia",
      userId: "1",
      username: "jainil",
      photo: Profile2,
      time: "25 min ago",
      message: "Hello, how are you?",
    },
    {
      id: "2",
      user: "Bhavesh kumar",
      userId: "2",
      username: "bhavesh",
      photo: Profile1,
      time: "1 hour ago",
      message: "Get ready for the next event.",
    },
    {
      id: "3",
      user: "Abhishek kumar",
      userId: "3",
      username: "abhishek",
      photo: Profile3,
      time: "3 hours ago",
      message: "I am going for a lunch.",
    },
  ];

  const isLaptop = useMediaQuery({ query: "(max-width: 1024px)" });

  const location = useLocation();
  const outlet = useOutlet();

  console.log(location.pathname !== "/messages", isLaptop);

  return (
    <div className="flex w-full border-x border-base-300">
      {(location.pathname === "/messages" || !isLaptop) && (
        <MessageList messages={messages} />
      )}
      {(location.pathname !== "/messages" || !isLaptop) && (
        <div className="w-full">
          {outlet || (
            <div className="flex h-full flex-col items-center justify-center p-3">
              <div className="text-center text-2xl">
                No conversation selected.
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Messages;
