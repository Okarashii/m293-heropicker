import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { blue, deepOrange, grey, blueGrey, red, lightBlue } from '@mui/material/colors';

const colors = {
	palette: {
		mode: 'dark',
		primary: {
			main: blue["A700"],
		},
		secondary: {
			main: deepOrange[400],
		},
		background: {
			default: grey[900],
			paper: grey[900],
			surface: '#171717',
		},
		divider: blueGrey[400],
		info: {
			main: lightBlue["A200"],
		},
		error: {
			main: red[800],
		},
	},
};

const theme = createTheme(colors, {
	typography: {
		heading: {
			backgroundColor: colors.palette.primary.main,
			fontSize: 28
		}
	},
	components: {
		MuiList: {
			variants: [{
				props: { variant: "styled" },
				style: {
					backgroundColor: colors.palette.background.surface,
				},
			}]
		},
		MuiStack: {
			variants: [{
				props: { variant: "hovering" },
				style: {
					boxShadow: "2px 2px 3px 0px #000000",
				}
			}]
		},
		MuiButtonGroup: {
			variants: [{
				props: { variant: "hovering" },
				style: {
					boxShadow: "2px 2px 2px 0px #000000",
				}
			}]
		}
	},
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<App />
		</ThemeProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
