import React from 'react';
import { Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

//Configuring the style for the tooltip
const useTooltipStyles = makeStyles(() => ({
    tooltip: ({ tooltipBgclr }) => ({
        backgroundColor: tooltipBgclr,
        color: '#123C69',
        fontSize: '14px',
        maxWidth: 'none',
    })
}))

//Customization for Tooltip component to give privacy note
function PrivacyTooltip(props) {
    //Calling useTooltipStyles hook in top level
    const tooltipStyles = useTooltipStyles({ tooltipBgclr: props.bgclr });

    return (
       <Tooltip title={"Don't worry, no personal data is collected, " +
            "your privacy is safe :-)"}
            interactive disableFocusListener classes={tooltipStyles}>
                {props.children}
        </Tooltip>
    )
}

const mapStateToProps = (state) =>{
    return{
        bgclr: state.backgroundColor,
    };
}

export default connect(mapStateToProps)(PrivacyTooltip);