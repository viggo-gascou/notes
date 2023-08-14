import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

// const themes = ['light', 'dark']

// export default function ThemeToggle() {


  // const properties = {
	// dark: {
	// 	r: 9,
	// 	transform: "rotate(40deg)",
	// 	cx: 12,
	// 	cy: 4,
	// 	opacity: 0
	// },
	// light: {
	// 	r: 5,
	// 	transform: "rotate(90deg)",
	// 	cx: 30,
	// 	cy: 0,
	// 	opacity: 1
	// },
	// springConfig: { mass: 4, tension: 250, friction: 35 },
  // };


  // const { r, transform, cx, cy, opacity } = properties[
  //   theme === "light" ? "light" : "dark"
  //   ];
    
  // const svgContainerProps = useSpring({
  //   transform,
  //   config: properties.springConfig
  // });
  // const centerCircleProps = useSpring({ r, config: properties.springConfig });
  // const maskedCircleProps = useSpring({
  //   cx,
  //   cy,
  //   config: properties.springConfig
  // });
  // const linesProps = useSpring({ opacity, config: properties.springConfig });

// return (
// 	<div className="inline-flex items-center p-[1px]">
	// 	<animated.svg
	// 	xmlns="http://www.w3.org/2000/svg"
	// 	width="24"
	// 	height="24"
	// 	viewBox="0 0 24 24"
	// 	fill="none"
	// 	strokeWidth="2"
	// 	strokeLinecap="round"
	// 	strokeLinejoin="round"
	// 	stroke="currentColor"
	// 	onClick={toggleTheme}
	// 	style={{
	// 	cursor: "pointer",
	// 	...svgContainerProps
	// 	}}
	// >
	// 	<mask id="mask">
	// 	<rect x="0" y="0" width="100%" height="100%" fill="white" />
	// 	<animated.circle 
  //   // @ts-ignore
  //   style={maskedCircleProps} 
  //   r="9" fill="black" />
	// 	</mask>

	// 	<animated.circle
	// 	cx="12"
	// 	cy="12"
  //   // @ts-ignore
	// 	style={centerCircleProps}
	// 	// can the transition between the colors be animated?
  //   fill={theme === "light" ? "black" : "white"}

	// 	mask="url(#mask)"
	// 	/>
	// 	<animated.g style={linesProps}>
		// <line x1="12" y1="1" x2="12" y2="3" />
		// <line x1="12" y1="21" x2="12" y2="23" />
		// <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
		// <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
		// <line x1="1" y1="12" x2="3" y2="12" />
		// <line x1="21" y1="12" x2="23" y2="12" />
		// <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
		// <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
	// 	</animated.g>
	// </animated.svg>
//   </div>
// 	);
// }

function DarkModeToggle() {
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

    const { r, transform, cx, cy, opacity } = properties[
      theme === "light" ? "light" : "dark"
      ];

    const svgContainerProps = useSpring({
      transform,
      config: properties.springConfig
    });
    const centerCircleProps = useSpring({ r, config: properties.springConfig });
    const maskedCircleProps = useSpring({
      cx,
      cy,
      config: properties.springConfig
    });
    const linesProps = useSpring({ opacity, config: properties.springConfig });


  const moonIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: "pointer" }}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
  );

  const sunIcon = (
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: "pointer" }}><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  <circle fill="black" cx="12" cy="12" r="5"/>
</svg>

  );

  const springProps = useSpring({
    transform: theme === "light" ? "rotate(180deg)" : "rotate(0deg)",
    config: {  mass: 4, tension: 250, friction: 35 },
  });

  return (
    <button onClick={toggleTheme} className="rounded p-2 bg-neutral-50 dark:bg-neutral-700 hover:shadow hover:dark:shadow-blue-500 has-tooltip">
      <animated.div style={springProps}>
        {theme === "light" ? sunIcon : moonIcon}
      </animated.div>
    </button>
  );
}

export default DarkModeToggle;



// <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       stroke-width="2"
//       stroke-linecap="round"
//       stroke-linejoin="round"
//       style={{ transform: "rotate(40deg)", cursor: "pointer" }}
//     >
//       <mask id="mask">
//         <rect x="0" y="0" width="100%" height="100%" fill="white" />
//         <circle cx="12" cy="4" r="9" fill="black" />
            
//       </mask>
//       <circle fill="black" cx="12" cy="12" r="9" mask="url(#mask)" />
//       <g stroke="currentColor">
//         <line x1="12" y1="1" x2="12" y2="3" />
//         <line x1="12" y1="21" x2="12" y2="23" />
//         <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
//         <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
//         <line x1="1" y1="12" x2="3" y2="12" />
//         <line x1="21" y1="12" x2="23" y2="12" />
//         <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
//         <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
//       </g>
//     </svg>
