import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

//Card component for color cards in Welcome Component
const CustomCard = ({ classes, click }) =>{
    return(
        <CardActionArea className={classes.actionArea}>
            <Card className={classes.card} onClick={click}>
                <CardContent className={classes.content}>
                </CardContent>
            </Card>
        </CardActionArea>
    )
}

export default CustomCard;