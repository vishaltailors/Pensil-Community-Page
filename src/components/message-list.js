import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const MessageList = ({ messages }) => {
  const navigate = useNavigate();
  const isLaptop = useMediaQuery({ query: "(max-width: 1024px)" });
  return (
    <div
      className={`${
        isLaptop
          ? "w-full"
          : "min-w-[270px] border-r border-base-300 lg:min-w-[320px]"
      }`}
    >
      <div className="px-4 pt-3 text-xl font-bold sm:text-2xl">Messages</div>
      <div className="mt-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className="flex cursor-pointer items-start gap-3 border-b border-base-300 p-1 p-4 py-4 hover:bg-base-200"
            onClick={() =>
              navigate(`/messages/${message.userId}`, { state: { message } })
            }
          >
            <div className="avatar placeholder">
              <div className="mask mask-squircle w-14 bg-neutral-focus text-neutral-content">
                <img src={message.photo} alt="" className="h-full w-full" />
              </div>
            </div>
            <div className="mt-1">
              <div className="text-sm font-semibold">
                {message.user} •{" "}
                <span className="text-xs font-normal text-gray-400">
                  {message.time}
                </span>
              </div>
              <div>{message.message}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageList;
