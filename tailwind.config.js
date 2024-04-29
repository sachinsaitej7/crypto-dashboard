/** @type {import('tailwindcss').Config} */
const COLORS = [
  "purple",
  "red",
  "fuchsia",
  "pink",
  "purple",
  "violet",
  "indigo",
  "blue",
  "sky",
  "cyan",
  "teal",
  "emerald",
  "green",
  "lime",
  "amber",
  "orange",
];

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    ...COLORS.map((color) => `bg-${color}-500`),
    ...COLORS.map((color) => `bg-${color}-200`),
    ...COLORS.map((color) => `hover:bg-${color}-500`),
    ...COLORS.map((color) => `hover:bg-${color}-400`),
  ],
};
