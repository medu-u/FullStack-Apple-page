import React from 'react'
import styles from './Section4.module.css';

function Section4() {
  return (
    <section
      className={`${styles["fourth-heghlight-wrapper"]} fourth-heghlight-wrapper}`}
    >
      <div className="container-fluid">
        <div className="row">
          <div className={`col-sm-12 col-md-6 left-side-wrapper`}>
            <div
              className={`${styles["left-side-container"]} left-side-container`}
            >
              <div className="title-wraper">iPhone 11</div>
              <div className="description-wrapper">
                Just the right amount of everything.
              </div>

              <div className={styles["price-wrapper"]}>
                From $18.70/mo. or $499 with trade‑in.<sup>1</sup>
              </div>

              <div className="links-wrapper">
                <ul>
                  <li>
                    <a href="">Learn more</a>
                  </li>
                  <li>
                    <a href="">Apply now</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`col-sm-12 col-md-6 right-side-wrapper`}>
            <div
              className={`${styles["right-side-container"]} right-side-container`}
            >
              <div
                className={`${styles["title-wraper"]} ${styles["white"]} title-wraper white`}
              >
                Get the latest CDC response to COVID-19.
              </div>
              <div
                className={`links-wrapper ${styles["links-wrapper"]} ${styles.white}`}
              >
                <ul>
                  <li>
                    <a href="">Watch the PSA</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4
