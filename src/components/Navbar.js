//                              object destructuring of the props object
export default function Navbar({user}){

    // What is Conditional Rendering??
    //      Change what is rendered based upon some kind of condition
    // if the user exists render one thing
    // if they don't render something different
    // if(props.user){
    //     return <h1>Hello {props.user.name}!</h1>
    // } else {
    //     return <h1>Please log in!! :D</h1>
    // }
    // Typically, React devs use ternary based conditonal rendering
    //                                  return   <condition> ? <truthy> : <falsey>

    return user ? 
    <h1>Hello {user.name}!</h1> : 
    <h1>Please log in!! :D</h1>
}

