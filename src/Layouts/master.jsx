import { Navbar } from "../Components/Navbar";

/* eslint-disable react/prop-types */
export const MasterLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
