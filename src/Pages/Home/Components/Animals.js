import React from "react";
import "../Styles/Animals.scss";

function Animals() {
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
