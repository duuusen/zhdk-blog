import React from "react"
import headerStyles from "./header.module.css"

export default ({ children }) => (
    <header className={headerStyles.header}>{children}</header>
)
