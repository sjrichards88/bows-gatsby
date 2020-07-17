import React, { Component } from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import "scss/main.scss"
import SEO from "utils/Seo"
import GlobalStyles from "utils/GlobalStyles"
import theme from "utils/Theme"
import Header from "components/Header/Header"
import Footer from "components/Footer/Footer"

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
                    <Header />
                    <main>{this.props.children}</main>
                    <Footer />
				</>
			</ThemeProvider>
		)
	}
}

export default Layout

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}