/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "partner" : "url('/src/assets/partner-background.png')",
        'custom-gradient1': 'linear-gradient(80.92deg, #D5F3FF 0.02%, #cfdaff 99.91%)',
        'custom-gradient2': 'linear-gradient(80.92deg, #D5F3FF 0.02%, #cfdaff 99.91%)',
        'custom-gradient3':'linear-gradient(79.92deg, #EAF7FF 0.02%, #E7ECFE 99.91%)',
        "slider-bg" : "url('/src/assets/sliderbg.png')",
        'service-bg' : 'linear-gradient(180deg, #E7EFFF 0%, #FAF2FF 100%);',
        'service2-bg' : 'linear-gradient(180deg, #A8C0F3 0%, #F2DFFF 100%);',
        'service3-bg' : 'linear-gradient(89deg, rgba(81, 98, 255, 0.22) -46.9%, rgba(128, 232, 255, 0.22) 125.81%);'
      }
    },
  },
  plugins: [],
}