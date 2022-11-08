const colors = {
    darkBlue: 'hsl(209, 23%, 22%)',
    veryDarkBlue1: 'hsl(207, 26%, 17%)',
    veryDarkBlue2: 'hsl(200, 15%, 8%)',
    darkGray: 'hsl(0, 0%, 52%)',
    veryDarkGray: 'hsl(0, 0%, 98%)',
    white: 'hsl(0, 0%, 100%)',
}

export const variables = {
    fontSizes: {
        sm: '.875rem', // 14
        reg: '1rem', // 16
        md1: '1.25rem', // 20
        md2: '1.375rem', // 22
        md3: '1.75rem', // 28
        lg: '2rem', // 32
        xl: '2.625rem', // 42
    },
    mobile: `(max-width: 34.3125em)`, // 549px
    tablet: `(min-width: 37.5em)`, // 550px
    laptop: `(min-width: 64.0625em)`, // 1025px
}

export const darkMode = {
    mainBG: colors.veryDarkBlue1,
    elemBG: colors.darkBlue,
    text: colors.white,
    shadow: '0 0 10px 1px rgba(0,0,0,.3)',
}

export const lightMode = {
    mainBG: colors.veryDarkGray,
    elemBG: colors.white,
    text: colors.veryDarkBlue2,
    shadow: '0 0 10px 1px rgba(0,0,0,.3)',
}
