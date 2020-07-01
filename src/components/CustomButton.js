import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

//Customization for Material UI Button component
const CustomButton = withStyles({
    root: {
      borderColor: "#AC3B61",
      marginBottom: '2em',
    },
    label: {
      fontSize: "1.3em",
      fontFamily: "'Noto Sans JP', sans-serif",
      color: "#123C69",
      textTransform: "none",
    },
  })(Button);

  export default CustomButton;
  