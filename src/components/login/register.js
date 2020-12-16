import React from "react";

export class Register extends React.Component {
    render() {
        return (
            <div className="base-container">
                <div className="header">Register</div>
                <div className="content">
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="email">Email</label><br></br>
                            <input type="text" name="email" placeholder="email"></input><br></br>
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Username</label><br></br>
                            <input type="text" name="username" placeholder="username"></input><br></br>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label><br></br>
                            <input type="text" name="password" placeholder="password"></input><br></br>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn">Register</button>
                </div>
            </div>
        );
    }
}