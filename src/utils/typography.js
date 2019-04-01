import Typography from "typography"
import GTAme from "../fonts/gtame.ttf"

const typography = new Typography({
  baseFontSize: "24px",
  baseLineHeight: 1.63,
  scaleRatio: 2,
  googleFonts: [
    {
      name: "Inconsolata",
      styles: ["400"],
    },
  ],
  bodyFontFamily: ["GTAme","Helvetica Neue","serif"],
  headerFontFamily: ["GTAme","Helvetica Neue","serif"],
  bodyColor: "hsla(0,0%,0%,0.8)",
  headerWeight: 400,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ rhythm }) => ({
    h1: {
      paddingBottom: `calc(${rhythm(1 / 4)} - 1px)`,
      marginBottom: rhythm(3 / 4),
      marginTop: rhythm(1),
    },
    h2: {
      paddingBottom: `calc(${rhythm(1 / 4)} - 1px)`,
      marginBottom: rhythm(1 / 4),
      marginTop: rhythm(1),
    },
    h6: {
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
    a: {
      color: "#4078c0",
      textDecoration: "none",
    },
    "a:hover,a:active": {
      textDecoration: "underline",
    },
    blockquote: {
      borderLeft: `4px solid #eee`,
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
