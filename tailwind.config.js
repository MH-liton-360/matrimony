// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     darkMode: 'class',
//     content: [
//         "./index.html",
//         "./src/**/*.{js,jsx,ts,tsx}"
//     ],
//     theme: {
//         extend: {},
//     },
//     plugins: [],
// }

// tailwind.config.js
module.exports = {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: '#3B82F6', // blue, can be any color
            },
            animation: {
                'bounce-delay-150': 'bounce 1s infinite 0.15s',
                'bounce-delay-300': 'bounce 1s infinite 0.3s',
            },
        },
    },
    plugins: [],
}