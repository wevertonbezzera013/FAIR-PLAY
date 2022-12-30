/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'pic-back': '#01479d1a',
        'pic-back-two': '#090909',
        'butt-back': '#E8CB00',
        'tex-blue':'#01479D',
        'backgroundImage': 'url(https://s3-alpha-sig.figma.com/img/743f/930c/d1681e68e6ca397052e2e1699276b378?Expires=1673222400&Signature=KBJ1Xk1ppH3gC-4BtchhvnDjSDs39ID2F~NfTCupEjSDyBP2k5Eb5cGvAp0MGny0HYLfUT~gOG7i5PjcjL75UZ-VvM3j1STihsRv9bRzTAGLPyuMl0vh5itVwduUJaNwGkcrRIbYi~t76e8YlFy2UJbw77nFUFPv4QLXrXoOXq6EIjm2MBjbltIM-AtYjiZcSL9awRuzEaI0v0dhr2OktUxo7FXhx6jSg1sfose-ck9XlZbmcdMZ2~MR~~9Z~pz0ABr~B52XTPRkaUNwA9s2g0b7tty2vG1RU0pogHJtzd3LxcqWr6nYlCSSGZgORPOA5uUilbCDv5ybWQxYJwurXg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)'
      },
    },
  },
  plugins: [],
}
