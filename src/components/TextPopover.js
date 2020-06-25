import React from 'react';
import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles';

//Configuring styles for popover
const usePopoverStyles = makeStyles(() => ({
    popover: {
        pointerEvents: "none",
    },
    paper: {
        padding: '2px',
    }
}))

function TextPopover({ id, anchorEl, open, popoverCloseHandler, content }) {

    const classes = usePopoverStyles();

    return (
        <Popover
            id={id}
            className={classes.popover}
            classes={{
                paper: classes.paper,
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            onClose={popoverCloseHandler}
            disableRestoreFocus>
                {content}
        </Popover>
    )
}

export default TextPopover;