import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import CustomCard from '../../../components/CustomCard';
import CustomButton from '../../../components/CustomButton';
import PrivacyTooltip from '../../../components/PrivacyTooltip'
import './Welcome.css';
import { TextField, Grid } from '@material-ui/core';

//Configuring the Color change Grid
const useGridStyles = makeStyles(({ breakpoints }) => ({
    root: {
        [breakpoints.up('md')]: {
            justifyContent: 'center',
        },
        marginBottom: "2em",
    },
}));

//This component for Welcome page
function Welcome(props) {

    document.title = 'Karim-Saleh.dev | Welcome';

    //Calling useGridStyles hook in top level
    const gridStyles = useGridStyles();
    //Adding username to state using React useState Hook
    const [userName, updateUserName] = useState(props.userName)

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
            userName: userName,
        })
        history.push('/about-me');
    }

    //Handler when Enter button is clicked to submit
    const submitHandler = () => {
        continueClickHandler();
    };

    //Array of colors in color changing panel
    const colors = ['#FFFFFF', '#EEE2DC', '#EDC7B7', '#BAB2B5']

    return (
        <div className='Welcome'>
            <Grid container justify='center'>
                <Grid item xs={6}>
                    <h3 style={{ marginBottom: "2em" }}>
                        Woohooo, I am Karim and you have just reached my personal website.
                    </h3>
                    <h4 style={{ marginBottom: "2em" }}>
                        For your convenience, you can choose a background color from the panel below
                    </h4>

                    {/*The color changing grid UI*/}
                    <Grid classes={gridStyles} container spacing={2} justify='center'>
                        {colors.map((color) => {
                            return (
                                <Grid item key={color}>
                                    <CustomCard
                                        cardColor={color}
                                        click={() => changeColorHandler(color)} />
                                </Grid>
                            )
                        })}
                    </Grid>

                    <h4>
                        It would be great also if you told me your name :-)
                    </h4>

                    <form
                        noValidate
                        autoComplete="off"
                        style={{ marginBottom: '3em' }}
                        onSubmit={submitHandler}>
                        <PrivacyTooltip>
                            <TextField
                                id="nameField"
                                label="Your Name"
                                variant="outlined"
                                inputProps={{ style: { fontSize: '1.3em' } }}
                                value={userName}
                                onChange={event => updateUserName(event.target.value)} />
                        </PrivacyTooltip>
                    </form>
                    <CustomButton
                        type="submit"
                        variant="outlined"
                        size="small"
                        onClick={continueClickHandler}>Continue</CustomButton>
                </Grid>
            </Grid>
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