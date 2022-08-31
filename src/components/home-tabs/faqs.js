const FAQs = () => {
  const faqs = [
    {
      id: "1",
      question: "What is the purpose of this community?",
      answer:
        "This community is created to help people, connect and share their talents.",
    },
    {
      id: "2",
      question: "What if the talent I possess is not in this community?",
      answer:
        "You can contact the owner of the community to add that category if you feel there are many other people who share the same talent.",
    },
    {
      id: "3",
      question: "How to participate in different events?",
      answer:
        "Events are organized by the community and you can participate in any event. There is a separate page for events.",
    },
    {
      id: "4",
      question: "I am new to this community. What should I do?",
      answer:
        "This is a community for the people, by the people. No need to worry about anything. Everyone is respected here. There is a separate group for newbies.",
    },
  ];
  return faqs.map((faq) => (
    <div
      key={faq.id}
      className="collapse-arrow collapse rounded-box mb-3 border border-base-200 bg-base-100"
    >
      <input type="checkbox" />
      <div className="collapse-title text-lg font-bold">{faq.question}</div>
      <div className="collapse-content">
        <p>➥ {faq.answer}</p>
      </div>
    </div>
  ));
};

export default FAQs;
