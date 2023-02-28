import React from "react";
import "../Styles/Stats.scss";
import { Grid } from "@mui/joy";

function Stats({ props }) {
  return (
    <div>
      <div className="statContainer">
        <h1 className="greenText">We are here to save the animals.</h1>

        <Grid container columns={8} sx={{ flexGrow: 1 }}>
          <Grid xs={4}>
            <Grid className="statsLeft" container columns={1}>
              <Grid xs={1}>
                <img
                  src="https://vemaps.com/uploads/img/ph-02.png"
                  alt="Philippine Map"
                />
              </Grid>
              <Grid xs={1}>
                <p className="statNumber">{props.protected}</p>
                <p className="statText">Protected Areas</p>
              </Grid>
            </Grid>
          </Grid>

          <Grid xs={3}>
            <Grid
              className="statsRight"
              container
              columns={2}
              sx={{ flexGrow: 1 }}
            >
              <Grid xs={1} className="normalStat">
                <p className="statNumber">{props.landArea}</p>
                <p className="statText">Philippine Land Area</p>
              </Grid>
              <Grid xs={1} className="normalStat">
                <p className="statNumber">{props.terrestrial}</p>
                <p className="statText">Terrestrial Protected Area</p>
              </Grid>
              <Grid xs={1} className="normalStat">
                <p className="statNumber">{props.marine}</p>
                <p className="statText">Philippine Marine Area</p>
              </Grid>
              <Grid xs={1} className="normalStat">
                <p className="statNumber">{props.protectedMarine}</p>
                <p className="statText">Marine Protected Area</p>
              </Grid>
              <Grid xs={2}>
                <div className="bigStat">
                  <p className="statNumber">{props.protectedArea}</p>
                  <p className="statText">Protected Area</p>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Stats;
