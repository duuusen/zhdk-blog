import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.css"
import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    if (location.pathname === rootPath) {
  header = (
    <header className={headerStyles.header}>
    <div className={headerStyles.logo}>
      <Link to={'/'} />
    </div>
    </header>
  )
} else {
  header = (
    <header className={headerStyles.header}>
    <div className={headerStyles.logo}>
      <Link to={'/'} />
    </div>
    </header>
  )
}
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(3 / 4)}`,
            overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
              'h1, h2, h3, h4, h5': {
                color: '#f44242',
                marginTop: '0'
              }
            })
          }}
      >
        {header}
        <main>{children}</main>
      </div>
    )
  }
}
export default Layout
