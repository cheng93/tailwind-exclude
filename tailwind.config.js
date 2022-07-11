/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/!(*.spec).{html,ts}", "!src/**/*.spec.ts"],
  theme: {
    extend: {},
  },
  plugins: [],
};
