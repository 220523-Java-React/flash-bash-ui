import { useState } from "react"
import Flashcard from "../components/Flashcard"

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

    const [flashcards, updateFlashcards] = useState(flashcardsList);

    return <>
        {flashcards.map((flashcard) => 
            <Flashcard flashcard={flashcard} />
        )}
    </>
}