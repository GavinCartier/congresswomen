import React, { useEffect, useState } from 'react';
import styles from './number.module.css';
import { useInView } from 'react-intersection-observer';

const Counter = ({ target, label, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval;
    if (start && count < target) {
      interval = setInterval(() => {
        setCount((prev) => {
          const next = prev + Math.ceil(target / 50);
          return next > target ? target : next;
        });
      }, 40); // speed
    }
    return () => clearInterval(interval);
  }, [start, count, target]);

  return (
    <div className={styles.counter}>
      <div className={styles.value}>{count.toLocaleString()}+</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
};

const Number = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    if (inView) {
      setStartCounting(true);
    }
  }, [inView]);

  return (
    <div className={styles.main} ref={ref}>
      {inView && (
        <div className={styles.container}>
          <Counter target={12000} label="Attendees" start={startCounting} />
          <Counter target={600} label="Speakers" start={startCounting}/>
          <Counter target={800} label="Investors" start={startCounting}/>
          <Counter target={3000} label="Startups" start={startCounting}/>
        </div>
      )}
    </div>
  );
};

export default Number;
