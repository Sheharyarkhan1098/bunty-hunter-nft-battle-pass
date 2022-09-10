import React, { Suspense } from "react";
import "./App.css";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
const Navbar = React.lazy(() => import("./components/navbar"));
const TopSection = React.lazy(() => import("./components/topSection"));
const SecondSection = React.lazy(() => import("./components/secondSection"));
const RoadMap = React.lazy(() => import("./components/roadmap"));
const Team = React.lazy(() => import("./components/team"));
const FAQs = React.lazy(() => import("./components/FAQs"));
const BottomBar = React.lazy(() => import("./components/bottomBar"));

function getLibrary(provider) {
  return new Web3(provider);
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Suspense fallback={<div></div>}>
        <Navbar />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <TopSection />
        </Suspense>
        {/* <Suspense fallback={<div></div>}>
        <SecondSection />
        </Suspense>
        <Suspense fallback={<div></div>}>
        <RoadMap />
        </Suspense>
        <Suspense fallback={<div></div>}>
        <Team />
        </Suspense>
        <Suspense fallback={<div></div>}>
        <FAQs />
        </Suspense> */}
        {/* <Suspense fallback={<div></div>}>
        <BottomBar />
        </Suspense> */}
      
    </Web3ReactProvider>
  );
}

export default App;
