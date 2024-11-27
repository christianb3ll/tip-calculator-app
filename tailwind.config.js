/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "space-mono": "Space Mono, sans-serif"
    },
    colors: {
      "strong-cyan": "hsl(172, 67%, 45%)",
      "strong-cyan-highlight": "hsl(172, 61%, 77%)",
      "very-dark-cyan": "hsl(183, 100%, 15%)",
      "dark-grayish-cyan": "hsl(186, 14%, 43%)",
      "grayish-cyan": "hsl(184, 14%, 56%)",
      "light-grayish-cyan": "hsl(185, 41%, 84%)",
      "very-light-grayish-cyan": "hsl(189, 41%, 97%)",
      "white": "hsl(0, 0%, 100%)"
    },
    borderRadius: {
      "sm": "0.313rem",
      "md": "0.938rem",
      "lg": "1.563rem"
    },
    backgroundImage: {
      "dollar-icon": "url(src/assets/icon-dollar.svg)",
      "person-icon": "url(src/assets/icon-person.svg)"
    },
    dropShadow: {
      "body": "0 32px 43px rgba(79, 166, 175, 0.20)"
    }
  },
  plugins: [],
}

