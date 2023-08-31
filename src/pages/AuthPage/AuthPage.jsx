import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import {useState} from 'react'

export default function AuthPage({setUser}) {
    const [showSignUp, setSignUp] = useState(false)
    return (
    <main>
        <h1>AuthPage</h1>
        {
        showSignUp ? 
        <>
        <SignUpForm setUser={setUser} />
        <button onClick={() => setSignUp(!showSignUp)}>Login</button>
        </>
        :
        <>
        <LoginForm setUser={setUser} />
        <button onClick={() => setSignUp(!showSignUp)}>Sign Up</button>
        </>
        }
    </main>
    );
}