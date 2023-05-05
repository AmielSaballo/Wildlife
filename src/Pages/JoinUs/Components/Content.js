import { React } from "react";
import Header from "../../Common/Header";
import "../Styles/Content.scss";
import background from "../Images/MarineTurtle.jpg";
import CostalCleanUp from "../Images/CoastalCleanup.jfif";
import { VolunteerAPI } from "../../../Utils/services";
import Form from "../../Common/Form";

function Content() {
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
                Be part of the <span className="counter">20,000+</span> people
                advocating for our nation's wildlife.
              </h1>
            </div>
          </div>
          <div className="joinForm">
            <h2>Join hands and save the wildlife.</h2>
            <Form
              postLink={VolunteerAPI}
              successMessage={"Thank you for joining the team!"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
