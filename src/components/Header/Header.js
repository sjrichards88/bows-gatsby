import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import styled from "styled-components"
import {
    Container,
    Row,
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap'
import classNames from "classnames" 

import { media } from "utils/Media"

import logo from "images/logov3.jpg"
import taglineBefore from "images/tagline-before.png"
import taglineAfter from "images/tagline-after.png"

const HeaderStyled = styled.header`
    position: fixed;
    width: 100%;
    z-index: 100;
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
        overflow: hidden;

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
            padding: .5rem;
        }
    }

    .navbar-toggler {
        position: absolute;
        right: 0;
        border-color: ${props => props.theme.colors.primary};
        padding: .25rem .5rem;

        span {
            width: 1.3em;
            height: 1.3em;
        }
    }

    &.scrolled {
        .tagline-wrapper {
            height: 0;
        }
        .navbar-brand {
            height: 50px;
            top: 0;

            @media ${media.sm} {
                height: 70px;
                padding: 0 10px 10px 10px;
            }

            img {
                height: 40px;
                @media ${media.sm} {
                    height: 60px;
                }
            }
        }
    }
`

const NavbarBrandStyled = styled(Link)`
    padding: 0 0 0 .25rem;
    display: inline;

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

const LinkStyled = styled(Link)`
    display: block;
`

class Header extends Component {
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

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    toggleNav() {
        this.setState({
            navOpen: !this.state.navOpen
        })
    }

    handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        let scrolled

        if (scrollTop > 50) {
            scrolled = true
        } else {
            scrolled = false
        }

        this.setState({
            scrolled
        })
    }

    render() {
        return(
            <HeaderStyled className={classNames({
                "header": true,
                "home": true,
                "scrolled": this.state.scrolled
            })}>
                <Navbar expand="md" light>
                    <Container>
                        <Row className="justify-content-center">
                            <NavbarHeader>
                                <NavbarToggler onClick={this.toggleNav} />
                                <div className="tagline-wrapper"><p className="tagline">Weddings in Taormina by Bouquets and Bows</p></div>
                                <NavbarBrandStyled to="/" className="navbar-brand">
                                    <img src={logo} alt="Bouquets and Bows" />
                                </NavbarBrandStyled>
                            </NavbarHeader>
                        </Row>
                        <Row>
                            <Collapse isOpen={this.state.navOpen} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <LinkStyled to="/" activeClassName="active">Home</LinkStyled>
                                    </NavItem>
                                    <NavItem>
                                        <LinkStyled to="/about/" activeClassName="active">About</LinkStyled>
                                    </NavItem>
                                    <NavItem>
                                        <LinkStyled to="/gallery/" activeClassName="active">Gallery</LinkStyled>
                                    </NavItem>
                                    <NavItem>
                                        <LinkStyled to="/real-weddings/" activeClassName="active">Weddings</LinkStyled>
                                    </NavItem>
                                    <NavItem>
                                        <LinkStyled to="/contact/" activeClassName="active">Contact</LinkStyled>
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