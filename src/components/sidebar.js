import React from "react"
import headerStyles from "./header.module.css"

export default ({ children }) => (
    <aside className={headerStyles.header}>{children}</aside>
)
