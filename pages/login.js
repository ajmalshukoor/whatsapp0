import Head from "next/head";
import {Button} from "@material-ui/core";
import styled from "styled-components";
import {auth, provider} from "../firebase";

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert);
    }

    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>

            <LoginContainer>
                <Logo src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"/>
                <Button onClick={signIn} variant="outlined">Sign In with Google</Button>
            </LoginContainer>
        </Container>
    );

}

export default Login;

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
`;

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 100px;
    align-items: center;
    background-color:whitesmoke;
    border-radius: 5px;
    box-shadow: 0px 4px 14px -3px rgba(0,0,0,0.7);
`;

const Logo = styled.img`
    height: 200px;
    width: 200px;
    margin-bottom: 50px;
`;

// const Button = styled(Button)`
//     width: 100%;
// `;