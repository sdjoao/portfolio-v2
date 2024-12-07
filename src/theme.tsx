import { createTheme, responsiveFontSizes } from "@mui/material";


let theme = createTheme({
    palette: {
      primary: {
        main: '#252525',
      },
      secondary: {
        main: '#de0a26',
      },
    },
    typography: {
        fontFamily: [
            "'Roboto'",
        ].join(','),
    }
});

theme = responsiveFontSizes(theme);

export default theme;