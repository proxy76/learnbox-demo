/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js, ts, jsx, tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-sky-blue': '#9AD0FDff',
        'polynesian-blue': '#1C53A3ff',
        'white': '#FFFFFFff',
        'bleu-de-france': '#4288DCff',
        'powder-blue': '#9FB6D8ff',
      }
    },
  },
  plugins: [],
}

