import React, {useState, useEffect, useRef} from 'react';
import classnames from 'classnames';
import styles from '../styles/loadout.module.css';
import {Button} from '../components/button';

export const Loadout = () => {
  const [loadOutOpen, setLoadOutOpen] = useState(false);

  return (
    <div className={classnames(styles.helper, styles.left, !loadOutOpen ? styles.hide : null)}>
      <div className={classnames(styles.loadOutButton, !loadOutOpen ? styles.closed : null)} onClick={e => {
        e.preventDefault();
        e.stopPropagation();
        setLoadOutOpen(!loadOutOpen);
      }}>
        <img src='/images/loadout-down.svg'></img>
      </div>
      <div style={{
        backgroundImage: '/images/lower.svg'
      }} className={classnames(styles.loadout)}>
        {(() => {
          const numItems = 8;
          const items = Array(numItems);
          for (let i = 0; i < numItems; i++) {
            items[i] = (
              <div className={styles.item} key={i}>
                <div className={styles.label}>{i + 1}</div>
                <img src='/images/plus.svg'></img>
              </div>
            );
          }
          return items;
        })()}
        <div className={styles.loadOutRight}>
          <div className={styles.item}>
            <div className={styles.label}>M</div>
            <img src='/images/micoff.svg'></img>
          </div>

          <div className={styles.item}>
            <div className={classnames(styles.label)}>ENTER</div>
            <img src='/images/message.svg'></img>
          </div>

        </div>
      </div>
    </div>
  );
};