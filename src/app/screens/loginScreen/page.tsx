'use client'
import LoginForm from "../../components/LoginForm";
import { GlobalStyle, Fullscreen, Img, LoginBox, LoginContent, WelcomeSign, Button } from "./styles"

export default function App() {
  return (
    <main>
      <GlobalStyle />
      <Fullscreen>
        <Img />
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