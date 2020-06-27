import { Tab } from '@material-ui/core';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

//Customization for Material UI Tab component
const CustomTab = withStyles({
    root: {
        textTransform: 'none',
        color: '#123C69',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '1.2em',
        fontWeight: 'bold',
    },
})((props) => <Tab disableRipple {...props}/>)

export default CustomTab;