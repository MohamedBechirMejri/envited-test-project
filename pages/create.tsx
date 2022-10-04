import Link from "next/link";
import { useEffect, useState } from "react";

const Create = ({ event, setEvent }: { event: any; setEvent: any }) => {
  const [eventName, setEventName] = useState(event.name);
  const [eventHost, setHostName] = useState(event.host);
  const [startDate, setStartDate] = useState(event.startDate);
  const [endDate, setEndDate] = useState(event.endDate);
  const [location, setLocation] = useState(event.location);
  const [picture, setPicture] = useState(event.picture);

  useEffect(() => {
    const newEvent = event;

    newEvent.name = eventName;
    newEvent.host = eventHost;
    newEvent.startDate = startDate;
    newEvent.endDate = endDate;
    newEvent.location = location;
    newEvent.picture = picture;

    setEvent(newEvent);
  }, [eventName, eventHost, startDate, endDate, location, picture]);

  return (
    <form className="flex items-center justify-center min-h-screen  [font-family:Helvetica] flex-col gap-4 text-[#240D57] selection:bg-purple-300 selection:text-white">
      <h1 className="mb-8 text-4xl font-bold">Add Event</h1>
      <div className="flex flex-col gap-2 w-80">
        <label htmlFor="event" className="font-semibold">
          Event Name
        </label>
        <input
          type="text"
          id="event"
          className="h-10 font-semibold text-center text-purple-400 transition-all bg-purple-100 border rounded outline-none ring-purple-200 focus:bg-transparent focus:ring-2"
          value={eventName}
          onChange={e => setEventName(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2 w-80">
        <label htmlFor="host" className="font-semibold">
          Host Name
        </label>
        <input
          type="text"
          id="host"
          className="h-10 font-semibold text-center text-purple-400 transition-all bg-purple-100 border rounded outline-none ring-purple-200 focus:bg-transparent focus:ring-2"
          onChange={e => setHostName(e.target.value)}
          value={eventHost}
        />
      </div>
      <div className="flex flex-col gap-2 w-80">
        <label htmlFor="start-date" className="font-semibold">
          Start Date
        </label>
        <input
          type="datetime-local"
          id="start-date"
          className="h-10 font-semibold text-center text-purple-400 transition-all bg-purple-100 border rounded outline-none ring-purple-200 focus:bg-transparent focus:ring-2 "
          onChange={e => setStartDate(e.target.value)}
          value={startDate}
        />
      </div>
      <div className="flex flex-col gap-2 w-80">
        <label htmlFor="end-date" className="font-semibold">
          End Date
        </label>
        <input
          type="datetime-local"
          id="end-date"
          className="h-10 font-semibold text-center text-purple-400 transition-all bg-purple-100 border rounded outline-none ring-purple-200 focus:bg-transparent focus:ring-2"
          onChange={e => setEndDate(e.target.value)}
          value={endDate}
        />
      </div>
      <div className="flex flex-col gap-2 w-80">
        <label htmlFor="location" className="font-semibold">
          Location
        </label>
        <input
          type="location"
          id="location"
          className="h-10 font-semibold text-center text-purple-400 transition-all bg-purple-100 border rounded outline-none ring-purple-200 focus:bg-transparent focus:ring-2"
          onChange={e => setLocation(e.target.value)}
          value={location}
        />
      </div>
      <div className="flex flex-col gap-2 w-80">
        <label htmlFor="photo" className="font-semibold">
          Picture (Optional)
        </label>

        <input
          type="text"
          id="photo"
          className="relative flex items-center justify-center w-full h-10 text-center text-purple-400 transition-all bg-purple-100 border rounded outline-none ring-purple-200 focus:bg-transparent focus:ring-2"
          onChange={e => setPicture(e.target.value)}
          value={picture}
        />
      </div>
      <Link href="/event">
        <a className="w-[#320px] bg-gradient-to-r from-[#8456EC] to-[#E87BF8] text-white p-2 rounded px-12 font-semibold tracking-wide mt-4">
          Next
        </a>
      </Link>
    </form>
  );
};

export default Create;
