import { useEffect, useState } from "react";
import { Navbar } from "../Components/Navbar";

/* eslint-disable react/prop-types */
export const MasterLayout = ({ children }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [bgColors, setBgColors] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }

      if (window.scrollY > 100) {
        setBgColors(true);
      } else {
        setBgColors(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Navbar isScroll={isScroll} setBgColor={bgColors} />
      <main>{children}</main>
    </>
  );
};
