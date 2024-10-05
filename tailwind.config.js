/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grape2: "rgba(var(--grape2))",
        line: "rgba(var(--line))",
        card: "rgba(var(--card))",
        copyprimary: "rgba(var(--copyprimary))",
        copysecondary : "rgba(var(--copysecondary))",
        copythirtiary : "rgba(var(--copythirtiary))",
        cta: "rgba(var(--cta))",

        grape: "rgba(var(--grape))",
      },
    },
  },
  plugins: [],
}