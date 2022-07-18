import {Routes as DOMRoutes, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import FlashcardsPage from '../pages/FlashcardsPage'
import LandingPage from '../pages/LandingPage'
import RequireAuth from './RequireAuth'

export default function Routes({appUser, updateError, updateAppUser}){
    return <>
        <DOMRoutes>
            <Route path={"/"} element={
                <RequireAuth appUser={appUser}>
                    <HomePage />
                </RequireAuth>
            }/>
            <Route path={"/flashcards"} element={
                <RequireAuth appUser={appUser}>
                    <FlashcardsPage />
                </RequireAuth>
            }/>
            <Route path={"/login"} element={
                <LandingPage appUser={appUser} updateAppUser={updateAppUser} updateError={updateError}/>
            }/>
        </DOMRoutes>
    </>
}