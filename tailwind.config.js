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
      fontFamily:{
        "pop": ["Poppins",'sans-serif'],
        "robo": ["ROboto", "sans-serif"]
      },
      fontSize:{
        "large": "52px",
        "medium" : "24px",
        "normal" : "16px",
        "small" : "12px"
      },
      lineHeight:{
        "large" : "72px",
        "medium" : "32px",
        "normal" : "22px",
        "small" : "10px"
      }
    },
  },
  plugins: [],
}

