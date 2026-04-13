import React, { useEffect, useRef, useState } from "react";

// This function takes a title and highlights one word and it's style inside it
export const Format_highlighted_title = (highlight: string, title: string) => {
  // Split the main title into words for processing
  const title_words = title.split(" ");

  // Map through each word and highlight the specific one
  const formated_title = title_words.map((word, index) => {
    // Check if the current word matches the highlight word
    const is_highlight = word == highlight;

    // Return a styled <span> for the highlighted word or plain text otherwise
    return is_highlight ? (
      <span key={index} className={` text-secondary`}>
        {word}
      </span>
    ) : (
      ` ${word} `
    );
  });

  // Render the formatted title
  return <>{formated_title}</>;
};

export function useCounterOnScroll(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry!.isIntersecting) {
          setStart(true);
          observer.unobserve(entry!.target);
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    const startTime = performance.now();

    function update(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * target);

      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }, [start, target, duration]);

  return { count, ref };
}

export const useRender_stars_regular = (stars_number: number, style?: string) => {
  return (
    <div className="elements-row gap-[5px] text-secondary">
      {Array(5)
        .fill(0)
        .map((star, index) => {
          return (
            <i
              key={index}
              className={`${index + 1 <= stars_number ? "fa-solid" : "fa-regular"
                } fa-star ${style && style}`}
            ></i>
          );
        })}
    </div>
  );
};

export const format_page_path_to_render = (path: string): string[] => {
  let path_format = path.split("/");
  let format_word_of_path = path_format.map((word) => {
    if (word.includes("_")) {
      const final_word = word.split("_").join(" ");
      return final_word;
    }
    return word;
  });
  return format_word_of_path;
};

export const format_page_path_to_link = (path: string): string => {
  let format_path = path.split(" ").join("_");
  return format_path;
};


export const found_data_from_array = <data extends { id: string | number }>(all_courses: data[], course_id: string | number) => {
  const my_course = all_courses.find((course) => course.id == course_id);
  return my_course;
};

// If the user clicks on any item that is not of the menu type, the menu closes automatically
export const use_out_side_click = (ref: React.RefObject<HTMLElement | null>, callback: () => void) => {
  useEffect(() => {
    const handle_click = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
        callback();
      }
    };

    document.addEventListener("click", handle_click);

    return () => document.removeEventListener("click", handle_click);
  }, [ref, callback]);
};

import { useMemo } from "react";

// Custom hook to format a date into a relative time string
export const useRelativeTime = (date: Date | string | number): string => {

  const formattedTime = useMemo(() => {
    const now = new Date().getTime();
    const target = new Date(date).getTime();

    // the diff with mili second
    const diff = Math.abs(now - target);

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);

    // less then minute
    if (seconds < 60) {
      return `1m`;
    }

    // less then hour
    if (minutes < 60) {
      return `${minutes}m`;
    }

    // less then day (hour + minute)
    if (hours < 24) {
      const remainingMinutes = minutes % 60;
      return remainingMinutes > 0
        ? `${hours}h ${remainingMinutes}m`
        : `${hours}h`;
    }

    // less then week
    if (days < 7) {
      return `${days}d`;
    }

    // greater then week
    if (weeks < 4) {
      return `${weeks} week${weeks > 1 ? "s" : ""}`;
    }

    // if greater then all (fallback)
    return new Date(date).toLocaleDateString();

  }, [date]);

  return formattedTime;
};

