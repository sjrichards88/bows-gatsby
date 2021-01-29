import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"
import Text from "components/shared/Text"
import TextContainer from "components/shared/TextContainer"

const FooterStyled = styled.footer`
    background-color: ${props => props.theme.colors.blackOff};
    padding: 2rem 0;
    color: white;
    font-size: ${props => props.theme.font.size.sm};
    margin-top: 1.5rem;

    a {
        color: white;

        &:hover {
            color: ${props => props.theme.colors.primary};
        }
    }

    ul {
        list-style: none;
        padding-left: 0;
    }

    .footer-text {
        a {
            color: ${props => props.theme.colors.grey5};
        }
    }
`

const FooterTitle = styled.h4`
    color: ${props => props.theme.colors.primary};
`

const Social = styled.ul`
    padding: 0;
    display: flex;

    li {
        padding-right: 1rem;
        a {
            font-size: ${props => props.theme.font.size.lg};
        }
    }
`

const Footer = () => {

    return(
        <>
            <TextContainer>
                <Text md cinzel primary xl>
                    Bouquets and Bows “Experience Shows”
                </Text>
            </TextContainer>
            <FooterStyled>
                <Container>
                    <Row>
                        <Col sm={6} md={3} className="pb-3">
                            <FooterTitle>Menu</FooterTitle>
                            <nav>
                                <ul>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/about/">About</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact/">Contact</Link>
                                    </li>
                                </ul>
                            </nav>
                        </Col>
                        <Col sm={6} md={3} className="pb-3">
                            <FooterTitle>Contact</FooterTitle>
                            <p>
                                Email: <a href="mailto:info@bouquetsandbows.com">info@bouquetsandbows.com</a> <br/>
                                Phone: 123456789 <br/>
                                Fax: 123456789
                            </p> 
                        </Col>
                        <Col sm={6} md={3} className="pb-3">
                            <FooterTitle>Social</FooterTitle>
                            <Social>
                                <li>
                                    <a href="https://facebook.com">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://instagram.com">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </li>
                            </Social>
                        </Col>
                        <Col sm={6} md={3}>
                            © Bouquets and Bows 2004 - {new Date().getFullYear()}<br />
                            All rights reserved <br /><br />

                            Website by <a href="https://sjrdesigns.com" target="_blank" rel="noopener noreferrer">SJR Designs</a>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="pt-3 text-sm-center footer-text">
                            <Text sm>
                                <Link to="/privacy-policy/">Privacy Policy</Link><br className="d-sm-none"/><span className="d-none d-sm-inline">&nbsp;&nbsp;|&nbsp;&nbsp;</span> 
                                <Link to="/cookie-policy/">Cookie Policy</Link><br className="d-sm-none"/><span className="d-none d-sm-inline">&nbsp;&nbsp;|&nbsp;&nbsp;</span> 
                                <Link to="/suppliers-registration/">Suppliers Registration</Link>
                            </Text>
                        </Col>
                    </Row>
                </Container>
            </FooterStyled>
        </>
    )
}


export default Footer
