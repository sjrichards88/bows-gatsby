// match bootstrap sizes, also add xxl
const sizes = {
    xs: "0px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1600px",
    xxxl: "1920px",
};

const bootstrapGutterWidth = "15px";

const fontSizeBase = 1;


const font = {
    family: {
        dinMedium: "GothicA1Black",
        icons: "icons",
        atp: "GothicA1Black",
        base: "GothicA1Regular",
        italic: "DINNextLTProMediumItalic",
        // medium: "DIN Next LT W23 Medium",
        bold: "GothicA1Black",
        body: `"GothicA1Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`
    },
    size: {
        xs: `${fontSizeBase * .75}rem`, // 12px
        sm: `${fontSizeBase * .875}rem`, // 14px
        base: `${fontSizeBase}rem`, // 16px
        md: `${fontSizeBase * 1.125}rem`, // 18px
        lg: `${fontSizeBase * 1.25}rem`, // 20px
        xl: `${fontSizeBase * 1.5}rem` // 24px
    },
    lineHeight: {
        sm: 1.1,
        base: 1.4,
        headings: 1.2
    },
    h1: {
        size: `${fontSizeBase * 2.25}rem`
    },
    h2: {
        size: `${fontSizeBase * 1.5}rem` 
    },
    h3: {
        size: `${fontSizeBase * 1.25}rem`
    },
    h4: {
        size: `${fontSizeBase * 1.125}rem`, 
    },
    h5: {
        size: `${fontSizeBase * 1.125}rem`, 
    },
    h6: {
        size: `${fontSizeBase * 1.25}rem`
    }
}

export default {
    sizes,
    bootstrapGutterWidth,
    font,
    transitionBase: "all .4s ease-in-out",
    colors: {
        primary: "#23234B",
        secondary: "#D6B036",
        tertiary: "#ef59a1",
        white: "#ffffff",
        whiteOff: "#f2f2f2",
        black: "#020202",
        blackOff: "#333333",
        grey: "#707070",
        grey1: "#575756",
        grey2: "#878787",
        grey3: "#B2B2B2",
        grey4: "#DADADA",
        blue: "#626C80",
        red: "#BB133E",
        redLight: "#ff1430",
        navy: "#1C2027",
        pink: "#E84261",
        purple: "#702283",
        yellow: "#F2C83D",
        turquoise: "#00ADB9",
        orangeDark: "#e44312",
        orange: "#f0820e"
    }
};