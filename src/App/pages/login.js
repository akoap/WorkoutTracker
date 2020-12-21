import React from "react";
import SignIn from "./../signIn/signIn"
import { Container } from 'react-bootstrap';
import { AuthProvider } from "../../contexts/AuthContext";

const Login = () => {
    return (
        <AuthProvider>
            <Container className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "90vh" }}>
                <div className="w-100" style={{ maxWidth: "400px" }}>
                    <SignIn />
                </div>
            </Container>
        </AuthProvider>
    );
}

export default Login;