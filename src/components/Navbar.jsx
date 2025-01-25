import { FiArrowRight } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav>
      <h3>title</h3>
      <button
        onClick={() => {
          document.getElementById("launch-schedule")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        launch schedule <FiArrowRight className="icon" size={14} />
      </button>
    </nav>
  );
};
export default Navbar;
