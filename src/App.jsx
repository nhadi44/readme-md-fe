/* eslint-disable no-unused-vars */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/Home/page";
import { OurStory } from "./Pages/OurStory/page";
import { Creators } from "./Pages/Creators/page";
import { NotFound } from "./Pages/Errors/404";
import { MasterLayout } from "./Layouts/master";
import { Navbar } from "./Components/Navbar";

export const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <MasterLayout>
                <HomePage />
              </MasterLayout>
            }
          />

          <Route
            path="/our-story"
            element={
              <MasterLayout>
                <OurStory />
              </MasterLayout>
            }
          />

          <Route
            path="/creators"
            element={
              <MasterLayout>
                <Creators />
              </MasterLayout>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};
