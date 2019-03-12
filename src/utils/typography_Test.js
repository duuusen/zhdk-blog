import Typography from 'typography'

const typography = new Typography({
  baseFontsize: '24px',
  baseLineheight: 1.63,
  headerFontFamily: ['Avenir', 'Helvetica Neue','sans-serif'],
})

typography.toString()

typography.injectStyles()
