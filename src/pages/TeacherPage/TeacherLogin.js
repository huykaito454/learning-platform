import React from "react";
import styles from "./styles.module.css";
import image from "../../assets/images/login.png";
import imageMicrosoft from "../../assets/images/Microsoft.png";

const TeacherLogin = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.contentLeft}>
                    <img src={image} alt="Teacher login"></img>
                </div>
                <div className={styles.contentRight}>
                    <h1 className={styles.headingLogin}>
                        Welcome to education application
                    </h1>
                    <form className={styles.formLogin}>
                        <input
                            type="text"
                            className={styles.inputLogin}
                            placeholder="Enter teacher code or email"
                        />
                        <input
                            type="password"
                            className={styles.inputLogin}
                            placeholder="Enter teacher code or email"
                        />
                        <p className={styles.forgotPassword}>Forget password</p>
                        <button className={styles.btnLogin}>Login</button>
                        <p>Or login with</p>
                        <button className={styles.btnLoginMicrosoft}>
                            <img
                                src={imageMicrosoft}
                                alt="Microsoft button login"
                            ></img>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TeacherLogin;
