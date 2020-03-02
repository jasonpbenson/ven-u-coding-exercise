import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";

import styled from "styled-components";

import Button from "../Components/Button";

import Logo from "../Assets/logo.png";
import ErrorFlag from "../Assets/error-flag.svg";

const FormContainer = styled.div`
  align-items: center;
  background: #3d5d99;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;

  .background-element {
    background-color: #53a0dd50;
    clip-path: polygon(0 0, 0% 100%, 65% 100%);
    height: 100%;
    position: fixed;
    width: 100%;
  }
`;

const FormStyles = styled.form`
  align-items: center;
  background-color: #fff;
  box-shadow: -4px 4px 8px #00000060;
  color: #4d5055;
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: flex-start;
  min-width: 384px;
  max-width: 752px;
  padding: 2%;
  width: 40%;
  z-index: 100;

  .form-intro {
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: fit-content;
    justify-content: flex-start;
    margin: 2% 0 4% 0;
    width: 100%;
  }
  .form-intro .logo {
    height: 48px;
    width: auto;
  }
  .form-main {
    align-items: left;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 16px;
    position: relative;
    width: 70%;
  }
  .form-section {
    align-items: left;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: auto;
    position: relative;
    width: 100%;
  }
  .form-section input {
    background-color: #c5cfe1;
    color: #4d505;
    border: none;
    height: 40px;
    margin: 24px 0;
    outline: none;
    padding: 0 16px;
  }
  .form-section .error-flag {
    height: 24px;
    left: -2rem;
    position: absolute;
    top: -0.25rem;
  }
  .form-section .error-message-container {
    align-items: center;
    background-color: #f86900;
    color: #fff;
    display: flex;
    font-style: italic;
    height: 24px;
    left: 80%;
    padding: 8px;
    position: absolute;
    top: -8px;
    width: fit-content;
  }
  .form-section .error-message-container p {
    margin: 0;
    white-space: nowrap;
  }
  .form-section .error-message-container p::before {
    content: "";
    position: absolute;
    top: 40px;
    left: 16px;
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-right: 16px solid #f86900;
    border-bottom: 8px solid transparent;
    transform: rotate(-90deg);
  }
  .form-button {
    margin-top: 16px;
  }
  @media (max-width: 765px) {
    .form-intro .logo {
      height: 40px;
    }
    .form-intro h3 {
      font-size: 16px;
    }
  }
  @media (max-width: 490px) {
    height: 100%;
    justify-content: center;
    width: 100%;

    .form-section .error-message-container {
      left: 50%;
    }
  }
`;

const EntryForm = () => {
  const [redirect, setRedirect] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    setRedirect(true);
  };

  return (
    <FormContainer>
      <div className="background-element"></div>
      {!redirect ? (
        <FormStyles onSubmit={handleSubmit(onSubmit)}>
          <div className="form-intro">
            <img className="logo" src={Logo} alt="VenU logo" />
            <h3>
              Please complete the form below <br /> to view top stories from
              Hacker News
            </h3>
          </div>
          <div className="form-main">
            <div className="form-section">
              <label>First Name</label>
              <input
                name="firstName"
                ref={register({
                  required: true,
                  minLength: 2
                })}
                autoFocus
              />

              {errors.firstName && errors.firstName.type === "minLength" && (
                <>
                  <img
                    src={ErrorFlag}
                    alt="input error icon"
                    className="error-flag"
                  />
                  <div className="error-message-container">
                    <p>At least 2 characters</p>
                  </div>
                </>
              )}
              {errors.firstName && errors.firstName.type === "required" && (
                <>
                  <img
                    src={ErrorFlag}
                    alt="input error icon"
                    className="error-flag"
                  />
                  <div className="error-message-container">
                    <p>Required Field</p>
                  </div>
                </>
              )}
            </div>
            <div className="form-section">
              <label>Last Name</label>
              <input
                name="lastName"
                ref={register({
                  required: true,
                  minLength: 2
                })}
              />

              {errors.lastName && errors.lastName.type === "required" && (
                <>
                  <img
                    src={ErrorFlag}
                    alt="input error icon"
                    className="error-flag"
                  />
                  <div className="error-message-container">
                    <p>Required Field</p>
                  </div>
                </>
              )}
              {errors.lastName && errors.lastName.type === "minLength" && (
                <>
                  <img
                    src={ErrorFlag}
                    alt="input error icon"
                    className="error-flag"
                  />
                  <div className="error-message-container">
                    <p>At least 2 characters</p>
                  </div>
                </>
              )}
            </div>
            <div className="form-section">
              <label>Email</label>
              <input
                name="email"
                ref={register({
                  required: true,
                  pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
                })}
              />

              {errors.email && errors.email.type === "required" && (
                <>
                  <img
                    src={ErrorFlag}
                    alt="input error icon"
                    className="error-flag"
                  />
                  <div className="error-message-container">
                    <p>Required Field</p>
                  </div>
                </>
              )}

              {errors.email && errors.email.type === "pattern" && (
                <>
                  <img
                    src={ErrorFlag}
                    alt="input error icon"
                    className="error-flag"
                  />
                  <div className="error-message-container">
                    <p>Please use valid email</p>
                  </div>
                </>
              )}
            </div>
            <Button
              className="form-button"
              type="submit"
              label="submit"
            ></Button>
          </div>
        </FormStyles>
      ) : (
        <Redirect to="/search-results" />
      )}
    </FormContainer>
  );
};

export default EntryForm;
