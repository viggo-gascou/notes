import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";


export default function DarkModeToggle() {
  const [theme, setTheme] = useState(() => {
    if (import.meta.env.SSR) {
      return undefined
    }
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme')
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  })

  const toggleTheme = () => {
    const t = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", t);
    setTheme(t);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [theme]);

  const properties = {
    dark: {
      r: 9,
      transform: "rotate(40deg)",
      cx: 12,
      cy: 4,
      opacity: 0
    },
    light: {
      r: 5,
      transform: "rotate(90deg)",
      cx: 30,
      cy: 0,
      opacity: 1
    },
    springConfig: { mass: 4, tension: 250, friction: 35 },
    };




  const moonIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: "pointer" }}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
  );

  const sunIcon = (
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: "pointer" }}>
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    <circle fill="black" cx="12" cy="12" r="5"/>
  </svg>

  );

  const springProps = useSpring({
    transform: theme === "light" ? "rotate(180deg)" : "rotate(0deg)",
    config: {  mass: 4, tension: 250, friction: 35 },
  });

  return (
    <button onClick={toggleTheme} className="rounded p-2 bg-shark-100 hover:scale-110 ease-in-out duration-500 dark:bg-neutral-700 hover:shadow-accent">
      <animated.div style={springProps}>
        {theme === "light" ? sunIcon : moonIcon}
      </animated.div>
    </button>
  );
}



