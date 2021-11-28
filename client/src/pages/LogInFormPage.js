import React from 'react';
import '../styles/LogInPage.css'
import HomeNav from '../components/HomeNav'

// function LogInFormPage(props){
//     // React State
//     return (
//         <div>
//             <div> hello</div>
//             <h1>Form goes here</h1>
//             <h1>Form goes here</h1>
//             <h1>Form goes here</h1>
//         </div>
//     );

// }
function Square() {
    return (
        <div >
            <div className="square1">
            </div>
            <div className="square2">
            </div>
        </div>

    );
}

class LogInFormPage extends React.Component {
    render() {
        return (
            <div className="login-container">
            <HomeNav/>
                <Square />
                <div className="form-box">
                    <h2 className="logIn">Log in</h2>
                    <form>
                        <div className="text-input">
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Username or Email"
                                className="text-input"
                            >
                            </input>
                        </div>
                        <div className="text-input">
                            <input
                                type="text"
                                id="password"
                                name="password"
                                placeholder="Password"
                                className="text-input"
                            >
                            </input>
                        </div>
                        <div>
                            <input
                                type="submit"
                                value="Log in"
                                className="login-btn"
                            >
                            </input>
                        </div>
                    </form>
                    <p className="texts">Don't have an account?</p>
                    <a href="./sign-up" className="texts">Sign Up</a>
                </div>
            </div>
        );
    }
}


export default LogInFormPage;
