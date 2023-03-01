import { React, useState } from "react";
import Header from "../../Common/Header";
import "../Styles/Content.scss";
import background from "../Images/MarineTurtle.jpg";
import CostalCleanUp from "../Images/CoastalCleanup.jfif";
import { TextField } from "@mui/material";
import axios from "axios";
import { VolunteerAPI } from "../../../Assets/services";

function Content() {
  const [firstName, SetFName] = useState("");
  const [lastName, SetLName] = useState("");
  const [phoneNumber, SetPhone] = useState("");
  const [email, SetEmail] = useState("");
  const [error, SetError] = useState({
    fnameError: null,
    lnameError: null,
    phoneError: null,
    emailError: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      validateName(firstName) &&
      validateName(lastName) &&
      validatePhoneNumber(phoneNumber) &&
      validateEmail(email)
    ) {
      alert("Thank you for joining the team!");
      // e.target.submit();

      axios
        .post(VolunteerAPI, {
          firstName,
          lastName,
          phoneNumber,
          email,
        })
        .then((res) => {});

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
    // console.log(e.target.id);
    if (e.target.id == "fname" || e.target.id == "lname") {
      validateName(e.target.value, e.target.id);
    } else if (e.target.id == "phone") {
      validatePhoneNumber(e.target.value);
    } else if (e.target.id == "email") {
      validateEmail(e.target.value);
    }
  };

  const validateName = (name, target) => {
    let error = "";
    let isValid = false;
    let pattern = /^[A-Za-z]+$/;

    if (name.trim() == "") {
      error = "Name is required";
      isValid = false;
    } else if (!pattern.test(name)) {
      error = "Invalid name!";
      isValid = false;
    } else {
      error = "";
      isValid = true;
    }

    if (target == "fname") {
      SetFName(name);
      SetError({ ...error, fnameError: error });
    } else {
      SetLName(name);
      SetError({ ...error, lnameError: error });
    }

    return isValid;
  };

  const validatePhoneNumber = (contact) => {
    let err = error.contactError;
    let isValid = false;
    let pattern = /[0-9]/;

    if (contact.trim() == "") {
      err = "Phone Number is required";
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

    if (!pattern.test(email)) {
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

  const headerContent = {
    background: background,
    position: "10% 70%",
    title: "Join Us",
    source: "DENR",
    sourceText: "Marine Turtles Freed",
    sourceLink:
      "https://r12.denr.gov.ph/index.php/news-events/press-releases?start=15",
  };
  return (
    <div>
      <Header props={headerContent} />
      <div className="joinContainer">
        <div className="image">
          <img src={CostalCleanUp} alt="Coastal Clean Up" />
        </div>
        <div className="joinContent">
          <div className="text">
            <h1>Be a Volunteer!</h1>
            <p>
              Together with DENR and BMB, we are dedicated to raising awareness
              and promoting conservation efforts for endangered species in the
              Philippines. We believe that through education, advocacy, and
              collaboration, we can make a meaningful impact on the preservation
              of our nation's biodiversity.
            </p>
            <p>
              As a volunteer, you will have the opportunity to contribute to our
              mission by writing articles, creating social media content,
              conducting research, and engaging with our audience. Your skills
              and expertise are invaluable to us and will help us reach a wider
              audience and spread our message.
            </p>
            <p>
              If you are passionate about wildlife conservation and want to make
              a difference, we would love to have you! Together, we can create a
              more sustainable future for all living creatures.
            </p>
            <br />
            <br />
            <div className="counter">
              <h1>
                Be part of the <span className="counter">20,000</span> people
                advocating for our nation's wildlife.
              </h1>
            </div>
          </div>
          <div className="joinForm">
            <h2>Join hands and save the wildlife.</h2>
            <form method="POST" action="" onSubmit={handleSubmit}>
              <TextField
                id="fname"
                label="First Name"
                sx={{ mt: "1rem", mr: "1rem" }}
                onChange={handleChange}
                {...(error.fnameError && {
                  error: true,
                  helperText: error.fnameError,
                })}
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
              />
              <div className="submitBtn">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
