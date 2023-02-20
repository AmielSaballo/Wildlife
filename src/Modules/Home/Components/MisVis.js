import React from "react";
import "../Styles/MisVis.scss";
import { Grid } from "@mui/joy";

function MisVis() {
  return (
    <div>
      <div className="misvisContainer">
        <h1>Who are we?</h1>
        <Grid container sx={{ flexGrow: 1 }}>
          <Grid xs={2}></Grid>
          <Grid xs={3}>
            <img
              src="https://images.pexels.com/photos/6646883/pexels-photo-6646883.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Volunteer Work"
            />
          </Grid>
          <Grid xs={1.5}></Grid>
          <Grid xs={3}>
            <div className="misvisText">
              <h2>Lorem, ipsum.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                veritatis sequi quam est maxime quisquam atque, blanditiis ex
                optio quibusdam ut ratione aliquid ab itaque deleniti rem nihil
                libero qui excepturi. Exercitationem maxime veritatis adipisci
                commodi corrupti earum facilis nam? Error suscipit soluta, hic
                voluptate repudiandae eius, inventore cumque voluptates nulla
                dolorem dolor consectetur atque alias voluptatem, maxime
                provident expedita quas. Ad accusantium aspernatur delectus
                laborum, laudantium, veniam sint voluptates, aliquid porro modi
                vel iusto blanditiis esse distinctio minima ratione labore est!
                Nisi odio maiores numquam eum id cupiditate, exercitationem
                animi vero temporibus commodi iste rerum ab in obcaecati iure
                sequi incidunt nesciunt sapiente quisquam ducimus assumenda
                laborum delectus? Sapiente, recusandae excepturi. Accusantium
                optio amet omnis dolore molestias quisquam vitae?
              </p>
            </div>
            <div className="joinUs">
              <a href="/joinus">
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
