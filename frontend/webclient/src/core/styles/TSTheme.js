import { createTheme } from "@mui/material/styles";

/**
 * TS brand colors
 */
const Colors = {
  //ts darker green variations
  ts_darker_green: "#00264f",
  ts_darker_green2: "#1a3c61",
  ts_darker_green3: "#335172",
  ts_darker_green4: "#4d6784",
  ts_darker_green5: "#667d95",
  //ts mid green variations
  ts_mid_green: "#004a9c",
  ts_mid_green2: "#1a5ca6",
  ts_mid_green3: "#336eb0",
  ts_mid_green4: "#4d80ba",
  ts_mid_green5: "#6692c4",
  //ts light green variations
  ts_light_green: "#0062cf",
  ts_light_green2: "#1a72d4",
  ts_light_green3: "#3381d9",
  ts_light_green4: "#4d91dd",
  ts_light_green5: "#66a1e2",
  //ts charcoal variations
  ts_charcoal: "#333333",
  ts_charcoal2: "#4E4B48",
  ts_charcoal3: "#807D7B",
  ts_charcoal4: "#BBB9B8",
  ts_charcoal5: "#EDEDEC",
  //ts common variations
  ts_black: "#232323",
  ts_white: "#ffffff",
  ts_green: "#1CAA49",
  ts_error: "#f00e0e",
  ts_warning: "#d48a49",
  ts_info: "#4b81d1",
  //ts grey variations
  ts_light_grey: "#e9e8e9",
  ts_light_grey2: "#F1F1F0",
  ts_light_grey3: "#F8F8F7",
  ts_light_grey4: "#FDFDFD",
  ts_light_grey5: "#fff",
  ts_gradient: "linear-gradient(-43deg, #005221 0%, #11251a 100%)",
  ts_blue: "#051e28",
  ts_light_green1: "#4d826c",
  ts_dark: "#232323",

  ts_secondary: "#232323",
  ts_dark_secondary: "#232323",
  ts_light_secondary: "#464443",
};

const Gutter = {
  spacing: 12,
};

const Font = {
  primary: ["Roboto", "BlinkMacSystemFont", "sans-serif"].join(","),
};
/**
 * ts Theme
 */
const TSTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode: "light",
    common: {
      black: "#000000",
      white: "#ffffff",
    },
    primary: {
      main: Colors.ts_darker_green,
      second: Colors.ts_mid_green,
    },
    secondary: {
      main: "#ffffff",
      second: Colors.ts_charcoal5,
      third: Colors.ts_light_grey5,
    },
    error: {
      main: "#f00e0e",
      second: "#f00e0e",
    },
    warning: {
      main: "#ed6c02",
    },
    success: {
      main: "#2e7d32",
      second: "#59B300",
    },
    info: {
      main: "#0288d1",
    },
    tsColors: Colors,
    charcoal: {
      ts_charcoal: "#333333",
    },
  },
  shape: {
    borderRadius: 5,
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: Font.primary,
    fontSize: 12,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBoldSemi: 600,
    fontWeightBold: 700,
    h1: {
      fontFamily: Font.primary,
    },
    h2: {
      fontFamily: Font.primary,
    },
    h3: {
      fontFamily: Font.primary,
    },
    button: {
      fontFamily: Font.primary,
    },
    link: {
      fontFamily: Font.primary,
      fontSize: 14,
    },
    body1: {
      fontFamily: Font.primary,
      fontSize: 14,
      fontWeight: 600,
    },
    body: {
      fontFamily: Font.primary,
      fontSize: 14,
      fontWeight: 500,
      lineHeight: "2.4rem",
    },
    label: {
      fontFamily: Font.primary,
      fontSize: 14,
      fontWeight: 600,
      marginBottom: "6px",
      color: "#9e9e9e",
      display: "inline-block",
    },
  },
  // spacing: Gutter.spacing,
  // drawerWidth: 280,
  /**
   * Components overrides
   */
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "0px",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          // maxHeight: 2,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          padding: "10px 12px",
          background: Colors.ts_error,
          margin: 0,
          color: "#fff",
          "&.Mui-error": {
            color: "#fff",
          },
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "footer" },
          style: {
            // border: `1px solid ${Colors.ts_charcoal}`,
            background: `${Colors.ts_darker_green2}`,
            // "&:hover": {
            //   background: "#fff",
            //   color: `${Colors.ts_darker_green2}`,
            // },
          },
        },

        {
          props: { variant: "isLoading" },
          style: {
            color: "#fff",
            backgroundColor: `${Colors.ts_darker_green3}`,
            border: `1px solid ${Colors.ts_darker_green3}`,
          },
        },
        {
          props: { variant: "danger" },
          style: {
            textTransform: "none",
            fontSize: "16px",
            minHeight: "48px",
            lineHeight: "48px",
            paddingBottom: "0px",
            minWidth: "48px",
            paddingTop: "0px",
            fontFamily: Font.primary,
            backgroundColor: `${Colors.ts_error}`,
            color: "#fff",

            "&:hover": {
              color: "#fff",
              backgroundColor: `${Colors.ts_error}`,
              boxShadow: "0px 0px 5px rgba(0,0,0,.25)",
            },
          },
        },
        {
          props: { variant: "light" },
          style: {
            textTransform: "none",
            fontSize: "16px",
            minHeight: "48px",
            lineHeight: "48px",
            width: "48px",
            minWidth: "48px",
            padding: "0px",
            paddingTop: "0px",
            fontFamily: Font.primary,
            backgroundColor: "#fff",
            color: `${Colors.ts_darker_green}`,

            "&:hover": {
              backgroundColor: "#fff",
              boxShadow: "none",
              color: `${Colors.ts_darker_green2}`,
            },
          },
        },

        {
          props: { variant: "icon" },
          style: {
            textTransform: "none",
            fontSize: "16px",
            minHeight: "44px",
            lineHeight: "44px",
            width: "44px",
            minWidth: "44px",
            padding: "0px",

            paddingTop: "0px",
            fontFamily: Font.primary,
            backgroundColor: "transparent",
            color: `${Colors.ts_darker_green}`,
            "&:hover": {
              color: `${Colors.ts_darker_green4}`,
              backgroundColor: "transparent",
              boxShadow: "none",
            },
          },
        },
        {
          props: { variant: "medium" },
          style: { height: "40px", minHeight: "40px" },
        },
      ],
      styleOverrides: {
        root: {
          // textTransform: "uppercase",
          // fontSize: "16px",
          // minHeight: "48px",
          // minWidth: "48px",
          // lineHeight: "48px",
          // fontWeight: 500,
          // padding: "0px 24px",
          fontFamily: Font.primary,
          backgroundColor: `${Colors.ts_darker_green}`,
          color: "#fff",

          "&.MuiButton-outlined": {
            color: `${Colors.ts_darker_green}`,
            backgroundColor: `${Colors.ts_darker_green}00`,
            "&:hover": {
              backgroundColor: `${Colors.ts_darker_green}`,
            },
          },
          "&.Mui-disabled": {
            color: "#fff",
          },

          "&:hover": {
            color: "#fff",
            backgroundColor: `${Colors.ts_darker_green2}`,
            boxShadow: "0px 0px 5px rgba(0,0,0,.25)",
          },
          "&:active": {
            color: "#fff",
            backgroundColor: `${Colors.ts_darker_green4}`,
            boxShadow: "0px 0px 5px rgba(0,0,0,.25)",
          },
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          background: Colors.ts_light_green5,
        },
      },
    },

    MuiTypography: {
      root: {
        fontFamily: Font.primary,
      },
      variants: [
        {
          props: { variant: "PageHeader" },
          style: {
            fontWeight: 700,
            fontSize: 30,
            textTransform: "uppercase",
            textAlign: "center",
            padding: "0px 0px",
            color: `${Colors.ts_darker_green}`,
          },
        },
      ],
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: Colors.ts_charcoal,
          color: Colors.ts_white,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          fontSize: 18,
          textTransform: "uppercase",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: Colors.ts_white,
        },
      },
    },
    //Mui icon button
    MuiIconButton: {
      variants: [
        {
          props: { variant: "drawerButton" },
          style: {
            color: Colors.ts_light_grey,
          },
        },
        {
          props: {
            color: "primary",
            style: {
              backgroundColor: `${Colors.ts_darker_green}`,
              color: "#fff",

              "&.Mui-disabled": {
                color: "#fff",
              },

              "&:hover": {
                color: "#fff",
                backgroundColor: `${Colors.ts_darker_green2}`,
                boxShadow: "0px 0px 5px rgba(0,0,0,.25)",
              },
              "&:active": {
                color: "#fff",
                backgroundColor: `${Colors.ts_darker_green4}`,
                boxShadow: "0px 0px 5px rgba(0,0,0,.25)",
              },
            },
          },
        },
      ],
    },

    MuiContainer: {
      variants: [
        {
          props: { variant: "outletContainer" },
          style: {
            borderRadius: 15,
            paddingTop: "20px",
            paddingBottom: "20px",
            maxWidth: "940px",
          },
        },
        {
          props: { variant: "sourcePageContainer" },
          style: {
            paddingTop: `${Gutter.spacing * 2}px`,
            paddingLeft: `${Gutter.spacing * 2}px`,
          },
        },
      ],
    },
  },
});

export { TSTheme, Colors, Gutter, Font };
