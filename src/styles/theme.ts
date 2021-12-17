import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import Colors from '../../helpers/Colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: Colors.mainBrown
    },
    secondary: {
      main: Colors.darkGrey
    },
    error: {
      main: red.A400
    }
  },
  typography: {
    fontFamily: 'Montserrat',
    fontSize: 14,
    h1: {
      color: Colors.darkGrey,
      fontWeight: 600,
      fontSize: '30px',
      lineHeight: '18px',
      padding: '16px 0'
    },
    h2: {
      color: Colors.darkGrey,
      fontSize: `20px`,
      fontWeight: 500,
      textTransform: 'uppercase',
      paddingBottom: 0
    },
    h3: {
      fontSize: '1.3em',
      fontWeight: 700
    },
    h4: {
      color: Colors.darkGrey,
      fontSize: `16px`,
      fontWeight: 600,
      textTransform: 'uppercase',
      paddingBottom: 0
    },
    h5: {
      textTransform: 'uppercase',
      fontWeight: 600,
      fontSize: '16px',
      padding: '24px 0'
    },
    subtitle1: {
      color: Colors.darkGrey,
      fontWeight: 500,
      fontSize: '13px',
      padding: '8px 0'
    }
  }
});

export default theme;
