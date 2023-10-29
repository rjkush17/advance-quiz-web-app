/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage :{
        "custom" : "url(./assets/background.png)"
      },
      screens:{
        "laptop" : "1050px",
        "mobile" : "700px"
      },
      fontFamily:{
        "pop": ["Poppins",'sans-serif'],
        "robo": ['Roboto', "sans-serif"]
      },
      fontSize:{
        "large": "52px",
        "medium" : "24px",
        "normal" : "16px",
        "small" : "13px"
      },
      lineHeight:{
        "large" : "72px",
        "medium" : "32px",
        "normal" : "22px",
        "small" : "10px"
      },
      colors:{
        "primary" : "#5c45fd",
        "scondary" : "#8a79ff",
        "third" : "#2a2b6a",
        "black":"161616",
        "whitee": "efedff",
      }
    },
  },
  plugins: [],
}

