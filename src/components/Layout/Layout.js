import React, { Component } from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import classNames from "classnames"
import 'scss/main.scss'
import SEO from "utils/Seo"
import GlobalStyles from "utils/GlobalStyles";
import theme from "utils/Theme"
import Header from "components/Header/Header"

class Layout extends Component {

    constructor(props) {
        super(props)
        this.handleFirstTab = this.handleFirstTab.bind(this)
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleFirstTab);
    }

    handleFirstTab(e) {
        if (e.keyCode === 9) { // the "I am a keyboard user" key
            document.body.classList.add('user-is-tabbing');
            window.removeEventListener('keydown', this.handleFirstTab);
        }
    }

	render() {
		return(
			<ThemeProvider theme={theme}>
				<>
					<SEO title={this.props.title} description={this.props.description} image={this.props.image} path={this.props.path} />
					<GlobalStyles />
                    <div
                        style={{
                        margin: `0 auto`,
                        maxWidth: 960,
                        padding: `0 1.0875rem 1.45rem`,
                        }}
                    >
                        <Header />
                        <main>{children}</main>
                        <footer>
                        © {new Date().getFullYear()}, Built with
                        {` `}
                        <a href="https://www.gatsbyjs.org">Gatsby</a>
                        </footer>
                    </div>
				</>
			</ThemeProvider>
		)
	}
}

export default Layout

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}