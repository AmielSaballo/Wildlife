import React from "react";
import Grid from "@mui/joy/Grid";
import "../Styles/HomeAbout.scss";
import LogoText from "../Images/LogoText.png";
import { Link } from "react-router-dom";

function HomeAbout() {
  return (
    <div>
      <div className="aboutGridContainer">
        <Grid container columns={2} sx={{ flexGrow: 1 }}>
          <Grid xs={1}>
            <img src={LogoText} alt="BMB logo" />
          </Grid>
          <Grid xs={1}>
            <p>
              Our mission is to raise awareness about the importance of
              conservation and to inspire action towards a sustainable future
              for all species. Through education, advocacy, and conservation
              efforts, we strive to ensure the survival and well-being of
              wildlife populations in the Philippines.
              <br />
              <br />
              Our team is partnered with governments agencies such as the
              Department of Environment and Natural Resources (DENR) alongside
              with its bureau for wildlife, Biodiversity Management Bureau
              (BMB). We have experts in wildlife biology, ecology, and
              conservation, as well as dedicated volunteers and supporters who
              share our passion for protecting the natural world.
              <br />
              <br />
              We believe that everyone has a role to play in wildlife
              conservation, and we welcome individuals and organizations of all
              backgrounds to join us in our efforts. Together, we can ensure a
              future where all species thrive in healthy and vibrant ecosystems.
            </p>
            <Link to={"/about"}>
              <button className="aboutButton">About Us</button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default HomeAbout;
