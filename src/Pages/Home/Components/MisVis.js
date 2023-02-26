import React from "react";
import "../Styles/MisVis.scss";
import { Grid } from "@mui/joy";
import PlantTrees from "../images/PlantTrees.jpg";

function MisVis() {
  return (
    <div>
      <div className="misvisContainer">
        <h1>Who are we?</h1>
        <Grid container sx={{ flexGrow: 1 }}>
          <Grid xs={2}></Grid>
          <Grid xs={3}>
            <img src={PlantTrees} alt="Volunteer Work" />
          </Grid>
          <Grid xs={2}></Grid>
          <Grid xs={3}>
            <div className="misvisText">
              <h2>Our Development Goal</h2>
              <p>
                The Department of Environment and Natural Resources has a
                development goal for ensuring environmental quality and
                sustainability together with the Filipinos' well-being. As per
                their mandate (E.O. 192, s. 1987), this department is the
                primary agency responsible for the conservation, management,
                development, and proper use of the country’s environment and
                natural resources, specifically forest and grazing lands,
                mineral resources, including those in reservation and watershed
                areas, and lands of the public domain, as well as the licensing
                and regulation of all natural resources as may be provided for
                by law in order to ensure equitable sharing of the benefits
                derived therefrom for the welfare of the present and future
                generations of Filipinos.
              </p>
            </div>
            <div className="joinUs">
              <a href="/join">
                <button>Join Us</button>
              </a>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default MisVis;
