import React, { useState } from "react";
import styles from "./index.module.css";

export const Card = ({
  disabled,
  subtitle,
  subSelect,
  quantity,
  gift,
  weight,
}) => {
  const subSlogan = "Котэ не одобряет?";
  const [selected, setSelected] = useState(false);
  const [hovering, update] = useState(false);

  const onClick = () => {
    selected ? setSelected(false) : setSelected(true);
    update(true);
  };

  return (
    <div
      className={`${styles.card} ${disabled && styles.disabled}`}
      onClick={onClick}
      onMouseOut={() => {
        if (hovering) {
          update(false);
        }
      }}
    >
      <div
        className={`${
          disabled ? styles.disabled : selected ? styles.selected : styles.body
        }`}
      >
        <div className={styles.header}>
          <div className={styles.triangle}></div>

          <div className={`${styles.title} ${styles.act}`}>
            {!hovering && !disabled && selected ? (
              <span className={styles.subSlogan}>{subSlogan}</span>
            ) : (
              <span className={styles.slogan}>Сказочное заморское яство</span>
            )}
          </div>
        </div>
        <div className={`${styles.main} ${styles.act}`}>
          <h2 className={styles.heading}>
            Нямушка
            <span className={styles.feature} data-get="cardFeature">
              с {subtitle}
            </span>
          </h2>
          <ul className={styles.list}>
            <li className={styles.item}>{quantity} порций</li>
            <li className={styles.item}>{gift} в подарок</li>
            {weight >= 5 && <li className={styles.item}>заказчик доволен</li>}
          </ul>
          <img
            className={styles.img}
            src={require("../../Images/cat.png")}
            alt="Котэ"
          />
          <div className={styles.circle}>
            <div className={styles.weight}>
              <span className={styles.amount}>{weight}</span>
              <div className={styles.measure}>кг</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        {disabled ? (
          <span className={styles.disabled}>
            Печалька, с {subtitle} закончился.
          </span>
        ) : selected ? (
          <span className={styles.text}>{subSelect}</span>
        ) : (
          <>
            <span className={styles.text}>Чего сидишь? Порадуй котэ,</span>
            <span className={styles.buy}>
              <a className={styles.link} href="##">
                купи
              </a>
              .
            </span>
          </>
        )}
      </div>
    </div>
  );
};
