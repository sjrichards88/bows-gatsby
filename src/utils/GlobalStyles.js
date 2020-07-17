import { createGlobalStyle, withTheme } from "styled-components"
import { media } from "utils/Media"

const GlobalStyles = createGlobalStyle`
    body {
        font-family: ${props => props.theme.font.family.body};
        font-size: ${props => props.theme.font.size.base};
        font-weight: normal;
        font-display: swap;
        line-height: ${props => props.theme.font.lineHeight.base};
        color: ${props => props.theme.colors.blackOff};
        background-color: ${props => props.theme.colors.white};
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
        transition: ${props => props.theme.transitionBase};

        &.nav-active {
            overflow: hidden;
        }
    }

    body:not(.user-is-tabbing) button:focus,
    body:not(.user-is-tabbing) input:focus,
    body:not(.user-is-tabbing) select:focus,
    body:not(.user-is-tabbing) textarea:focus,
    body:not(.user-is-tabbing) div[role="button"]:focus {
        outline: none;
    }
    
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: ${props => props.theme.colors.primary};
        font-family: ${props => props.theme.font.family.bold};
        font-weight: normal;
        line-height: ${props => props.theme.font.lineHeight.headings};
        margin-bottom: 1rem;
    }

    h1, h2, h3 {
        font-family: ${props => props.theme.font.family.cinzel}; 
    }

    h1 {
        font-size: ${props => props.theme.font.h2.size};
        @media ${media.md} {
            font-size: ${props => props.theme.font.h1.size};
        }
    }

    h2 {
        font-size: ${props => props.theme.font.h3.size};
        @media ${media.md} {
            font-size: ${props => props.theme.font.h2.size};
        }
    }

    h3 {
        font-size: ${props => props.theme.font.h4.size};
        @media ${media.md} {
            font-size: ${props => props.theme.font.h3.size};
        }
    }

    h4 {
        font-size: ${props => props.theme.font.h4.size};
    }

    h5 {
        font-size: ${props => props.theme.font.h5.size};
    }

    h6 {
        font-size: ${props => props.theme.font.h6.size};
    }

    p {
        &:last-child {
            margin: 0;
        }
    }

    a {
        color: ${props => props.theme.colors.black};
        &:hover {
            color: ${props => props.theme.colors.primary}; 
            text-decoration: none;
        }
    }

    strong {
        font-family: ${props => props.theme.font.family.bold};
        letter-spacing: .5px;
    }

    ul {
        padding-left: 20px;
    }

    img {
        max-width: 100%;
    }

    .modal-backdrop.show {
        opacity: 0.9;
        background-color: ${props => props.theme.colors.primary};
    }

    .d-xxl-block {
        @media ${media.xxl} {
            display: block !important;
        }
    }

    .d-xxl-none {
        @media ${media.xxl} {
            display: none !important;
        }
    }
`;

export default withTheme(GlobalStyles);