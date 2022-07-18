import { useState } from "react";
import {Box, Button, CardActions, CardContent, TextField} from "@mui/material";

export default function UserCredentialsForm({buttonLabel, updateFunction}){

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


    function handleChangeUsername(event){
        updateUsername(event.target.value)
    }

    function handleChangePassword(event){
        updatePassword(event.target.value);
    }

    function submit(){
        // TODO: combine the username/password into an object,
        // and lift the object back to the parent component
        let user = {
            username: username,
            password: password
        }

        updateFunction(user)
    }

    return <>
        <CardContent>
            <Box autoComplete={"off"}>
                <TextField type="text" value={username} onChange={handleChangeUsername} label={"Username"} variant={"filled"}/><br/>
                <TextField type="password" value={password} onChange={handleChangePassword} label={"Password"} variant={"filled"} margin={"normal"}/>
            </Box>
        </CardContent>
        <CardActions>
            <Button fullWidth={true} onClick={submit}>{buttonLabel}</Button>
        </CardActions>
    </>
}