// components/HeroSection.tsx
import React from "react";
import image from "../../public/shared/images/97ce5517-4b0c-4e87-b435-92beb2f00d50.png"
import Image from "next/image";
import styles from "../styles/index.module.css"

const HeroSection: React.FC = () => {
  return (
    <section className={styles.section} >
      <h1 className={styles.h1}>Артем и Мария</h1>
      <div>
        <Image className={styles.imagewarper}
          src={image}
          alt="Артем и Мария"/>
      </div>
      <div className={styles.text_warp}>
      <h2 className={styles.h2}>Дорогие гости!</h2>
      <p>
        
        В жизни бывают такие счастливые моменты, которые немыслимы
        без присутствия рядом близких людей.
        Приглашаем Вас разделить с нами этот незабываемый день - день создания нашей семьи!
      </p>
      </div>
    </section>
  );
};

export default HeroSection;
