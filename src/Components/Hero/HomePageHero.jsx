import { useState } from "react";
import { HeroComponent } from "./Hero";
import { ModalComponent } from "../Modal/Modal";
import { AuthModalContent } from "../Modal/AuthModalContent";

export const HomePageHero = () => {
  const [signUpModal, setSignUpModal] = useState(false);
  const [modalContent, setModalContent] = useState(false);

  const toggleSignUpModal = () => {
    setSignUpModal(!signUpModal);
    setModalContent(modalContent);
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("modal")) {
      setSignUpModal(false);
      setModalContent(false);
    }
  };

  const closeModal = () => {
    setSignUpModal(false);
  };

  const showSignupContent = () => {
    setModalContent(false);
  };

  const showSigninContent = () => {
    setModalContent(true);
  };

  return (
    <HeroComponent
      heroWrapperClass={"border-b-[1px] border-b-slate-900"}
      heroOverlayColor={"bg-yellow-400"}
      content={
        <>
          <div className="max-w-5xl py-16">
            <h1 className="text-5xl font-bold mb-4">Become a Published Author.</h1>
            <p className="py-6 text-lg mb-4">
              Realize your dream of becoming a published author. Write, edit, and publish your work
              on our platform, reaching a wide audience of readers and fellow writers. Start your
              writing journey and leave your mark
            </p>
            <button
              className="bg-slate-900 text-white px-4 py-3 rounded-md transition-all ease-in hover:bg-slate-950"
              onClick={toggleSignUpModal}
            >
              Start Reading
            </button>
          </div>
          <ModalComponent
            isOpen={signUpModal}
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
      }
    />
  );
};
