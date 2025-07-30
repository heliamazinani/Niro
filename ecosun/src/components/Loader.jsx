import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
export const goToTop = () => {
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const Loader = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
  
    useEffect(() => {
      const updatePosition = () => {
        setScrollPosition(window.pageYOffset);
      };
  
      window.addEventListener("scroll", updatePosition);
  
      return () => window.removeEventListener("scroll", updatePosition);
    }, []);
  return (
    <>
      <div className="loader-wrap">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
        </svg>

        <div className="loader-wrap-heading">
          <div className="load-text">
            <span>در حال آماده سازی</span>
          </div>
        </div>
      </div>
      <div className="cursor"></div>
      {/* <AnimatePresence>
        {scrollPosition > 100 && (
          <motion.button
            onClick={goToTop}
            className="scrollToTop-btn"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
            exit={{ y: 100, opacity: 0, transition: { duration: 0.6 } }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 1 }}
          >
            
              <svg
                className="progress-circle svg-content"
                width="100%"
                height="100%"
                viewBox="-1 -1 102 102"
              >
                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
              </svg>
            
          </motion.button>
        )}
      </AnimatePresence> */}
    </>
  );
};

export default Loader;
