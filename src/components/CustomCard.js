import React from 'react';
import { CardActionArea, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Color from 'color';

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

//Card component for color cards in Welcome Component
const CustomCard = ({ cardColor, click }) =>{

    const cardStyles = useCardStyles({color: cardColor});

    return(
        <CardActionArea className={cardStyles.actionArea}>
            <Card className={cardStyles.card} onClick={click}>
                <CardContent className={cardStyles.content}>
                </CardContent>
            </Card>
        </CardActionArea>
    )
}

export default CustomCard;