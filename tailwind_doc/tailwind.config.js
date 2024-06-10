/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/*.js"],
  theme: {
    extend: {
      screens: {
        'widescreen': {'raw': 'min-aspect-ratio: 3/2'},
        'Tailscreen': {'raw': 'min-aspect-ratio: 1/2'}
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)'},
          '80%': { transform: 'scaleY(1.2)'},
          '100%': { transform: 'scaleY(1)'},
        },
        Animation: {
          'open-menu': 'open-menu 0.5s ease-in-out forwards',
        }
      }
    },
  },
  plugins: [],
}

module.exports = {
  theme: {
    extend: {
      screens: {
        'widescreen': {'raw': 'min-aspect-ratio: 3/2'},
        'Tailscreen': {'raw': 'min-aspect-ratio: 1/2'}
      },
      backgroundImage: {
        'hero-pattern': "url('/https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        'footer-texture': "url('/https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }
    }
  }
}

