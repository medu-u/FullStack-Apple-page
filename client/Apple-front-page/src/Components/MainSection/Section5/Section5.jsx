import styles from "./Section5.module.css";
import appleTvLogo from "../../../assets/images/icons/apple-tv-logo.png";
import banker from "../../../assets/images/home/banker.png";
import watchLogo from "../../../assets/images/icons/watch-series5-logo.png";

export default function Section5() {
  return (
    <section
      className={`${styles["fifth-heghlight-wrapper"]} fifth-heghlight-wrapper`}
    >
      <div className="container-fluid">
        <div className="row">
          <div className={`col-sm-12 col-md-6 left-side-wrapper`}>
            <div
              className={`${styles["left-side-container"]} left-side-container`}
            >
              <div className="top-logo-wrapper">
                <div className="logo-wrapper">
                  <img src={appleTvLogo} alt="Apple TV+ Logo" />
                </div>
              </div>

              <div className={styles["tvshow-logo-wraper"]}>
                <img src={banker} alt="The Banker Movie" />
              </div>

              <div className={styles["watch-more-wrapper"]}>
                <a href="#">Watch now on the Apple TV App</a>
              </div>
            </div>
          </div>
          <div className={`col-sm-12 col-md-6 right-side-wrapper`}>
            <div
              className={`${styles["right-side-container"]} right-side-container`}
            >
              <div className="top-logo-wrapper">
                <div className="logo-wrapper">
                  <img src={watchLogo} alt="Watch Series 5 Logo" />
                </div>
              </div>

              <div
                className={`${styles["description-wraper"]} description-wraper`}
              >
                With the Always-On Retina display.
                <br />
                You’ve never seen a watch like this.
              </div>

              <div className="links-wrapper">
                <ul>
                  <li>
                    <a href="">Learn more</a>
                  </li>
                  <li>
                    <a href="">Buy</a>
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
