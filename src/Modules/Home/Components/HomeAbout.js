import React from "react";
import Grid from "@mui/joy/Grid";
import "../Styles/HomeAbout.scss";

function HomeAbout() {
  return (
    <div>
      <div className="aboutGridContainer">
        <Grid container columns={2} sx={{ flexGrow: 1 }}>
          <Grid xs={1}>
            <img
              src="https://ecitesph.com/web/image/683/bmbDENRNewLogo.png"
              alt="BMB logo"
            />
          </Grid>
          <Grid xs={1}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              consequuntur blanditiis nostrum error numquam earum perferendis
              totam minus inventore ipsum id, dolores maxime quidem saepe rem
              velit doloremque delectus aliquam labore et nam impedit sunt
              ducimus! Voluptatem cumque, distinctio adipisci voluptates
              pariatur laborum provident nulla ab temporibus iure sint alias?
            </p>
            <a href="/about">
              <button className="aboutButton">About Us</button>
            </a>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default HomeAbout;
