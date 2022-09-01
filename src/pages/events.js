import Poster1 from "../images/sample/events/poster-1-min.jpg";
import Poster2 from "../images/sample/events/poster-2-min.jpg";
import Poster3 from "../images/sample/events/poster-3-min.png";
import Poster4 from "../images/sample/events/poster-4-min.jpg";

import Profile3 from "../images/sample/profile-3.jpg";
import Profile2 from "../images/sample/profile-2.jpg";
import Profile6 from "../images/sample/profile-6.jpg";
import Profile7 from "../images/sample/profile-7.jpg";

import { MdOutlineAccessTime } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

const Events = () => {
  const events = [
    {
      id: "1",
      name: "Let's rock - Music festival",
      poster: Poster1,
      date: "Thursday, September 1, 2022 at 6:00 PM to Thursday, September 1, 2022 at 8:00 PM IST",
      location: "Venture park, Bangalore",
      host: "Akash bhatt",
      hostPhoto: Profile6,
      description:
        "Nulla velit laboris enim eu ex proident nulla. Laborum aliqua amet laborum veniam officia magna aliquip aute laboris ipsum. Pariatur nisi incididunt cupidatat consectetur esse dolore excepteur reprehenderit eu esse magna. Deserunt qui aute nostrud veniam excepteur consequat officia id elit sit occaecat. Enim amet consequat id eiusmod mollit ad tempor fugiat pariatur ut mollit do reprehenderit. Ea minim culpa proident adipisicing duis officia ex magna excepteur.",
    },
    {
      id: "2",
      name: "Dance night",
      poster: Poster2,
      date: "Monday, September 3, 2022 at 12:00 PM to Monday, September 3, 2022 at 2:00 PM IST",
      location: "Capital heart theatre, Pune",
      host: "Jainil sevalia",
      hostPhoto: Profile2,
      description:
        "Ad adipisicing adipisicing aute qui proident ut adipisicing quis. Mollit id quis nulla aute occaecat minim exercitation non. Nostrud cupidatat incididunt consequat sunt duis magna excepteur voluptate ex laboris. Aute aliqua nostrud anim et nostrud adipisicing. Voluptate consectetur ipsum nulla consequat pariatur excepteur ut labore ex cupidatat commodo ex. Proident ut deserunt culpa ut.",
    },
    {
      id: "3",
      name: "Cooking competition",
      poster: Poster3,
      date: "Thursday, September 5, 2022 at 6:00 PM to Thursday, September 5, 2022 at 8:00 PM IST",
      location: "Online",
      host: "Viren zalani",
      hostPhoto: Profile7,
      description:
        "Reprehenderit reprehenderit adipisicing adipisicing aliquip proident eiusmod quis tempor eiusmod consectetur. In quis laboris labore pariatur cupidatat laborum cupidatat dolor adipisicing consectetur laborum non fugiat. Ad occaecat aliqua nostrud aute esse cupidatat.",
    },
    {
      id: "4",
      name: "Art the way you see it",
      poster: Poster4,
      date: "Saturday, September 10, 2022 at 12:00 PM to Saturday, September 10, 2022 at 2:00 PM IST",
      location: "Online",
      host: "Abhishek kumar",
      hostPhoto: Profile3,
      description:
        "Amet quis officia et dolor ullamco ullamco aliqua veniam. Veniam nisi adipisicing Lorem ea ipsum consequat culpa elit exercitation. Reprehenderit incididunt Lorem dolor sunt amet. Ullamco consectetur ex quis laborum eiusmod nostrud id exercitation culpa labore qui. Magna magna elit deserunt esse sit labore eiusmod irure aute eiusmod reprehenderit sint. Labore duis mollit consectetur labore occaecat.",
    },
  ];
  return (
    <div className="w-full border-x border-base-300 px-5 py-3 sm:px-8">
      <div className="text-xl font-bold sm:text-2xl">Events</div>
      <div className="mt-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="card mb-10 gap-3 bg-base-100 p-5 shadow-xl lg:card-side"
          >
            <div className="w-full">
              <img
                src={event.poster}
                className="aspect-video rounded-xl"
                alt=""
              />
              <div className="mt-2 flex flex-col gap-2 px-2">
                <div className="text-xl font-bold">{event.name}</div>
                <div className="border-y border-base-300 py-2 text-sm">
                  <div className="flex items-start gap-3">
                    <MdOutlineAccessTime size={24} className="shrink-0" />
                    <div>{event.date}</div>
                  </div>
                  <div className="mt-2 flex items-center gap-3">
                    <GrLocation size={24} className="shrink-0" />
                    <div>{event.location}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <img
                    src={event.hostPhoto}
                    className="mask mask-squircle w-12"
                    alt=""
                  />
                  <div className="mt-1">
                    <div className="font-bold leading-5">Hosted by</div>
                    <div className="text-sm">{event.host}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-2">
              <div className="text-xl font-bold">Details</div>
              <p className="mt-2">{event.description}</p>
              <div className="mt-3 flex items-center justify-between border-t border-base-300 pt-3">
                <div className="avatar-group -space-x-6">
                  <div className="mask mask-squircle bg-base-100 p-1">
                    <img src={Profile3} className="mask mask-squircle w-12" />
                  </div>
                  <div className="mask mask-squircle bg-base-100 p-1">
                    <img src={Profile2} className="mask mask-squircle w-12" />
                  </div>
                  <div className="mask mask-squircle bg-base-100 p-1">
                    <img src={Profile7} className="mask mask-squircle w-12" />
                  </div>
                  <div className="mask mask-squircle w-12 bg-neutral-focus px-2 py-4 text-neutral-content">
                    <span>+67</span>
                  </div>
                </div>
                <button className="btn btn-primary">Attend</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
