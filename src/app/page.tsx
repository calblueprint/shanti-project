'use client'

import LoginForm from "./components/LoginForm";
import { GlobalStyle, Fullscreen, LoginBox, LoginContent, WelcomeSign, Button } from "./screens/loginScreen/styles"


export default function App() {
    return (
        <main>
            <GlobalStyle />
            <Fullscreen>
                <LoginBox>
                    <LoginContent>
                        <WelcomeSign>Welcome</WelcomeSign>
                        <LoginForm />
                        <Button>Log In</Button>
                    </LoginContent>
                </LoginBox>
            </Fullscreen>
        </main >
    )
}