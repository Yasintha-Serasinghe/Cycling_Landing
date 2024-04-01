// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   darkMode: ['variant', '&:not(.light *)'],
//   theme: {
//     screens: {
//       sm: '480px',
//       md: '768px',
//       lg: '976px',
//       xl: '1440px',
//     },
   
//     extend: {
//       fontFamily: {
//         'nunito': ['Nunito', 'sans'],
        
//       },

//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'bg-gray-800', // Enable dark mode based on class
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans'],
      },
      colors: {
        dark: {
          background: '#4A5568', // Dark gray background
          text: '#E2E8F0', // Light gray text on dark background
          // You can add more dark mode colors here if needed
        },
      },
    },
  },
  plugins: [],
}
