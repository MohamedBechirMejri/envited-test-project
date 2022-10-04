import type { NextPage } from "next";
import Link from "next/link";

const Create: NextPage = () => {
  return (
    <form className="flex items-center justify-center min-h-screen  [font-family:Helvetica] flex-col gap-4 text-[#240D57] selection:bg-purple-300 selection:text-white">
      <h1 className="mb-8 text-4xl font-bold">Add Event</h1>
      <div className="flex flex-col gap-2 w-72">
        <label htmlFor="event" className="font-semibold">
          Event Name
        </label>
        <input
          type="text"
          id="event"
          className="h-10 font-semibold text-center text-purple-400 transition-all bg-purple-100 border rounded outline-none ring-purple-200 focus:bg-transparent focus:ring-2"
        />
      </div>
      <div className="flex flex-col gap-2 w-72">
        <label htmlFor="host" className="font-semibold">
          Host Name
        </label>
        <input
          type="text"
          id="host"
          className="h-10 font-semibold text-center text-purple-400 transition-all bg-purple-100 border rounded outline-none ring-purple-200 focus:bg-transparent focus:ring-2"
        />
      </div>
      <div className="flex flex-col gap-2 w-72">
        <label htmlFor="start-date" className="font-semibold">
          Start Date
        </label>
        <input
          type="date"
          id="start-date"
          className="h-10 font-semibold text-center text-purple-400 transition-all bg-purple-100 border rounded outline-none ring-purple-200 focus:bg-transparent focus:ring-2 "
        />
      </div>
      <div className="flex flex-col gap-2 w-72">
        <label htmlFor="end-date" className="font-semibold">
          End Date
        </label>
        <input
          type="date"
          id="end-date"
          className="h-10 font-semibold text-center text-purple-400 transition-all bg-purple-100 border rounded outline-none ring-purple-200 focus:bg-transparent focus:ring-2"
        />
      </div>
      <div className="flex flex-col gap-2 w-72">
        <label htmlFor="location" className="font-semibold">
          Location
        </label>
        <input
          type="location"
          id="location"
          className="h-10 font-semibold text-center text-purple-400 transition-all bg-purple-100 border rounded outline-none ring-purple-200 focus:bg-transparent focus:ring-2"
        />
      </div>
      <div className="flex flex-col gap-2 w-72">
        <label htmlFor="photo" className="font-semibold">
          Picture
        </label>
        <div className="relative flex items-center justify-center w-full h-10 text-center text-purple-400 transition-all bg-purple-100 border rounded outline-none cursor-pointer ring-purple-200 focus:bg-transparent focus:ring-2">
          <input
            type="file"
            id="photo"
            className="absolute top-0 left-0 w-full h-full opacity-0"
          />
          <p>Select File</p>
        </div>
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