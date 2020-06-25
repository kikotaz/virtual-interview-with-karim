import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Color from 'color';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CustomCard from '../../../components/CustomCard';
import CustomButton from '../../../components/CustomButton';
import './Welcome.css';
import { Tooltip } from '@material-ui/core';

//Configuring the Color change Grid
const useGridStyles = makeStyles(({ breakpoints }) => ({
    root: {
        [breakpoints.up('md')]: {
            justifyContent: 'center',
        },
        marginBottom: "2em",
    },
}));
//Configuring styles for color cards in Color grid
const useCardStyles = makeStyles(() => ({
    actionArea: {
        borderRadius: 16,
        transition: '0.2s',
        '&:hover': {
            transform: 'scale(1.1)',
        },
    },
    card: ({ color }) => ({
        minWidth: 100,
        borderRadius: 16,
        borderStyle: 'solid',
        border: '2px',
        borderColor: '#AC3B61',
        boxShadow: 'none',
        '&:hover': {
            boxShadow: `0 6px 12px 0 ${Color(color)
                .rotate(-12)
                .darken(0.2)
                .fade(0.5)}`,
        },
    }),
    content: ({ color }) => {
        return {
            backgroundColor: color,
        }
    }
}))
//Configuring the style for the tooltip
const useTooltipStyles = makeStyles(() => ({
    tooltip: ({ tooltipBgclr }) => ({
        backgroundColor: tooltipBgclr,
        color: '#123C69',
        fontSize: '14px',
        maxWidth: 'none',
    })
}))

//This component for Home page
function Welcome(props) {

    document.title = 'Welcome';

    //Calling useGridStyles hook in top level
    const gridStyles = useGridStyles();
    //Calling useTooltipStyles hook in top level
    const tooltipStyles = useTooltipStyles({ tooltipBgclr: props.bgclr });
    //Adding username to state using React useState Hook
    const [initUserName, updateUserName] = useState(props.userName)
    
    const history = useHistory();

    //Handler will dispatch action to change BG color
    const changeColorHandler = (chosenColor) => {
        props.dispatch({
            type: 'CHG_BGCLR',
            chosenColor: chosenColor,
        })
    }

    //Handler when continue button is clicked
    const continueClickHandler = () => {
        props.dispatch({
            type: 'UPD_USERNAME',
            userName: initUserName,
        })
        history.push('/intro');
    }

    //Handler when Enter button is clicked to submit
    const submitHandler = () => {
       continueClickHandler();
    };

    return (
        <div className='Welcome'>
            <h3 style={{ marginBottom: "2em" }}>
                Woohooo, I am Karim and you have just reached my personal website.
            </h3>
            <h4 style={{ marginBottom: "2em" }}>
                For your convenience, you can choose a background color from the panel below
            </h4>

            {/*The color changing grid UI*/}
            <Grid classes={gridStyles} container spacing={4} wrap={'nowrap'}>
                <Grid item>
                    <CustomCard classes={useCardStyles({ color: '#EEE2DC' })}
                        click={() => changeColorHandler('#EEE2DC')} />
                </Grid>
                <Grid item>
                    <CustomCard classes={useCardStyles({ color: '#EDC7B7' })}
                        click={() => changeColorHandler('#EDC7B7')} />
                </Grid>
                <Grid item>
                    <CustomCard classes={useCardStyles({ color: '#BAB2B5' })}
                        click={() => changeColorHandler('#BAB2B5')} />
                </Grid>
            </Grid>

            <h4>
                It would be great also if you told me your name :-)
            </h4>

            <form
                noValidate
                autoComplete="off" 
                style={{ marginBottom: '3em' }}
                onSubmit={submitHandler}>
                <Tooltip title={"Don't worry, no personal data is collected, " +
                    "your privacy is safe :-)"}
                    interactive disableFocusListener classes={tooltipStyles}>
                    <TextField
                        id="nameField"
                        label="Your Name"
                        variant="outlined"
                        inputProps={{ style: { fontSize: '20px' } }}
                        value={initUserName}
                        onChange={event => updateUserName(event.target.value)}/>
                </Tooltip>
            </form>
            <CustomButton
                type="submit"
                variant="outlined"
                size="small"
                onClick={continueClickHandler}>Continue</CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        bgclr: state.backgroundColor,
        userName: state.userName,
    };
}

export default connect(mapStateToProps)(Welcome);