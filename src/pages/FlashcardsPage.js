import { useEffect, useState } from "react"
import Flashcard from "../components/Flashcard"
import API from "../util/api"

// TODO: replace the static list, with a call to our API???
let flashcardsList = [
    {
        question: "What does IoC stand for in Spring?",
        answer: "Inversion of Control",
        topic: "JAVA"
    },
    {
        question: "What is DOM?",
        answer: "Document Object Model",
        topic: "JavaScript"
    },
    {
        question: "What is the @Transactional annotation in Spring?",
        answer: "Enables transaction management (Commit, Rollback, etc...) in a class or method.",
        topic: "JAVA"
    }
]

export default function FlashcardsPage(){

    const [flashcards, updateFlashcards] = useState(null);

    useEffect(getAllFlashcards, [])

    function getAllFlashcards(){
        // request to the api
        API.get("/flashcards")
            .then(response => updateFlashcards(response.data))
        // updateFlashcards with the list that is returned
    }

    return <>
        {flashcards && flashcards.map((flashcard) => 
            <Flashcard key={flashcard.id} flashcard={flashcard} />
        )}

        {!flashcards && <h3>Loading Flashcards...</h3>}
    </>
}