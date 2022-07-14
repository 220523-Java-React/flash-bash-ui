import { Paper, Typography, Stack } from "@mui/material";
import { useState } from "react";

export default function Flashcard({flashcard}){

    const [isFlipped, updateIsFlipped] = useState(false);


    return <Paper onClick={() => updateIsFlipped(!isFlipped)} component={Stack} sx={{ maxWidth: 500, minHeight:225}}>
            <Typography gutterBottom>
                {flashcard.topic}
            </Typography>

            {!isFlipped && 
            <Typography align={"center"} >
                {flashcard.question}
            </Typography>}
            {isFlipped &&
            <Typography align={"center"} >
            {flashcard.answer}
            </Typography>}
            
    </Paper>
}