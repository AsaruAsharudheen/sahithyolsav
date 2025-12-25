import React from "react";
import "./program.css";
import useCountUp from "../useCountUp";

const Stat = ({ value, label, suffix = "" }) => {
  const [count, ref] = useCountUp(value);

  return (
    <div className="stat-card" ref={ref}>
      <div className="stat-content">
        <h3>
          {count}
          {suffix}
        </h3>
        <p>{label}</p>
      </div>
    </div>
  );
};

const ProgramStatsAlt = () => {
  return (
    <section className="stats-wrapper">
      <div className="stats-grid">
        <Stat value={10000} suffix="+" label="Contestants" />
        <Stat value={2000} suffix="+" label="Families" />
        <Stat value={340} suffix="+" label="Units" />
        <Stat value={100} suffix="+" label="Schools & Campuses" />
        <Stat value={67} label="Sectors" />
        <Stat value={12} label="Zones" />
        <Stat value={13} label="Categories" />
        <Stat value={100} suffix="+" label="Competitions" />
      </div>
    </section>
  );
};

export default ProgramStatsAlt;