import Header from './components/header'
import Intro from './components/intro'
import Sponsers from './components/Sponsers'
import Purchase from './components/Purchase_btn'
import Pages from './components/Pages'
import Browser from './components/Browser'
import Feature from './components/feature'
import Footer from './components/Footer'
import { particles } from "../utils/smoke";
import { useEffect } from "react";

// Helper function to check if screen size is md or larger
const isMediumScreenOrLarger = () => {
  return window.matchMedia("(min-width: 768px)").matches; // Tailwind CSS 'md' breakpoint is 768px
};

function App() {
  useEffect(() => {
    if (isMediumScreenOrLarger()) {
      particles();
    }
  }, []);

  return (
    <>
    <canvas></canvas>
    <main>
      <div className=" flex flex-col justify-center items-center gap-16  ">
        <Header></Header>
        <Intro></Intro>
        <Sponsers></Sponsers>
        <Purchase></Purchase>
        <Pages></Pages>
        <Browser></Browser>
        <Feature></Feature>
        <Footer></Footer>
      </div>
    </main>
    </>
  )
}

export default App
