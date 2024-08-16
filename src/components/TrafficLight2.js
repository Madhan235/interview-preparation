import React, { useEffect, useState } from "react";

export default function TrafficLight2() {
  const [light, setLight] = useState("red");
  const lightConfig = {
    red: {
      duration: 3000,
      next: "green",
    },

    green: {
      duration: 5000,
      next: "orange",
    },
    orange: {
      duration: 3000,
      next: "red",
    },
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLight(lightConfig[light]?.next);
    }, lightConfig[light]?.duration);

    return () => clearTimeout(timeOut);
  }, [light]);

  return (
    <div className="trafficlight">
      <div className={`light red ${light === "red" && "active"}`}></div>
      <div className={`light green ${light === "green" && "active"}`}></div>
      <div className={`light orange ${light === "orange" && "active"}`}></div>
    </div>
  );
}
