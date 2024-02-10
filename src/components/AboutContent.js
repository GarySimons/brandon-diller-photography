import React from "react";

import "./AboutContentStyles.css";

const AboutContent = () => {
  return (
    <div className="about-container">
      <div className="about-page-header">About</div>
      <div className="about-content">
        <div className="about-image"></div>
        <div className="about-text-container">
          <div className="about-text-inner-container">
            <p className="about-text">
              Brandon is an English-German photographer. He is best known for
              his large format, highly detailed architectural photography,
              employing his unique style and view of the world. He collaborates
              with leading architects, working on world wide projects of all
              scales, both commercial and residential.
            </p>
            <p className="about-text">
              Born in Cambridge UK to an English mother and German
              father, his childhood was spent living between Cambridge and
              Berlin. He is bilingual, speaking English and German. His love of
              photography started in Berlin at the age of ten, when his
              photographer Grandmother gave him his first camera.
            </p>
            <p className="about-text">
              He studied photography at Berlin University of the Arts, where he
              earned a Bachelor of Arts (BA). Brandon then traveled extensively
              in the US and Canada working with many influential photographers,
              and developing his signature style.
            </p>
            <p className="about-text">
              After time spent based in New York building his client base,
              Brandon relocated to London. He currently lives in Hackney with
              his partner and their Labrador Zena.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
