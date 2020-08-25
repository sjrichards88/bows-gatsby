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
        ruthie: "Ruthie, cursive",
        icons: "icons",
        cinzel: "Cinzel, serif",
        base: "PT Sans",
        italic: "DINNextLTProMediumItalic",
        // medium: "DIN Next LT W23 Medium",
        bold: "PT Sans",
        body: `"PT Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`
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
        base: 1.6,
        headings: 1.2
    },
    h1: {
        size: `${fontSizeBase * 2.45}rem`
    },
    h2: {
        size: `${fontSizeBase * 1.75}rem` 
    },
    h3: {
        size: `${fontSizeBase * 1.45}rem`
    },
    h4: {
        size: `${fontSizeBase * 1.25}rem`, 
    },
    h5: {
        size: `${fontSizeBase * 1.125}rem`, 
    },
    h6: {
        size: `${fontSizeBase}rem`
    }
}

export default {
    sizes,
    bootstrapGutterWidth,
    font,
    transitionBase: "all .4s ease-in-out",
    colors: {
        primary: "#be6e96",
        secondary: "#b0c4dd",
        tertiary: "#a9a093",
        white: "#ffffff",
        whiteOff: "#f2f2f2",
        black: "#020202",
        blackOff: "#222222",
        grey: "#707070",
        grey1: "#575756",
        grey2: "#878787",
        grey3: "#B2B2B2",
        grey4: "#DADADA",
        grey5: "#eeeeee",
        blue: "#b0c4dd",
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