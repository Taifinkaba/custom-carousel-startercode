import { useState } from "react";
import "./App.css";

const carouselImages = [
  "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
  "https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg",
  "https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg",
];

export const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleBoundry = (idx) => (idx+carouselImages.length)% carouselImages.length
  const handleNext = () => setCurrentIndex(prevIdx => handleBoundry(prevIdx + 1));
  const handlePrev = () => setCurrentIndex(prevIdx => handleBoundry(prevIdx + 1));

  return (
    <>
      <h1 style={{ textAlign: "center"}}>Tai's Custom React Carousel 🦄</h1>
      <img src={carouselImages[currentIndex]}  />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={handlePrev}>{"<"} Prev</button>
        <button onClick={handleNext}>Next {">"}</button>
      </div>
    </>
  );
};



// failed 
// export const work = () => {
//   const[currentIndex, setCurrentIndex] = useState(0);
//   const handleBoundry = (idx) => (idx+carouselImages.length)% carouselImages.length
//   const handleNext = () => setCurrentIndex(prevIdx => handleBoundry(prevIdx + 1));
//   const handlePrev = () => setCurrentIndex(prevIdx => handleBoundry(prevIdx + 1));

// }

// export const App = (handleNext, handlePrev) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // const handleNext = () => {
//   //   // setCurrentIndex((setNext) => {
//   //   //   setNext === carouselImages.length - 1 ? 0 : setNext + 1; 
//   //   // });
//   //   setCurrentIndex(prevIdx => (prevIdx + 1) % carouselImages.length);
//   // }

//   // const handlePrev = () => {
//   //   // setCurrentIndex((setNext) => {
//   //   //   setNext === carouselImages.length - 1 ? 0 : setNext - 1; 
//   //   // });
//   //   setCurrentIndex(prevIdx => (prevIdx - 1 + carouselImages.length) % carouselImages.length);
//   // }

//   // const handleBoundry = (idx) => (idx+carouselImages.length)% carouselImages.length
//   // const handleNext = () => setCurrentIndex(prevIdx => handleBoundry(prevIdx + 1));
//   // const handlePrev = () => setCurrentIndex(prevIdx => handleBoundry(prevIdx + 1));

//   return (
//     <>
//       <h1 style={{ textAlign: "center"}}>Tai's Custom React Carousel 🦄</h1>
//       <img src={carouselImages[currentIndex]}  />
//       <div style={{ display: "flex", justifyContent: "space-between" }}>
//         <button onClick={handlePrev}>{"<"} Prev</button>
//         <button onClick={handleNext}>Next {">"}</button>
//       </div>
//     </>
//   );
// };
