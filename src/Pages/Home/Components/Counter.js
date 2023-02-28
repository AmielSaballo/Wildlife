import React from "react";
import Grid from "@mui/joy/Grid";
import "../Styles/Counter.scss";

function Counter({ props }) {
  return (
    <div>
      <div className="counterGridContainer">
        <Grid container sx={{ flexGrow: 1 }}>
          <Grid className="counterGridItem" xs={3}>
            <p className="counterNumber">{props.threatened}</p>
            <p>Threatened</p>
          </Grid>
          <Grid className="counterGridItem" xs={3}>
            <p className="counterNumber">{props.vulnerable}</p>
            <p>Vulnerable</p>
          </Grid>
          <Grid className="counterGridItem" xs={3}>
            <p className="counterNumber">{props.endangered}</p>
            <p>Endangered</p>
          </Grid>
          <Grid className="counterGridItem" xs={3}>
            <p className="counterNumber">{props.critEndangered}</p>
            <p>Critically Endangered</p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Counter;
