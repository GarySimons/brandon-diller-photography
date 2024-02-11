import React from "react";

import "./ExteriorsContentStyles.css";

const ExteriorsContent = () => {
  return (
    <div className="exteriors-container">
      <div className="exteriors-page-header">Exteriors</div>

      <div class="exteriors-image-grid">
        <div className="ex-row-one">
            <div class="ex-image-one"></div>
            <div class="ex-image-two"></div>
        </div>
        <div className="ex-row-two">
            <div class="ex-row-two-stack">
            <div class="ex-image-three"></div>
            <div class="ex-image-four"></div>   
            </div>
            <div class="ex-image-five"></div>
        </div>
        <div className="ex-row-three">
            <div class="ex-image-six"></div>
        </div>
        <div className="ex-row-four">
            <div class="ex-image-seven"></div>
            <div class="ex-image-eight"></div>
        </div>
        <div className="ex-row-five">
            <div class="ex-image-nine"></div>
            <div class="ex-row-five-stack">
            <div class="ex-image-ten"></div>
            <div class="ex-image-eleven"></div>   
            </div>
        </div>
      </div>
    </div>
  );
};

export default ExteriorsContent;
