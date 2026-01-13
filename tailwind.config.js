/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App.tsx",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        spaceLight: ["SpaceGrotesk_300Light"],
        spaceRegular: ["SpaceGrotesk_400Regular"],
        spaceBold: ["SpaceGrotesk_700Bold"],
        spaceSemibold: ["SpaceGrotesk_600SemiBold"],
        spaceMedium: ["SpaceGrotesk_500Medium"],
      },
    },
  },
  plugins: [],
};
