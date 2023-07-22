import { useRouter } from "next/router";
import React, { useState } from "react";

const Events = ({ events }) => {
  //   console.log("{events}", events);
  const router = useRouter();
  const [event, setEvent] = useState(events);
  const fetchSportsData = async () => {
    const response = await fetch(
      `http://localhost:4000/events?category=sports`
    );
    const data = await response.json();
    setEvent(data);
    router.push(`/events?category=sports`, undefined, { shallow: true });
  };
  return (
    <div>
      <button onClick={fetchSportsData}>Sports Event</button>
      <h1>All Events</h1>
      {event.map((event) => (
        <div key={event?.id}>
          <h3>
            {event?.id} | {event?.title} | {event?.date} | {event?.category}
          </h3>
          <hr />
          <p>{event?.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Events;

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "category=sports" : "";
  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();
  return {
    props: {
      events: data,
    },
  };
};
