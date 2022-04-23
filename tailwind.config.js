module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'text-primary': '#f0f6fc',
        'text-secondary': '#c9d1d9',
        'text-disabled': '#262c33',
        'text-link': '#1976d2',
        'gold-50': '#ffe57f',
        'white-50': '#f0f0f0',
        'white-100': '#ffffff',
        'black-50': '#010409',
        'black-100': '#000000',
        'grey-50': '#f0f6fc',
        'grey-100': '#c9d1d9',
        'grey-200': '#b1bac4',
        'grey-300': '#8b949e',
        'grey-400': '#6e7681',
        'grey-500': '#484f58',
        'grey-600': '#30363d',
        'grey-700': '#21262d',
        'grey-800': '#161b22',
        'grey-900': '#0d1117',
        'blue-50': '#eef8ff',
        'blue-100': '#a5d6ff',
        'blue-200': '#79c0ff',
        'blue-300': '#58a6ff',
        'blue-400': '#388bfd',
        'blue-500': '#1f6feb',
        'blue-600': '#1158c7',
        'blue-700': '#0d419d',
        'blue-800': '#0c2d6b',
        'blue-900': '#051d4d'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}

