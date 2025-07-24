import React, { useEffect, useState } from 'react';
import styles from './number.module.css';
import { useInView } from 'react-intersection-observer';

const Counter = ({ target, label }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    let interval;
    if (hasStarted && count < target) {
      interval = setInterval(() => {
        setCount((prev) => {
          const next = prev + Math.ceil(target / 50);
          return next > target ? target : next;
        });
      }, 40); // speed
    }
    return () => clearInterval(interval);
  }, [hasStarted, count, target]);

  return (
    <div className={styles.counter}>
      <div className={styles.value}>{count.toLocaleString()}+</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
};

const Number = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className={styles.main} ref={ref}>
      {inView && (
        <div className={styles.container}>
          <Counter target={12000} label="Attendees" />
          <Counter target={600} label="Speakers" />
          <Counter target={800} label="Investors" />
          <Counter target={3000} label="Startups" />
        </div>
      )}
    </div>
  );
};

export default Number;
