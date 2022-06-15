import React from 'react';
import style from './styles/info.style.module.css';

function Disclaimer({
  text = 'Heavy traffic/bad weather conditions may cause delays in deliveries especially for 3-5pm and 5-7pm slots. Order by 2pm for same day delivery/pickup. Latest pickup by 6pm.',
}: {
  text?: string;
}) {
  return (
    <section className={style.info}>
      <h1>{text}</h1>
    </section>
  );
}

export default Disclaimer;
