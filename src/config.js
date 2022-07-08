module.exports = {
  siteTitle: 'Aviral Jain | Portfolio',
  siteDescription:
    'Aviral Jain is a student at IIT KGP, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Aviral Jain, Aviral, Jain, jainaviral898, software developer, software engineer, machine learning, ai, face mask detection, web developer, java developer, pepper content, kota, ixigo, honeywell, iitkgp, iit, kgp',
  siteUrl: 'https://chandrikadeb7.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Aviral Jain',
  location: 'Kota, Rajasthan, India',
  email: 'jainaviral898@gmail.com',
  github: 'https://github.com/chandrikadeb7',
  twitterHandle: '@juniorninja_18',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/jainaviral898',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/jainaviral898/',
    },

    {
      name: 'Instagram',
      url: 'https://www.instagram.com/_aviraljain/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/juniorninja_18',
    },
  ],
  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
