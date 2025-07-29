// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        neon: '#39ff14',
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite',
        'neon-border': 'neonPulse 1.5s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': {
            textShadow: '0 0 10px #fff, 0 0 20px #ff00ff, 0 0 30px #ff00ff',
          },
          '50%': {
            textShadow: '0 0 20px #39ff14, 0 0 30px #39ff14, 0 0 40px #39ff14',
          },
        },
        neonPulse: {
          '0%, 100%': {
            boxShadow: '0 0 5px #fff, 0 0 10px  #39ff14, 0 0 15px  #39ff14',
          },
          '50%': {
            boxShadow: '0 0 8px  #FFFF33 , 0 0 16px #FFFF33, 0 0 24px #FFFF33',
          },
        },
      },
    },
  },
  plugins: [],
}
