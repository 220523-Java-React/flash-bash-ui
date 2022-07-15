import { Paper, Typography, Stack } from "@mui/material";
import { useState } from "react";

export default function Flashcard({flashcard}){

    const [isFlipped, updateIsFlipped] = useState(false);

    // spacing moves the question/answer
    // elevation is the background color of the Paper
    return <Paper spacing={6} elevation={20} onClick={() => updateIsFlipped(!isFlipped)} component={Stack} sx={{ margin:3, maxWidth: 450, minHeight:215}}>
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