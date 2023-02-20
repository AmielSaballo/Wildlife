import React from "react";
import "../Styles/Stats.scss";
import { Grid } from "@mui/joy";

function Stats() {
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
                <p className="statNumber">200</p>
                <p className="statText">Lorem</p>
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
                <p className="statNumber">100</p>
                <p className="statText">Lorem, ipsum..</p>
              </Grid>
              <Grid xs={1} className="normalStat">
                <p className="statNumber">100</p>
                <p className="statText">Lorem, ipsum..</p>
              </Grid>
              <Grid xs={1} className="normalStat">
                <p className="statNumber">100</p>
                <p className="statText">Lorem, ipsum..</p>
              </Grid>
              <Grid xs={1} className="normalStat">
                <p className="statNumber">100</p>
                <p className="statText">Lorem, ipsum..</p>
              </Grid>
              <Grid xs={2}>
                <div className="bigStat">
                  <p className="statNumber">110</p>
                  <p className="statText">Lorem, ipsum.</p>
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
