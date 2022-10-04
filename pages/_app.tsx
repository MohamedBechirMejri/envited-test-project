import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [event, setEvent] = useState({
    name: "",
    host: "",
    startDate: "",
    endDate: "",
    location: "",
    picture: "",
  });
  return <Component {...pageProps} event={event} setEvent={setEvent} />;
}

export default MyApp;
