"use client";

import Lottie from "lottie-react";
import animationData1 from "./animation1-270524.json";
import animationData2 from "./animation2-270524.json";
import animationData3 from "./animation3-270524.json";
import animationData4 from "./animation4-270524.json";
import animationData5 from "./animation5-270524.json";
//import animationData6 from "./animation6-270524.json";
import animationData7 from "./animation7-270524.json";
import animationData8 from "./animation8-270524.json";

// Computer screen ---HTML
export const LottieAnimation1: React.FC = () => {
  return <Lottie animationData={animationData1} loop={true} />;
};

// World globe
export const LottieAnimation2: React.FC = () => {
  return <Lottie animationData={animationData2} loop={true} />;
};

// Computers connected  ...Javascript
export const LottieAnimation3: React.FC = () => {
  return <Lottie animationData={animationData3} loop={true} />;
};

// Assembling the cube ...React
export const LottieAnimation4: React.FC = () => {
  return <Lottie animationData={animationData4} loop={true} />;
};

// Four color balls ...CSS
export const LottieAnimation5: React.FC = () => {
  return <Lottie animationData={animationData5} loop={true} />;
};

// export const LottieAnimation6: React.FC = () => {
//   return <Lottie animationData={animationData6} loop={true} />;
// };

// Not transparent
export const LottieAnimation7: React.FC = () => {
  return <Lottie animationData={animationData7} loop={true} />;
};

// OK for Javascript
export const LottieAnimation8: React.FC = () => {
  return <Lottie animationData={animationData8} loop={true} />;
};
