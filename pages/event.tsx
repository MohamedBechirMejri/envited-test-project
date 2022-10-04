import Image from "next/image";
import Link from "next/link";
import { IoCalendarOutline } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineRight } from "react-icons/ai";

const Event = ({ event, setEvent }: { event: any; setEvent: any }) => {
  const formatDate = (date: string) => {
    return new Date(date)
      .toLocaleString("en-US", {
        // weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      })
      .replace("at", "")
      .replace(",", "");
  };

  return (
    <div className="flex items-center justify-start min-h-screen  [font-family:Helvetica] flex-col gap-2 max-w-[500px] mx-auto bg-[#fbfaff] text-[#240D57]">
      <Image
        src={event.picture || "/Birthday cake.png"}
        width={375}
        height={375}
      />
      <div className="flex flex-col items-start w-full gap-2 px-8">
        <div className="flex flex-col items-start gap-1">
          <h1 className="flex flex-col items-center text-4xl font-bold">
            {event.name}
          </h1>
          <p className="text-[#4F4F4F] text-center text-sm">
            Hosted by <span className="font-semibold">{event.host}</span>
          </p>
        </div>
        <Link href="/create">
          <div className="flex items-center w-full gap-6 mt-4">
            <IoCalendarOutline className="text-[#8456EC] text-2xl rounded-lg my-2 shrink-0" />
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col items-start justify-center">
                <h2 className="text-lg font-semibold">
                  {formatDate(event.startDate)}
                </h2>
                <p className="text-sm text-[#4F4F4F]">
                  to {formatDate(event.endDate)}
                </p>
              </div>
              <AiOutlineRight className="text-[#BDBDBD]" />
            </div>
          </div>
        </Link>
        <Link href="/create">
          <div className="flex items-center w-full gap-6 mt-4">
            <HiOutlineLocationMarker className="text-[#8456EC] text-2xl rounded-lg my-2 shrink-0" />
            <div className="flex items-center justify-between w-full">
              <h2 className="text-sm font-semibold">{event.location}</h2>
              <AiOutlineRight className="text-[#BDBDBD]" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Event;
