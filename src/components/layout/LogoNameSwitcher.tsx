import { useState, useEffect } from "react";
import "./logoNameSwitcher.css";

const LogoNameSwitcher = () => {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setShowLogo((prev) => !prev), 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-32 h-10 flex items-center justify-center" style={{ overflow: "visible" }}>
      <img
        src="/images/logo/logo2.png"
        alt="Daylight Logo"
        className={`absolute left-1/3 top-1/2 transition-opacity duration-700 ${showLogo ? "opacity-100" : "opacity-0"} -translate-x-1/2 -translate-y-1/2`}
        style={{ borderRadius: "50%", width: "72px", height: "72px" }}
      />
      <span
        className={`absolute text-3xl font-display font-bold text-primary transition-opacity duration-700 whitespace-nowrap logo-text-responsive ${!showLogo ? "opacity-100" : "opacity-0"}`}
        style={{ left: 5 }}
      >
        Daylight Adult Daycare
      </span>
    </div>
  );
};

export default LogoNameSwitcher;
