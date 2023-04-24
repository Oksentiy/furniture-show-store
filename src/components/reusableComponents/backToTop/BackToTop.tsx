import { useEffect, useState } from "react";
import './backToTop.scss';

export const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
   <>
     {showButton && (
       <button onClick={scrollToTop} className="back-to-top">
         &#9650;
       </button>
     )}
   </>
  )
}