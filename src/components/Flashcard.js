import {Paper, Typography, Stack, Grid} from "@mui/material";
import { useState } from "react";

export default function Flashcard({flashcard, width}){

    const [isFlipped, updateIsFlipped] = useState(false);

    // spacing moves the question/answer
    // elevation is the background color of the Paper
    return <Paper spacing={8} elevation={20} onClick={() => updateIsFlipped(!isFlipped)} component={Stack} sx={{ margin:3, width: width, minHeight:215}}>
                <Grid id="top-row" container={true} spacing={0}>
                    <Grid item={true} sm={12}>
                        <Typography pl={1}>
                            {flashcard.topic}
                        </Typography>
                    </Grid>
                </Grid>
            <Grid id="content" container={true} spacing={1}>
                    {!isFlipped &&
                        <Grid item={true} sm={12} alignItems={"center"}>
                            <Typography align={"center"} >
                                {flashcard.question}
                            </Typography>
                        </Grid>
                    }
                {isFlipped &&
                    <Grid item={true} sm={12} alignItems={"center"}>
                        <Typography align={"center"}>
                            {flashcard.answer}
                        </Typography>
                    </Grid>
                }
            </Grid>
            <Grid id="bottom-row" container={true} spacing={1}>
                <Grid item={true} sm={12} alignItems={"center"}>
                    <Typography>
                        {flashcard.difficulty}
                    </Typography>
                </Grid>
            </Grid>
    </Paper>
}