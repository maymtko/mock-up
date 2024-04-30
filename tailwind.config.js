/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-black': '#171717',
        'nav-border': '#666666',
        'main-content': '#212121',
        'gold-color':'#B38200',
        'bot-card-color':'#4E4E4E',
        'nav-white':'#E7E7E7',
        'main-content-light':'#E9E9E9',
        // 'card-color-light':'#E4E3E4',
        'card-color-light':'#FFFFFF',
        'blue-color':'#0078D4',
        'purple-color':'#5F41B1',
        'pink-color':'#FD9EC7',
      },
    },
  },
  plugins: [],
}

