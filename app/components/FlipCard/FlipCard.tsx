import React from 'react';
import styles from './FlipCard.module.scss';
interface FlipCardProps {
  isFlipped: boolean;
  front: React.ReactNode;
  back: React.ReactNode;
}

const FlipCard: React.FC<FlipCardProps> = ({front, back, isFlipped}) => {
  return (
    <div className={`${styles.flipCardContent} ${isFlipped ? styles.flipped : ''}`}> 
      <div className={styles.flipCardFront}>{front}</div>
      <div className={styles.flipCardBack}>{back}</div>
    </div>
  );
};

export default FlipCard;
