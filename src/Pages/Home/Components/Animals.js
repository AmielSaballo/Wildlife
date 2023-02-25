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
                  <p>Other Threatened Species</p>
                </div>
              </td>
              <td>
                <div className="animals" id="Vulnerable">
                  <p>Vulnerable</p>
                </div>
              </td>
              <td>
                <div className="animals" id="Endangered">
                  <p>Endangered</p>
                </div>
              </td>
              <td>
                <div className="animals" id="CriticallyEndangered">
                  <p>Critically Endangered</p>
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
