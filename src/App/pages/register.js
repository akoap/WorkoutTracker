import React from "react";
import SignUp from "./../signUp"
import { Container } from 'react-bootstrap';

const Register = () => {
    return (
        <>
            <Container className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}>
                    <div className="w-100" style={{ maxWidth: "400px" }}>
                        <SignUp />
                    </div>
            </Container>
        </>
    );
}

export default Register;