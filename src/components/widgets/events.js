const Events = () => {
  const current = new Date();
  const today = current.toLocaleDateString("en-US", { weekday: "long" });
  const day = current.getDate();

  const events = [
    {
      id: "1",
      title: "Let's rock - Music festival",
      date: "2022-08-01",
    },
    {
      id: "2",
      title: "Dance night",
      date: "2022-08-03",
    },
    {
      id: "3",
      title: "Cooking competition",
      date: "2022-08-05",
    },
  ];
  return (
    <div className="theme-radius flex gap-2 bg-base-200 px-6 py-3">
      <div>
        <div className="text-xs font-bold text-primary">{today}</div>
        <div className="text-3xl font-bold leading-7">{day}</div>
      </div>
      <div className="border-l border-dashed border-base-300 pl-2">
        <div className="text-xs font-bold text-primary">Events this week</div>
        <div className="mt-2">
          {events.map((event) => (
            <div key={event.id} className="pb-3">
              <div className="text-sm font-bold">{event.title}</div>
              <div className="text-xs text-gray-500">
                {new Date(event.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  weekday: "long",
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
