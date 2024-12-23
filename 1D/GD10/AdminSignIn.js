import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS
import styles from "./AdminSignIn.module.css"; // Scoped CSS for styling

function AdminSignIn() {
  const navigate = useNavigate();

  useEffect(() => {
    // Example logic for handling already signed-in users
    // const token = localStorage.getItem("jwt");
    // if (token) {
    //   navigate("/adminHome");
    // }
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const notifyA = (msg) => toast.error(msg);
  const notifyB = (msg) => toast.success(msg);

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const postData = () => {
    if (!emailRegex.test(email)) {
      notifyA("Invalid Email");
      return;
    }

    fetch("http://localhost:4000/adminSignin", {
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
          notifyB("Signed in successfully");
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          navigate("/adminHome");
        }
      });
  };

  return (
    <div className={styles.signUp}>
      <ToastContainer />
      <div className={styles.formContainer}>
        <h1>Admin Sign-In</h1>
        <div>
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
        </div>
        <div className={styles.linkGroup}>
          <p>
            Don’t have an account?{" "}
            <Link to="/signup" className={styles.link}>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminSignIn;
