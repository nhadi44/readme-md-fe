import { NavLink, useLocation } from "react-router-dom";
import Markdown from "../Assets/icons/markdown.svg";
import MarkdownWhite from "../Assets/icons/markdown-white.svg";
import { useState } from "react";
import { ModalComponent } from "./Modal/Modal";
import { AuthModalContent } from "./Modal/AuthModalContent";

export const Navbar = () => {
  const pathname = useLocation().pathname;
  const [signinModal, setsigninModal] = useState(false);
  const [modalContent, setModalContent] = useState(false);

  const togglesigninModal = () => {
    setsigninModal(!signinModal);
    setModalContent(!modalContent);
  };

  const toggleSignupModal = () => {
    setsigninModal(!signinModal);
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("modal")) {
      setsigninModal(false);
      setModalContent(false);
    }
  };

  const closeModal = () => {
    setsigninModal(false);
    setModalContent(false);
  };

  const showSignupContent = () => {
    setModalContent(false);
  };

  const showSigninContent = () => {
    setModalContent(true);
  };

  return (
    <>
      <nav
        className={
          pathname === "/"
            ? "bg-yellow-400 py-3 transition-all ease-in border-b-[1px] border-b-slate-900"
            : pathname === "/our-story"
            ? "bg-white py-3 transition-all ease-in border-b-[1px] border-b-slate-900"
            : "bg-red-500 py-3 transition-all ease-in border-b-[1px] border-b-slate-900"
        }
      >
        <div className="container flex justify-between">
          <NavLink to={"/"} className="flex items-center gap-3">
            <img
              src={pathname === "/creators" ? MarkdownWhite : Markdown}
              alt="readme-brand"
              className="w-16"
            />
            <span
              className={
                pathname === "/creators"
                  ? "text-2xl font-semibold text-white"
                  : "text-2xl font-semibold text-slate-900"
              }
            >
              Readme.md
            </span>
          </NavLink>

          <ul className="flex items-center gap-5">
            {pathname === "/creators" ? (
              <>
                <li
                  className="text-[16px] hover:text-slate-950 text-slate-900"
                  onClick={togglesigninModal}
                >
                  <div className="hover:cursor-pointer text-white">Sign In</div>
                </li>

                <li className="text-[16px]" onClick={toggleSignupModal}>
                  <div className="bg-slate-900 text-white py-2 px-3 rounded-md hover:bg-slate-950 hover:cursor-pointer">
                    Get Started
                  </div>
                </li>
              </>
            ) : (
              <>
                <li className="text-[16px] hover:text-slate-950 text-slate-900">
                  <NavLink
                    to={"/our-story"}
                    className={pathname == "/our-story" ? "border-b-[1px] border-b-slate-900 " : ""}
                  >
                    Our Story
                  </NavLink>
                </li>

                <li className="text-[16px] hover:text-slate-950 text-slate-900">
                  <NavLink to={"/creators"}>Write</NavLink>
                </li>

                <li
                  className="text-[16px] hover:text-slate-950 text-slate-900"
                  onClick={togglesigninModal}
                >
                  <div className="hover:cursor-pointer">Sign In</div>
                </li>

                <li className="text-[16px]" onClick={toggleSignupModal}>
                  <div className="bg-slate-900 text-white py-2 px-3 rounded-md hover:bg-slate-950 hover:cursor-pointer">
                    Get Started
                  </div>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
      <ModalComponent
        isOpen={signinModal}
        clickBackdrop={handleBackdropClick}
        modalWidth={"w-11/12 max-w-2xl"}
        closeModal={closeModal}
        content={
          <AuthModalContent
            modalContent={modalContent}
            signin={showSigninContent}
            signup={showSignupContent}
          />
        }
      />
    </>
  );
};
