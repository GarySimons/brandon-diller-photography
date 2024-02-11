import React from "react";

import "./InteriorsContentStyles.css";

export const InteriorsContent = () => {
  return (
    <div className="interiors-container">
      <div className="interiors-page-header">Interiors</div>

      <div class="interiors-image-grid">
        <div className="int-row-two">
          <div class="int-image-five"></div>
          <div class="int-row-two-stack">
            <div class="int-image-three"></div>
            <div class="int-image-four"></div>
          </div>
        </div>
        <div className="int-row-three">
          <div class="int-image-six"></div>
        </div>
        <div className="int-row-one">
          <div class="int-image-one"></div>
          <div class="int-image-two"></div>
        </div>

        <div className="int-row-five">
          <div class="int-row-five-stack">
            <div class="int-image-ten"></div>
            <div class="int-image-eleven"></div>
          </div>
          <div class="int-image-nine"></div>
        </div>
        <div className="int-row-four">
          <div class="int-image-seven"></div>
          <div class="int-image-eight"></div>
        </div>
      </div>
    </div>
  );
};

export default InteriorsContent;
