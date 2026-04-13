import type { SetStateAction } from "react";
import type React from "react";

// Define the props type for the Pagination_buttons component
type propsType<T> = {
  ref: T | null, // Reference to the container element for smooth scrolling
  numberOfPackages: number; // Total number of pages/packages
  currentIndex: number; // Currently active page index
  setCurrentIndex: React.Dispatch<SetStateAction<number>>; // Function to update the current index
};

const Pagination_buttons = <T extends HTMLElement>({
  ref,
  numberOfPackages,
  currentIndex,
  setCurrentIndex,
}: propsType<T>) => {

  // Calculate which page numbers to display based on currentIndex
  const paginationData = (): number[] => {
    // If the number of packages is greater then 2 
    if (numberOfPackages > 2) {
      if (currentIndex > 0 && currentIndex < numberOfPackages - 1) {
        // Show previous, current, and next page numbers
        return [currentIndex - 1, currentIndex, currentIndex + 1];
      } else if (currentIndex > 0 && currentIndex === numberOfPackages - 1) {
        // If on the last page, show the last three pages
        return [currentIndex - 2, currentIndex - 1, currentIndex];
      } else if (currentIndex === 0) {
        // If on the first page, show the first three pages
        return [currentIndex, currentIndex + 1, currentIndex + 2];
      } else return [];
    }
    // If the number of packages is less then 2 
    else {
      if (numberOfPackages == 2) return [0, 1];
      if (numberOfPackages == 1) return [0, 1]
      return []
    }
  };

  // Function to go to the next page
  const incrementIndex = (): void => {
    // Scroll to the referenced element smoothly
    if (ref) window.scrollTo({ top: (ref as HTMLElement).offsetTop, behavior: "smooth" })

    // Increase index if not already at the last page
    if (currentIndex < numberOfPackages - 1) {
      setCurrentIndex(prev => prev + 1)
    }
  };

  // Function to go to the previous page
  const decrementIndex = (): void => {
    // Scroll to the referenced element smoothly
    if (ref) window.scrollTo({ top: ref.offsetTop, behavior: "smooth" })

    // Decrease index if not already at the first page
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1)
    }
  };

  return (
    <div className="pagination elements-center-row gap-2.5 my-12.5">
      {/* Previous button */}
      <button onClick={decrementIndex} className={`prev_btn ${button_shap_className}`}>
        <i className="fa-solid fa-angle-left"></i>
      </button>

      {/* Display page numbers */}
      <div className="page_numbers elements-center-row gap-2.5">
        {paginationData().map((index) => {
          return (
            <div key={index}>
              <span
                className={`${button_shap_className} ${index == currentIndex ? "bg-primary!" : ""}`}
              >
                {index + 1} {/* Display page number (1-based) */}
              </span>
            </div>
          );
        })}
      </div>

      {/* Next button */}
      <button type="button" onClick={incrementIndex} className={`next_btn ${button_shap_className}`}>
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </div>
  );
};

// Common styles for all pagination buttons
const button_shap_className = `
    w-[40px] h-[40px] text-[18px] cursor-pointer rounded-[5px] bg-secondary text-white
    elements-center-row hover:bg-primary
    `;

export default Pagination_buttons;