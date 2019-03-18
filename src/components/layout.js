import React from "react"
import { Link } from "gatsby"
import Sidebar from "./sidebar"
import sidebarStyles from "./sidebar.module.css"
// import Logo from "../../content/assets/logo.svg"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    let sidebar
      sidebar = (
        <div className={sidebarStyles.sidebarContainer}>
        <div className={sidebarStyles.logo}>
          <Link to={'/'} />
        </div>
        <h1
          style={{
            ...scale(.3),
            margin: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={'/'}
          >
            {title}
          </Link>
        </h1>
        </div>
      )
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
                      'h1, h2, h3, h4, h5': {
                                    color: '#f44242'
                                },
                      '@media screen and (min-width: 760px){h3{font-size:200px}}': {},
                  })
        }}
      >
        <Sidebar>{sidebar}</Sidebar>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}
export default Layout

