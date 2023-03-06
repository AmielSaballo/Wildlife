import { React, useState } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import { Alert, AlertTitle } from "@mui/material";

function Form({ postLink, successMessage }) {
  const [firstName, SetFName] = useState("");
  const [lastName, SetLName] = useState("");
  const [phoneNumber, SetPhone] = useState("");
  const [email, SetEmail] = useState("");
  const [error, SetError] = useState({
    fnameError: "",
    lnameError: "",
    phoneError: "",
    emailError: "",
  });
  const [open, SetOpen] = useState(false);

  const handleClose = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }

    SetOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      validateFirstName(firstName) &&
      validateLastName(lastName) &&
      validatePhoneNumber(phoneNumber) &&
      validateEmail(email)
    ) {
      // e.target.submit();
      SetOpen(true);

      axios.post(postLink, {
        firstName,
        lastName,
        phoneNumber,
        email,
      });

      SetFName("");
      SetLName("");
      SetPhone("");
      SetEmail("");

      document.getElementById("fname").value = "";
      document.getElementById("lname").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("email").value = "";
    }
  };

  const handleChange = (e) => {
    if (e.target.id == "fname") {
      validateFirstName(e.target.value);
    } else if (e.target.id == "lname") {
      validateLastName(e.target.value);
    } else if (e.target.id == "phone") {
      validatePhoneNumber(e.target.value);
    } else if (e.target.id == "email") {
      validateEmail(e.target.value);
    }
  };

  const validateFirstName = (name) => {
    let err = "";
    let isValid = false;
    let pattern = /^[A-Za-z]+$/;

    if (name.trim() == "") {
      err = "First name is required";
      isValid = false;
    } else if (!pattern.test(name)) {
      err = "Invalid name!";
      isValid = false;
    } else {
      err = "";
      isValid = true;
    }

    SetFName(name);
    SetError({ ...error, fnameError: err });
    return isValid;
  };

  const validateLastName = (lName) => {
    let err = "";
    let isValid = false;
    let pattern = /^[A-Za-z]+$/;

    if (lName.trim() == "") {
      err = "Last name is required";
      isValid = false;
    } else if (!pattern.test(lName)) {
      err = "Invalid name!";
      isValid = false;
    } else {
      err = "";
      isValid = true;
    }

    SetLName(lName);
    SetError({ ...error, lnameError: err });
    return isValid;
  };

  const validatePhoneNumber = (contact) => {
    let err = error.contactError;
    let isValid = false;
    let pattern = /[0-9]/;

    if (contact.trim() == "") {
      err = "Phone number is required";
      isValid = false;
    } else if (contact.trim().length != 11 || !pattern.test(contact)) {
      err = "Invalid phone number!";
      isValid = false;
    } else {
      err = "";
      isValid = true;
    }

    SetPhone(contact);
    SetError({ ...error, phoneError: err });
    return isValid;
  };

  const validateEmail = (email) => {
    let err = error.emailError;
    let isValid = false;
    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.trim() == "") {
      err = "Email is required";
      isValid = false;
    } else if (!pattern.test(email)) {
      err = "Invalid email!";
      isValid = false;
    } else {
      err = "";
      isValid = true;
    }

    SetEmail(email);
    SetError({ ...error, emailError: err });

    return isValid;
  };

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <TextField
        id="fname"
        label="First Name"
        sx={{ mt: "1rem", mr: "1rem" }}
        onChange={handleChange}
        {...(error.fnameError && {
          error: true,
          helperText: error.fnameError,
        })}
        inputProps={{ "data-testid": "fname" }}
        FormHelperTextProps={{ "data-testid": "first-name-error" }}
      />
      <TextField
        id="lname"
        label="Last Name"
        sx={{ mt: "1rem" }}
        onChange={handleChange}
        {...(error.lnameError && {
          error: true,
          helperText: error.lnameError,
        })}
        inputProps={{ "data-testid": "lname" }}
        FormHelperTextProps={{ "data-testid": "last-name-error" }}
      />
      <TextField
        id="email"
        label="Email"
        sx={{ mt: "1rem", mr: "1rem" }}
        onChange={handleChange}
        {...(error.emailError && {
          error: true,
          helperText: error.emailError,
        })}
        inputProps={{ "data-testid": "email" }}
        FormHelperTextProps={{ "data-testid": "email-error" }}
      />
      <TextField
        id="phone"
        label="Phone Number"
        sx={{ mt: "1rem" }}
        onChange={handleChange}
        {...(error.phoneError && {
          error: true,
          helperText: error.phoneError,
        })}
        inputProps={{ "data-testid": "phone" }}
        FormHelperTextProps={{ "data-testid": "phone-number-error" }}
      />
      <div className="submitBtn">
        <Button
          type="submit"
          disabled={
            !(
              error.fnameError == "" &&
              error.lnameError == "" &&
              error.emailError == "" &&
              error.phoneError == ""
            )
          }
        >
          Submit
        </Button>
      </div>
      <div className="alertMessage">
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            <b>Success!</b> {successMessage}
          </Alert>
        </Snackbar>
        ;
      </div>
    </form>
  );
}

export default Form;
