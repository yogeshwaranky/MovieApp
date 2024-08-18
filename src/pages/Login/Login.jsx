import React, { useState, useEffect } from "react";
import { useStoreActions } from "../../store/hooks";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [emailId, setEmailId] = useState('');
  const [error, setError] = useState('');
  const { setEmail } = useStoreActions((actions) => actions.loginModel);

  function handleEmail(e) {
    setEmailId(e.target.value);
    setError('');
  }

  // Prevent browser back function
  useEffect(() => {
    const neutralizeBack = (callback) => {
      window.history.pushState(null, "", window.location.href);
      window.onpopstate = () => {
        window.history.pushState(null, "", window.location.href);
        callback();
      };
    };
    neutralizeBack(() => {});
  }, []);

  function handleLogin() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailId)) {
      setError("Please enter a valid email address.");
    } else {
      setEmail(emailId);
      navigate("/home");
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleLogin();
    }
  }

  return (
    <section className="position-relative py-4 py-xl-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h2>Log in</h2>
            <p className="w-lg-50">
              Authenticate users by email address, no need for account verification.
            </p>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 col-xl-4">
            <div className="card mb-5">
              <div className="card-body d-flex flex-column align-items-center">
                <div className="bs-icon-xl bs-icon-circle bs-icon-primary bs-icon my-4">
                  <svg
                    className="bi bi-person"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z" />
                  </svg>
                </div>
                <form className="text-center">
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="email"
                      onChange={handleEmail}
                      onKeyDown={handleKeyDown}
                      placeholder="Email"
                      value={emailId}
                    />
                    {error && <div className="text-danger mt-2">{error}</div>}
                  </div>
                  <div className="mb-3">
                    <button
                      className="btn btn-primary d-block w-100"
                      type="button"
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
