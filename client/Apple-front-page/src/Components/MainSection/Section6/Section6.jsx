import styles from "./Section6.module.css";
import arcade from "../../../assets/images/icons/arcade.png";

export default function Section6() {
  return (
    <section
      className={`${styles["sixth-heghlight-wrapper"]} sixth-heghlight-wrapper`}
    >
      <div className="container-fluid">
        <div className="row">
          <div className={`col-sm-12 col-md-6 left-side-wrapper`}>
            <div
              className={`${styles["left-side-container"]} left-side-container`}
            >
              <div className="top-logo-wrapper">
                <div className="logo-wrapper">
                  <img src={arcade} alt="Apple Arcade Logo" />
                </div>
              </div>

              <div
                className={`${styles["description-wraper"]} description-wrapper ${styles.white} white`}
              >
                Agent 8 is a small hero on a big mission.
              </div>
              <div
                className={`links-wrapper ${styles["links-wrapper"]} ${styles.white} white`}
              >
                <ul>
                  <li>
                    <a href="">
                      Play now<sup>2</sup>
                    </a>
                  </li>
                  <li>
                    <a href="">Learn about Apple Arcade</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`col-sm-12 col-md-6 right-side-wrapper`}>
            <div
              className={`${styles["right-side-container"]} right-side-container`}
            >
              <div className={`${styles["title-wraper"]} title-wraper`}>
                Apple Card Monthly Installments
              </div>

              <div
                className={`${styles["description-wraper"]} description-wraper`}
              >
                Pay for your next iPhone over time, interest-free with Apple
                Card.
              </div>

              <div className={`${styles["links-wrapper"]} links-wrapper`}>
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
        </div>
      </div>
    </section>
  );
}
