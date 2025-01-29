import Hero from "./components/Hero";
import Navbar from "./components/NAvbar";
import ParallaxGallery from "./components/ParallaxGallery";
import SmoothScrollLenis from "./components/SmoothScrollLenis";
import { ReactLenis } from "lenis/dist/lenis-react";
function App() {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.07,
      }}
    >
      {/* <Navbar /> */}
      <SmoothScrollLenis />
      {/* <Hero /> */} <div className="bottom"></div>
      <div id="launch-schedule"></div>
      <div className="bottom"></div>
      <div id="launch-schedule"></div>
      <ParallaxGallery />
      <div className="bottom"></div>
      <div id="launch-schedule"></div>
    </ReactLenis>
  );
}

export default App;
