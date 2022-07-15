import LoginForm from "../components/LoginForm";
import RegistrationComponent from "../components/RegistrationForm";
import UserCredentialsForm from "../components/UserCredentialsForm";



export default function LoginPage({updateError, updateAppUser}){
    return <>
        <LoginForm updateError={updateError} updateAppUser={updateAppUser}/>
    </>
}