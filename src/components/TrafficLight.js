import { useState, useEffect } from "react";

export default function TrafficLight() {
  const [light, setLight] = useState("red");

  const lightConfig = {
    red: {
      next: "green",
      duration: 4000,
    },
    green: {
      next: "orange",
      duration: 4000,
    },
    orange: {
      next: "red",
      duration: 2000,
    },
  };

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setLight(lightConfig[light]?.next);
    }, lightConfig[light]?.duration);

    return () => clearTimeout(timeOutId);
  }, [light]);

  return (
    <div className="trafficlight">
      <div className={`light red ${light === "red" && "active"} `}></div>
      <div className={`light green ${light === "green" && "active"}`}></div>
      <div className={`light orange ${light === "orange" && "active"} `}></div>
    </div>
  );
}
