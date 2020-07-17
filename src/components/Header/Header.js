import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import {
    Container,
    Row,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap'

import { media } from "utils/Media"

import logo from "images/logov2.png"
import taglineBefore from "images/tagline-before.png"
import taglineAfter from "images/tagline-after.png"

const HeaderStyled = styled.header`
    position: fixed;
    width: 100%;
    left: 0;
    background-color: white;
    border-bottom: 1px solid ${props => props.theme.colors.grey5};

    .container {
        display: block;
        position: relative
    }

    .tagline-wrapper {
        transition: all 0.3s ease-in-out;
        height: 30px;
        display: none;

        @media ${media.md} {
            display: block;
        }

        .tagline {
            text-align: center;
            /* padding-top: 10px; */
            font-size: 18px;
            font-family: ${props => props.theme.font.family.cinzel};
            color: ${props => props.theme.colors.tertiary};
            margin: 0;
            float: left;
            transform: translateX(-50%);
            left: 50%;
            position: relative;

            &:before {
                content: "";
                display: block;
                position: absolute;
                left: -119px;
                top: 5px;
                width: 101px;
                height: 11px;
                background: url("${taglineBefore}") no-repeat;
            }

            &:after {
                content: "";
                display: block;
                position: absolute;
                right: -119px;
                width: 101px;
                height: 11px;
                top: 5px;
                background: url("${taglineAfter}") no-repeat;
            }
        }
    }

    .navbar {
        background-color: white;

        a {
            color: ${props => props.theme.colors.tertiary};
            font-family: ${props => props.theme.font.family.cinzel};

            &.active,
            &:hover {
                color: ${props => props.theme.colors.primary};
                font-weight: 700;
            }
        }
    }

    .navbar-collapse {
        @media ${media.md} {
            justify-content: center;
        }

        a {
            padding: .5rem ;
        }
    }

    .navbar-toggler {
        position: absolute;
        right: 0;
        border-color: ${props => props.theme.colors.primary};
    }
`

const NavbarBrandStyled = styled(NavbarBrand)`
    height: 50px;
    padding: 5px;

    @media ${media.md} {
        border-bottom: 1px solid ${props => props.theme.colors.grey5};
        position: absolute;
        height: 75px;
        background-color: white;
        top: -10px;
        left: 0;
        transition: all 0.3s ease-in-out;
        border-radius: 50%;
        padding: 0 10px 10px 10px;
    }

    @media ${media.md} {
        height: 150px;
        padding: 15px;
    }

    img {
        height: 40px;
        transition: all 0.3s ease-in-out;

        @media ${media.sm} {
            height: 60px;
        }					

        @media ${media.md} {
            height: 120px;
        }
    }
`

const NavbarHeader = styled.div`
    width: 100%;
`

&.scrolled {
    .navbar-header {
        .tagline-wrapper {
            height: 0;
        }
        .navbar-brand {
            height: 50px;
            @media (min-width: $screen-sm) {
                height: 75px;
                padding: 0 10px 10px 10px;
            }
            img {
                height: 40px;
                @media (min-width: $screen-sm) {
                    height: 60px;
                }
            }
        }
    }
}

class Header extends Component {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const [isScrolled, setIsScrolled] = useState()

    constructor(props) {
        super(props)

        this.state = {
            navOpen: false,
            scrolled: false
        }

        this.toggleNav = this.toggleNav.bind(this)
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    	window.addEventListener('load', this.handleScroll);
    }

    toggleNav() {

    }

    handleScroll() {

    }

    render() {
        return(
            <HeaderStyled className="header home">
                <Navbar expand="md" light>
                    <Container>
                        <Row className="justify-content-center">
                            <NavbarHeader>
                                <NavbarToggler onClick={toggle} />
                                <div className="tagline-wrapper"><p className="tagline">Weddings in Taormina by Bouquets and Bows</p></div>
                                <NavbarBrandStyled  href="#"><img src={logo} alt="Bouquets and Bows" /></NavbarBrandStyled>
                            </NavbarHeader>
                        </Row>
                        <Row>
                            <Collapse isOpen={isOpen} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <Link to="/" activeClassName="active">Home</Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to="/about/" activeClassName="active">About</Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to="/contact/" activeClassName="active">Contact</Link>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Row>
                    </Container>
                </Navbar>
            </HeaderStyled>
        )
    }
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
