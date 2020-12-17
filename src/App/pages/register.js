import React from "react";
import SignUp from "../signUp/signUp"
import { Container } from 'react-bootstrap';
import { AuthProvider } from "../../contexts/AuthContext";

const Register = () => {
    return (
        <AuthProvider>
            <Container className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "90vh" }}>
                    <div className="w-100" style={{ maxWidth: "400px" }}>
                        <SignUp />
                    </div>
            </Container>
        </AuthProvider>
    );
}

export default Register;