import Typography from "typography"

const typography = new Typography({
  baseFontSize: "24px",
  baseLineHeight: 1.63,
  scaleRatio: 1.5,
  googleFonts: [
    {
      name: "Inconsolata",
      styles: ["400"],
    },
  ],
  bodyFontFamily: ["GTAme","Helvetica Neue","serif"],
  headerFontFamily: ["GTAme","Helvetica Neue","serif"],
  bodyColor: "#9E9E9E",
  headerWeight: 400,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ rhythm }) => ({
    h1: {
      paddingBottom: `calc(${rhythm(1 / 4)} - 1px)`,
      marginBottom: rhythm(3 / 4),
      marginTop: rhythm(1),
    },
    'figcaption': {
      marginTop: rhythm(1 / 8),
      marginLeft: rhythm(1 / 8),
    },
    h2: {
      paddingBottom: `calc(${rhythm(1 / 4)} - 1px)`,
      marginBottom: rhythm(1 / 4),
      marginTop: rhythm(1),
    },
    h6: {
    },
    'h1 a': {
      color: '#009393',
      border: 'none',
    },
    "h3,h4,h5,h6": {
      marginBottom: rhythm(1 / 2),
      marginTop: rhythm(1),
    },
    "ol,ul": {
      marginLeft: rhythm(1.25),
    },
    // children ol, ul
    "li>ol,li>ul": {
      marginLeft: rhythm(1.25),
    },
    p: {
       marginBottom: 0,
    },
    a: {
      color: "#BDBDBD",
      textDecoration: 'none',
      borderBottom: '2px solid #616161',
      paddingBottom: '3px',
    },
    '.gatsby-resp-image-link': {
        border: 'none',
    },
    "a:hover": {
      borderBottomColor: '#BDBDBD',
      transition: 'border-bottom-color 300ms linear',
      '-webkit-transition': 'border-bottom-color 300ms linear',
      '-ms-transition': 'border-bottom-color 300ms linear',
      '-moz-transition': 'border-bottom-color 300ms linear',
    },
    'a:active': {
    },
    blockquote: {
      borderLeft: `4px solid #757575`,
      marginTop: 0,
      marginRight: 0,
      marginLeft: 0,
      paddingLeft: `calc(${rhythm(1 / 2)} - 1px)`,
    },
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
