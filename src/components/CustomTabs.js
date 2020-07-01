import React from 'react';
import { Tabs } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

//Customization for Material UI Tabs component
const CustomTabs = withStyles({
    root: {
        flexGrow: '1',
        flexWrap: 'wrap',
    },
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > span': {
            maxWidth: '50px',
            width: '100%', 
            backgroundColor: '#AC3B61',
        }
    },
}) ((props) => <Tabs {...props} TabIndicatorProps={{children: <span />}}/>)

export default CustomTabs;