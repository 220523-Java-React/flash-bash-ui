import { useEffect, useState } from "react"
import Flashcard from "../components/Flashcard"
import API from "../util/api"
import {Grid, Pagination, Slider} from "@mui/material";

export default function FlashcardsPage(){

    const [flashcards, updateFlashcards] = useState(null);
    const [cardsPerRow, updateCardsPerRow] = useState(2)
    const [pageCount, updatePageCount] = useState(0);
    const [currentPage, updateCurrentPage] = useState(1);
    const [difficulty, updateDifficulty] = useState("MASTER");
    const [difficulties, updateDifficulties] = useState(null)
    const [creator, updateCreator] = useState("");

    const [difficultyRange, updateDifficultyRange] = useState([0,100]);
    const NUMBER_OF_ROWS = 2


    useEffect(getAllDifficulties, [])
    useEffect(getAllFlashcards, [currentPage, difficulty, creator, cardsPerRow])
    useEffect(() => updateCardsPerRow(calculateCardsPerRow()), [window.innerWidth])

    function getAllDifficulties(){
        API.get('/flashcards/difficulties')
            .then(handleDifficultyResponse)
    }

    function handleDifficultyResponse(response){
        const totalDifficulties = response.data.length;

        updateDifficulties(response.data.map((difficulty, index) => {
            return {
                value: index * (100 / (totalDifficulties-1)),
                label: difficulty
            }
        }))
    }

    function getAllFlashcards(){
        // request to the api
        API.get(`/flashcards?page=${currentPage - 1}&size=${cardsPerRow * NUMBER_OF_ROWS}&difficulty=${difficulty}&creator=${creator}`)
            .then(handleResponse);
    }

    function handleResponse(response){
        const data = response.data;
        updatePageCount(calculatePageCount(data.totalElements))
        updateFlashcards(data.content)
    }

    function calculateCardsPerRow(){
        if(window.innerWidth < 1113) return 1
        if(window.innerWidth < 1661) return 2
        if(window.innerWidth < 2209) return 3
        return 4
    }

    function calculatePageCount(flashcardCount){
        return Math.ceil(flashcardCount / (cardsPerRow * NUMBER_OF_ROWS));
    }

    function handlePageChange(event, pageNumber){
        updateCurrentPage(pageNumber)
    }

    function handleDifficultyChange(event, range){
        updateDifficultyRange(range);
        updateDifficulty(difficulties.find(difficulty => difficulty.value === range[1]).label)
    }
    return <>

            {flashcards &&
                <>
                    <Grid container={true} spacing={0} justifyContent={"center"}>
                        <Grid item={true} sm={3}>
                            <Slider
                                    value={difficultyRange}
                                    onChange={handleDifficultyChange}
                                    step={null}
                                    valueLabelDisplay={"off"}
                                    marks={difficulties}/>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={0} justifyContent={"center"} columns={cardsPerRow}>
                        {flashcards.map((flashcard) => <Flashcard key={flashcard.id} flashcard={flashcard} width={500} />)}
                    </Grid>
                    <Grid container={true} spacing={0} justifyContent={"center"}>
                        <Pagination count={pageCount} page={currentPage} onChange={handlePageChange} color={"primary"}/>
                    </Grid>
                </>
            }
            {!flashcards && <h3>Loading Flashcards...</h3>}
    </>
}