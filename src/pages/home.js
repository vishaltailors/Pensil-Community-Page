import Banner from "../images/sample/banner.jpg";

const Home = () => {
  return (
    <>
      <div className="flex h-full pt-5">
        <div className="w-full rounded-t-xl bg-base-200 p-5">
          <div className="rounded-xl bg-base-100 p-3">
            <img
              src={Banner}
              className="aspect-[4/1] rounded-xl object-cover"
              alt=""
            />
          </div>
        </div>
        <div className="min-w-[300px]"></div>
      </div>
    </>
  );
};

export default Home;
