import React from "react";
import style from "./Section3.module.css";
import iphone11 from '../../../assets/images/home/iphone11-pro-bg.jpg';
function Section3() {
  return (
    <section
      className={style.thirdHightLightWrapper}
      style={{ backgroundImage: `url(${iphone11})` }}
    >
      <div className="container">
        <div className={style.titleWrapperBold}>iPhone 11 Pro</div>

        <div className={style.descriptionWrapper}>
          Pro cameras. Pro display. Pro performance.
        </div>

        <div className={style.priceWrapper}>
          From $24.95/mo. or $599 with trade‑in.
        </div>

        <div className={style.linkWrapper}>
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
    </section>
  );
}

export default Section3;
