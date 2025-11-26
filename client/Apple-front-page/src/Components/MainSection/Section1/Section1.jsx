import React from 'react'
import style from './Section1.module.css';
import { useState, useEffect } from "react";
import ipodPronew from "../../../assets/images/home/ipodPronew-sm.jpg";
import ipodPronewSm from "../../../assets/images/home/ipodPronew.jpg";


function Section1() {

    const [bgImage, setBgImage] = useState(
      window.innerWidth < 768 ? ipodPronew : ipodPronewSm
    );

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 768) {
          setBgImage(ipodPronew);
        } else {
          setBgImage(ipodPronewSm);
        }
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  return (
    <section
      className={style.firstHightLightWrapper}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container">
        <div className={style.newAlertN}>New</div>

        <div className={`${style.titleWrapperBold} bold black`}>iPad Pro</div>

        <div className={style.linkWrapper}>
          <ul>
            <li>
              <a href="">Learn more</a>
            </li>
            <li>
              <a href="">Order</a>
            </li>
          </ul>
        </div>

        <div className={`${style.ipodCaption} row`}>
          <div className="col-sm-12 col-md-6 text-md-right">
            iPad Pro available starting 3.25
          </div>
          <div className="col-sm-12 col-md-6 text-md-left">
            Magic Keyboard coming in May
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1
