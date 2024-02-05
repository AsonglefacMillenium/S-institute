import React from "react";
import { Route, Routes } from "react-router-dom";
import { Agriculture, Bachelors, CorePrinciple, EngineeringTechnology, Foundation, HealthScience, Hnd, Home, Masters } from "../Pages";
import { MoreEventsSection } from "../Sections";


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bachelors" element={<Bachelors />}/>
      <Route path="/hnd" element={<Hnd />} />
      <Route path="/masters" element={<Masters />} />
      <Route path="/foundation" element={<Foundation />} />
      <Route path="/coreprinciples" element={<CorePrinciple />}/>
      <Route path="/healthscience" element={<HealthScience />} />
      <Route path="/engineering-technology" element={<EngineeringTechnology />} />
      <Route path="/agriculture" element={<Agriculture />} />
      <Route path="/more-event" element={<MoreEventsSection />} />

    </Routes>
  );
};

export default Router;
