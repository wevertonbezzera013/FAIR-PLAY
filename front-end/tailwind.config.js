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
        'backgroundImage': 'url(https://s3-alpha-sig.figma.com/img/a1c2/268d/b06ddcd6bee990ed1da7691de7c9ff24?Expires=1675036800&Signature=SwEuzUyrdZUlyLWLCy5Xd6rVRlHwNvOMu9RYL5aGYes~EgwWeqcc0irSZRnvknIm~izq8~evWtN9KstVqiLWwNSVpOR6e6b8DEih9bILfU0daGwPH8yZ0Z1IKfWCkbzl8JRy5fsV6wsvp7aT7y~rp6pwIcYDzj8Izfm2RSlnUZDSpsgzVqVauPHsDt0b7aaaiBJLZFG~qtd-UV~nv1PpKAX2tf-BAbD8PxP-jEiwz-R0zDfRsKiovOWdCiw9KXaSBqMygSHwmb9wmT9UCZu1LnMWNIUhfhiTPWWA0HHsj4MlHrkS74W16ZOfv8Hjp-b-XmJF8SbqX8kn9I-auIcFWQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)'
      },
    },
  },
  plugins: [],
}
