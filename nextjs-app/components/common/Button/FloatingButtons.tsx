import RegisterSailorButton from "./RegisterSailorButton";
import RegisterNavigatorButton from "./RegisterNavigatorButton";
import "./FloatingButtons.css";

const FloatingButtons = () => {
  return (
    <>
      <div className="btn-hover-animation-sailor fixed bottom-[144px] -right-[160px] transition-all duration-300 inline-flex flex-col space-y-3 z-50">
        <RegisterSailorButton />
      </div>
      <div className="btn-hover-animation-navigator fixed bottom-[72px] -right-[160px] transition-all duration-300 inline-flex flex-col space-y-3 z-50">
        <RegisterNavigatorButton />
      </div>
    </>
  );
};

export default FloatingButtons;
