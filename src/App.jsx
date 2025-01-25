import Hero from "./components/Hero";
import Navbar from "./components/NAvbar";
import SmoothScrollLenis from "./components/SmoothScrollLenis";

function App() {
  return (
    <>
      <Navbar />
      <SmoothScrollLenis />
      <Hero />

      <div className="bottom"></div>
      <div id="launch-schedule"></div>
    </>
  );
}

export default App;
