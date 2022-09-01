import Profile5 from "../../images/sample/profile-5.jpg";
import Profile6 from "../../images/sample/profile-6.jpg";
import Profile7 from "../../images/sample/profile-7.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      id: "1",
      name: "Chetan Patel",
      photo: Profile5,
      message:
        "I have been a member of the Starhouse community for over a year now. It is a great place to communicate with like-minded people and create a sense of belonging.",
    },
    {
      id: "2",
      name: "Viren Zalani",
      photo: Profile7,
      message:
        "My mom has always been the cook in our family and I've never had any interest in learning how to cook. But then I have to move out of my house and somehow one day I joined this community. Cooking has never been so easy! People here help me cook anything in my day to day routine.",
    },
    {
      id: "3",
      name: "Akash Bhatt",
      photo: Profile6,
      message:
        "I have been a part of this community for a long time and I have learned a lot from it. I am very thankful to all the people here",
    },
  ];
  return (
    <div className="mt-[-1.75rem]">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="border-b border-base-300 py-7">
          <div className="flex items-start gap-3">
            <div className="avatar placeholder">
              <div className="mask mask-squircle w-12 bg-neutral-focus text-neutral-content sm:w-20 lg:w-24">
                {testimonial.photo.length > 2 ? (
                  <img
                    src={testimonial.photo}
                    alt=""
                    className="h-full w-full"
                  />
                ) : (
                  <span className="text-2xl">{testimonial.photo}</span>
                )}
              </div>
            </div>
            <div className="text-sm xs:mt-2 xs:pl-10 xs:text-base lg:text-lg">
              <p className="testimonial relative">{testimonial.message}</p>
              <div className="mt-1 font-bold">- {testimonial.name}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
