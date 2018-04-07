import { createMuiTheme } from 'material-ui/styles';
import teal from 'material-ui/colors/teal';
import red from 'material-ui/colors/red';

export default createMuiTheme({
  palette: {
    primary: teal,
    secondary: red,
  },
  // typography: {
  //   htmlFontSize: 14, // reduce this to increase font size
  // }
});
