import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"

const Footer = () => {

    return(
        <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
    )
}


export default Footer
