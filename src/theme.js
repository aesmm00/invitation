import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';

// Create a theme with Quincento as the main font
const theme = createTheme({
    typography: {
        allVariants: {
            fontFamily: '"Decoment"',
        },
    },
});

const CustomThemeProvider = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
