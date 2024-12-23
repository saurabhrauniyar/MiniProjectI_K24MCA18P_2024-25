import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS
import Navbar from "../OnlyView/Navbars/Navbar";
import styles from "./SignIn.module.css"; // Scoped CSS for styling

function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const notifyA = (msg) => toast.error(msg);
  const notifyB = (msg) => toast.success(msg);

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  useEffect(() => {
    // Uncomment if you need to redirect if already logged in
    // const token = localStorage.getItem("jwt");
    // if (token) {
    //   navigate("/");
    // }
  }, [navigate]);

  const postData = () => {
    // Validate email format
    if (!emailRegex.test(email)) {
      notifyA("Invalid Email");
      return;
    }

    // Send data to the server
    fetch("http://localhost:4000/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          notifyA(data.error);
        } else {
          notifyB("Signed In successfully");
          console.log(data);
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          navigate("/");
        }
      });
  };

  return (
    <div>
      <Navbar />
      <ToastContainer />
      <div className={styles.signIn}>
        <div className={styles.formContainer}>
          <h1>User Sign-In</h1>
          <div className={styles.inputGroup}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.inputField}
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.inputField}
            />
          </div>
          <button
            className={styles.submitButton}
            onClick={postData}
          >
            Sign In
          </button>
          <div className={styles.linkGroup}>
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className={styles.link}>
                Sign Up
              </Link>
            </p>
            <p>
              <Link to="/adminsignin" className={styles.link}>
                Admin Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
