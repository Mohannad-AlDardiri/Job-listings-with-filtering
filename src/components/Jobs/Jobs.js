import React from "react";
import JobsCards from "./JobsCards";
import Filter from "../Filter/Filter";
export default function Jops() {
  return (
    <>
      <div className="jops-container ">
        <Filter />
        <JobsCards />
      </div>
    </>
  );
}
