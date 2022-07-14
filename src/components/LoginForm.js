import { useState, useEffect } from "react";


export default function LoginForm(){

    // State Variables are special in that onChange/mutation of state
    // React will trigger a rerender through a process called Reconcilliation

    // How do we use state in React
    // We can tap into state using Hooks;

    // The main hook to use state in a component is the useState() hook

    //   useState() is a function that returns two things
    //           0th index: the state variable
    //           1st index: the function to update the state variable
    //   let [nameOfVariable, nameOfFunction] = useState(initialState); 

    let [username, updateUsername] = useState("");
    let [password, updatePassword] = useState("");

    useEffect(
        () => console.log(`username: ${username} password: ${password}`),
        [username, password]
    );


    function handleChangeUsername(event){
        updateUsername(event.target.value)
    }

    function handleChangePassword(event){
        updatePassword(event.target.value);
    }

    function submit(){
        // TODO: replace me with an authentication call to the backend
        console.log(username, password)
    }

    return <>
        <input type="text" value={username} onChange={handleChangeUsername} placeholder="username"/><br/>
        <input type="password" value={password} onChange={handleChangePassword} placeholder="password"/><br/>
        <button onClick={submit}>Login</button>
    </>
}