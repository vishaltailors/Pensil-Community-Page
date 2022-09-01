import { AiOutlineSend, AiOutlineArrowLeft } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Conversation = () => {
  const location = useLocation();
  const naviagte = useNavigate();

  const { message } = location.state;

  const isLaptop = useMediaQuery({ query: "(max-width: 1024px)" });
  return (
    <>
      <div className="flex cursor-pointer items-start gap-3 border-b p-3">
        {isLaptop && (
          <div
            className="btn btn-ghost btn-circle mt-1"
            onClick={() => naviagte("/messages")}
          >
            <AiOutlineArrowLeft size={24} />
          </div>
        )}
        <div className="avatar placeholder">
          <div className="mask mask-squircle w-14 bg-neutral-focus text-neutral-content">
            <img src={message.photo} alt="" className="h-full w-full" />
          </div>
        </div>
        <div className="mt-2">
          <div className="text-lg font-bold leading-5">{message.user}</div>
          <div className="ml-[-3px] text-sm text-gray-500">
            @{message.username}
          </div>
        </div>
      </div>
      <div className="flex h-[calc(100vh-250px)] flex-col-reverse md:h-[calc(100vh-150px)]">
        <div className="mx-3 my-2 self-start rounded-xl bg-base-200 p-3 text-base-content">
          {message.message}
        </div>
        <div className="mx-3 my-2 self-end rounded-xl bg-primary p-3 text-base-content">
          Lorem ipsum dolor sit amet.
        </div>
      </div>
      <div className="flex items-center gap-3 p-3">
        <input
          type="text"
          placeholder="Write a message"
          className="input input-bordered w-full"
        />
        <div className="btn btn-accent btn-circle">
          <AiOutlineSend size={24} className="ml-1" />
        </div>
      </div>
    </>
  );
};

export default Conversation;
