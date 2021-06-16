import React from 'react';
import './Background.scss';

export default function Background() {
  return (
    <div className="background">
      <div className="ball1"></div>
      <div className="ball2"></div>
      <div className="ball3"></div>
      <div className="rectangle"></div>
      <img src="/src/assets/emojis.png" alt="" className="emojis" />
    </div>
  )
}