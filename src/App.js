import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm';


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

function App() {
  return (
    <>
      <LoginForm />
    </>
  );
}
export default App;

export function DaysOfTheWeek(props){

  return <h1>Days of the week</h1>
}
