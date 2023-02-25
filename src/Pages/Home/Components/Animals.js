import React from "react";
import "../Styles/Animals.scss";
import { Grid } from "@mui/joy";

function Animals() {
  //   return (
  //     <div>
  //       <div className="animalsHover">
  //         <Grid container columns={4} sx={{}}>
  //           <Grid xs={1}>
  //             <div className="animals" id="Threatened">
  //               <div className="overlay"></div>
  //             </div>
  //           </Grid>
  //           <Grid xs={1}>
  //             <div className="animals" id="Vulnerable">
  //               <div className="overlay"></div>
  //             </div>
  //           </Grid>
  //           <Grid xs={1}>
  //             <div className="animals" id="Endangered">
  //               <div className="overlay"></div>
  //             </div>
  //           </Grid>
  //           <Grid xs={1}>
  //             <div className="animals" id="CriticallyEndangered">
  //               <div className="overlay"></div>
  //             </div>
  //           </Grid>
  //         </Grid>
  //       </div>
  //     </div>
  //   );

  return (
    <div>
      <div className="animalsHover">
        <table cellSpacing={0}>
          <tbody>
            <tr>
              <td>
                <div className="animals" id="Threatened">
                  <div className="overlay"></div>
                </div>
              </td>
              <td>
                <div className="animals" id="Vulnerable">
                  <div className="overlay"></div>
                </div>
              </td>
              <td>
                <div className="animals" id="Endangered">
                  <div className="overlay"></div>
                </div>
              </td>
              <td>
                <div className="animals" id="CriticallyEndangered">
                  <div className="overlay"></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Animals;
