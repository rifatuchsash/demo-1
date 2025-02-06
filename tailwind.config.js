module.exports = {
    theme: {
      extend: {
        animation: {
          typewriter: 'typewriter 4s steps(24) 1s 1 normal both',
          blink: 'blink 1s steps(1) infinite',
        },
        keyframes: {
          typewriter: {
            '0%': { width: '0%' },
            '100%': { width: '100%' },
          },
          blink: {
            '50%': { borderColor: 'transparent' },
          },
        },
      },
    },
    plugins: [],
  };