import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import FlashcardsPage from "./pages/FlashcardsPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";


let days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]

let [first,second,third,,fifth] = days;

// console.log(second)

let user = {name: "Annie", isLogged: true, password: "123", flashcard: {question: "What?"}};
let {password, isLogged: isLoggedIn, flashcard: {question}} = user;


// console.log(question)

// Destructuring in JS
// Array Destructuring allows us to provide aliases in place of index retrieval is based on index/postion
// Object Destructuring is based on key retrieval
const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flashcards" element={<FlashcardsPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </ThemeProvider>
  );
}
export default App;

export function DaysOfTheWeek(props){

  return <h1>Days of the week</h1>
}
