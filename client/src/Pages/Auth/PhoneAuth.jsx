import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const PhoneAuth = () => {
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const getOTP = (e) => {
    e.preventDefault();
    console.log(number);
  };
  return (
    <div>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Phone Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={getOTP}>
          <Form.group className="mb-3" controlId="formBasicPhone">
            <PhoneInput
              defaultCountry="IN"
              value={number}
              onChange={setNumber}
              placeholder="Enter Phone Number"
            />
          </Form.group>
          <div className="button-right">
            <Link to="/">
              <Button variant="secondary">Cancel</Button> &nbsp;
            </Link>
            <Button variant="primary" type="submit">
              Send OTP
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default PhoneAuth;
