import React, { useEffect, useState } from "react";
import Slide from "../Slide/Slide";
import './Slider.scss';

export default function Slider() {
  const [currSlide, setCurrSlide] = useState(-1);
  const [sliderInterval, setSliderInterval] = useState<NodeJS.Timer>();

  useEffect(() => {
    setCurrSlide(0)
    const intervalId = setInterval(() => {
      setCurrSlide((currSlide) => (currSlide + 1) % 3);
    }, 10000);
    setSliderInterval(intervalId);

    return () => clearInterval(intervalId);
  }, []);

  const resetInterval = () => {
    clearInterval(sliderInterval);
    setSliderInterval(
      setInterval(() => {
        setCurrSlide((currSlide) => (currSlide + 1) % 3);
      }, 10000)
    );
  };

  const tabSlide = (index:number) => {
    setCurrSlide(index);
    resetInterval();
  }

  const nextSlide = () => {
    setCurrSlide(currSlide => (currSlide + 1) % 3);
    resetInterval();
  }

  return (
    <div className="slider" data-scroll>

      <div className={`slide ${currSlide === 0 ? 'slide--active' : ''}`}>
        <i>1</i>
        <a className="slide__title" href="#">Стратегия</a>
        <a className="slide__button" href="#">Наш подход
          <svg viewBox="0 0 61 16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <path
              d="M60.7071 8.70711C61.0976 8.31658 61.0976 7.68342 60.7071 7.29289L54.3431 0.928932C53.9526 0.538408 53.3195 0.538408 52.9289 0.928932C52.5384 1.31946 52.5384 1.95262 52.9289 2.34315L58.5858 8L52.9289 13.6569C52.5384 14.0474 52.5384 14.6805 52.9289 15.0711C53.3195 15.4616 53.9526 15.4616 54.3431 15.0711L60.7071 8.70711ZM0 9L60 9V7L0 7L0 9Z">
            </path>
          </svg>
        </a>
        <div className="slide__description">
          <a className="slide__description-title" href="#">Помогаем спланировать развитие бизнеса в различных digital-каналах</a>
          <p className="slide__description-text">Проводим качественные и количественные исследования, чтобы лучше понять ваш продукт и его пользователей и предложить решения на долгую перспективу.</p>
        </div>
      </div>

      <div className={`slide ${currSlide === 1 ? 'slide--active' : ''}`}>
        <i>2</i>
        <a className="slide__title" href="#">Разработка</a>
        <a className="slide__button" href="#">Наш подход
          <svg viewBox="0 0 61 16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <path
              d="M60.7071 8.70711C61.0976 8.31658 61.0976 7.68342 60.7071 7.29289L54.3431 0.928932C53.9526 0.538408 53.3195 0.538408 52.9289 0.928932C52.5384 1.31946 52.5384 1.95262 52.9289 2.34315L58.5858 8L52.9289 13.6569C52.5384 14.0474 52.5384 14.6805 52.9289 15.0711C53.3195 15.4616 53.9526 15.4616 54.3431 15.0711L60.7071 8.70711ZM0 9L60 9V7L0 7L0 9Z">
            </path>
          </svg>
        </a>
        <div className="slide__description">
          <a className="slide__description-title" href="#">Реализовываем самые сложные интернет-проекты полностью своими силами</a>
          <p className="slide__description-text">Одна из самых больших команд в России. У нас несколько сотен проектных менеджеров, дизайнеров, проектировщиков и программистов с серьезным опытом работы в крупных проектах.</p>
        </div>
      </div>

      <div className={`slide ${currSlide === 2 ? 'slide--active' : ''}`}>
        <i>3</i>
        <a className="slide__title" href="#">Развитие</a>
        <a className="slide__button" href="#">Наш подход
          <svg viewBox="0 0 61 16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <path
              d="M60.7071 8.70711C61.0976 8.31658 61.0976 7.68342 60.7071 7.29289L54.3431 0.928932C53.9526 0.538408 53.3195 0.538408 52.9289 0.928932C52.5384 1.31946 52.5384 1.95262 52.9289 2.34315L58.5858 8L52.9289 13.6569C52.5384 14.0474 52.5384 14.6805 52.9289 15.0711C53.3195 15.4616 53.9526 15.4616 54.3431 15.0711L60.7071 8.70711ZM0 9L60 9V7L0 7L0 9Z">
            </path>
          </svg>
        </a>
        <div className="slide__description">
          <a className="slide__description-title" href="#">Успех digital-продукта — это сумма маленьких побед</a>
          <p className="slide__description-text">Разделяем философию HADI-циклов, итеративной разработки. Тестируем, анализируем, предлагаем оптимальные решения. Говорим на языке бизнеса. Ориентируемся на пользователя. Предлагаем SLA с финансовой ответственностью.</p>
        </div>
      </div>



      <a className="slider__next" onClick={() => nextSlide()}>
        <svg viewBox="0 0 38 12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <path
            d="M37.1093 6.53033C37.4022 6.23744 37.4022 5.76256 37.1093 5.46967L32.3363 0.696699C32.0434 0.403806 31.5685 0.403806 31.2756 0.696699C30.9828 0.989593 30.9828 1.46447 31.2756 1.75736L35.5183 6L31.2756 10.2426C30.9828 10.5355 30.9828 11.0104 31.2756 11.3033C31.5685 11.5962 32.0434 11.5962 32.3363 11.3033L37.1093 6.53033ZM0 6.75L36.5789 6.75V5.25L0 5.25L0 6.75Z">
          </path>
        </svg>
      </a>

      <div className="slider__footer">
        <div className="slider__menu">
          <a className={`slider__menu-item ${currSlide === 0 ? 'slider__menu-item--active' : ''}`} onClick = {() => tabSlide(0)}>Стратегия
            <svg className='slider__menu-loader'  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink">
              <circle cx="8" cy="8" r="6" stroke-width="2.5"></circle>
              <circle cx="8" cy="8" r="6"></circle>
            </svg>
          </a>

          <a className={`slider__menu-item ${currSlide === 1 ? 'slider__menu-item--active' : ''}`} onClick = {() => tabSlide(1)}>Разработка
            <svg className='slider__menu-loader' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink">
              <circle cx="8" cy="8" r="6" stroke-width="2.5"></circle>
              <circle cx="8" cy="8" r="6"></circle>
            </svg>
          </a>

          <a className={`slider__menu-item ${currSlide === 2 ? 'slider__menu-item--active' : ''}`} onClick = {() => tabSlide(2)}>Развитие
            <svg className='slider__menu-loader' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink">
              <circle cx="8" cy="8" r="6" stroke-width="2.5"></circle>
              <circle cx="8" cy="8" r="6"></circle>
            </svg>
          </a>
        </div>
        <div className="slider__tags">
          <div className={`slider__tags-slide ${currSlide === 0 ? 'slider__tags-slide--active' : ''}`}>
            <a href="" className="slider__tags-item">внедрение систем аналитики</a>
            <a href="" className="slider__tags-item">разметка</a>
            <a href="" className="slider__tags-item">GA 360</a>
            <a href="" className="slider__tags-item">веб-аналитика</a>
            <a href="" className="slider__tags-item">предпроектное исследование</a>
            <a href="" className="slider__tags-item">исследование пользовательского опыта</a>
            <a href="" className="slider__tags-item">юнит-анализ</a>
            <a href="" className="slider__tags-item">контентная стратегия</a>
          </div>

          <div className={`slider__tags-slide ${currSlide === 1 ? 'slider__tags-slide--active' : ''}`}>
            <a href="" className="slider__tags-item">веб-разработка PHP/Python/.Net</a>
            <a href="" className="slider__tags-item">мобильная-разработка IOS/android</a>
            <a href="" className="slider__tags-item">информационная безопасность</a>
            <a href="" className="slider__tags-item">высоконагруженные системы</a>
            <a href="" className="slider__tags-item">проектирование серверной архитектуры</a>
          </div>

          <div className={`slider__tags-slide ${currSlide === 2 ? 'slider__tags-slide--active' : ''}`}>
            <a href="" className="slider__tags-item">выделенная команда развития проета</a>
            <a href="" className="slider__tags-item">техническая и творческая поддержка</a>
            <a href="" className="slider__tags-item">SLA</a>
            <a href="" className="slider__tags-item">обеспечение отказаустойчивости</a>
            <a href="" className="slider__tags-item">юзабилити-тестирования</a>
            <a href="" className="slider__tags-item">А/Б тесты</a>
            <a href="" className="slider__tags-item">оценка результативности рекламных компаний</a>
          </div>
        </div>
      </div>
    </div>

  )
}