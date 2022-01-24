import React from 'react';
import Button from '../Button';
import { IoIosFootball, IoMdBasketball, IoMdTennisball } from 'react-icons/io';
import { FaVolleyballBall } from 'react-icons/fa';
import heroBanner from '../../assets/images/basketball.jpg'

export default function HeroBanner() {
  return (
    <section className='hero'>
      <div className='hero__wrapper'>
        <h1 className='hero__title'>
          Find - Create - Join
        </h1>
        <p className='hero__intro'>
        Some amazing introduction for our website built in React with server-side from aws.
        </p>
      </div>
      <div className='hero__buttons'>
        <Button icon={<IoIosFootball className='hero__icon' />} name="football"/>
        <Button icon={<IoMdBasketball className='hero__icon' />} name="basketball"/>
        <Button icon={<FaVolleyballBall className='hero__icon' />} name="volleyball"/>
        <Button icon={<IoMdTennisball className='hero__icon' />} name="tennis"/>
      </div>
      <div className='banner'>
        <img 
        src={heroBanner} 
        className='banner__img'
        alt="basketball" />
      </div>
    </section>
  );
}
