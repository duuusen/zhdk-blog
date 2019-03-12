import React from "react"
import sidebarStyles from "./sidebar.module.css"

export default ({ children }) => (
    <aside className={sidebarStyles.sidebar}>{children}</aside>
)
