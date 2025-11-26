import React from 'react'
import style from './Section2.module.css';
import { useState, useEffect } from "react";
import mackBookAirnewSm from '../../../assets/images/home/macbookair-new.jpg';
import mackBookAirnew from '../../../assets/images/home/macbookair-new-sm.jpg'
function Section2() {
   const [bgImage, setBgImage] = useState(
        window.innerWidth < 768 ? mackBookAirnew : mackBookAirnewSm
      );
  
      useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth < 768) {
            setBgImage(mackBookAirnew);
          } else {
            setBgImage(mackBookAirnewSm);
          }
        };
  
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
  return (
    <section
      className={style.secondHightLightWrapper}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container">
        <div className={style.newAlertN}>New</div>

        <div className={`${style.titleWrapperBold} black`}>MacBook Air</div>

        <div className={`${style.descriptionWrapper} black`}>
          Twice the speed. Twice the storage.
        </div>

        <div className={`${style.priceWrapper} grey`}>From $999.</div>

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

export default Section2
