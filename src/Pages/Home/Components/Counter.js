import React from "react";
import Grid from "@mui/joy/Grid";
import "../Styles/Counter.scss";

function Counter(props) {
  return (
    <div>
      <div className="counterGridContainer">
        <Grid container sx={{ flexGrow: 1 }}>
          <Grid className="counterGridItem" xs={3}>
            <p className="bold">{props.policies}</p>
            <p>Policies</p>
          </Grid>
          <Grid className="counterGridItem" xs={3}>
            <p className="bold">{props.programs}</p>
            <p>Programs</p>
          </Grid>
          <Grid className="counterGridItem" xs={3}>
            <p className="bold">{props.services}</p>
            <p>Services</p>
          </Grid>
          <Grid className="counterGridItem" xs={3}>
            <p className="bold">{props.people}</p>
            <p>People Joined</p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Counter;
