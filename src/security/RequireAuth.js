import {useLocation, Navigate} from 'react-router-dom'

export default function RequireAuth({children, appUser}){

    const location = useLocation();
    if(!appUser){
        return <Navigate to="/login" state={{from: location}}/>
    }

    return children;
}