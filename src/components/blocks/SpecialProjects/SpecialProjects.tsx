import React, { useState } from "react";
import './SpecialProjects.scss'

export default function SpecialProjects() {
  const[currentSlide, setCurrentSlide] = useState(0)
  const slides = document.querySelectorAll('.special-projects__slide')
  const links = document.querySelectorAll('.special-projects__link')

  function SlideReplacement(num:number) {
    setCurrentSlide(num)

    slides.forEach((item) => {
      if (slides[num] === item) {
        item.classList.add('special-projects__opacity')
      } else {
        item.classList.remove('special-projects__opacity')
      }
    })

    links.forEach((item) => {
      if (links[num] === item) {
        item.classList.add('special-projects__link--active')
      } else {
        item.classList.remove('special-projects__link--active')
      }
    })
  }

  return (
    <div className="special-projects">
      <h2 className="special-projects__top-title" data-scroll>Развиваем рынок digital-услуг и интернет-отрасль при помощи спецпроектов
      </h2>

      <div className="special-projects__slides" data-scroll onClick={() => currentSlide === 4 ? SlideReplacement(0) : SlideReplacement(currentSlide+1)}>
        <div className="special-projects__slide special-projects__opacity">
          <div className="special-projects__slide-wrap">
            <h3 className="special-projects__slide-title1">Наши спецпроекты</h3>
            <h3 className="special-projects__slide-title2">AGIMA<span>.AI</span></h3>
            <div className="special-projects__slide-description"> Объединяя силу двух команд, мы создаем новые
              возможности для успешных решений в области машинного обучения (ML) и искусственного интеллекта (AI)
              <a className="special-projects__slide-link" href="#">Узнать больше
                <svg viewBox="0 0 38 12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <path
                    d="M37.1093 6.53033C37.4022 6.23744 37.4022 5.76256 37.1093 5.46967L32.3363 0.696699C32.0434 0.403806 31.5685 0.403806 31.2756 0.696699C30.9828 0.989593 30.9828 1.46447 31.2756 1.75736L35.5183 6L31.2756 10.2426C30.9828 10.5355 30.9828 11.0104 31.2756 11.3033C31.5685 11.5962 32.0434 11.5962 32.3363 11.3033L37.1093 6.53033ZM0 6.75L36.5789 6.75V5.25L0 5.25L0 6.75Z">
                  </path>
                </svg>
              </a>
            </div>
          </div>
          <div className="special-projects__slide-inner">
            <div className="special-projects__slide-video"
              style={{backgroundImage: 'url(https://www.agima.ru/upload/resize_cache/iblock/98f/1100_610_0/98f4cd9dd81963497b240cbae395d765.jpg)'}}>
            </div>
            <div className="special-projects__slide-quote">
              <div className="special-projects__slide-text" data-scroll>Машинное обучение — это важный шаг в развитии человечества. Он
                открывает невероятное количество возможностей. Именно поэтому несколько лет назад мы создали компанию, которая занимается только 
                этими задачами. Сейчас она объединилась с AGIMA, чтобы сделать сильный рывок вперед.</div>
              <div className="special-projects__slide-author" data-scroll>
                <div className="special-projects__slide-photo"
                  style={{background: 'url(https://www.agima.ru/upload/resize_cache/uf/535/68_68_2/535839c504689f9edb7fe2d1c3e693c9.jpg) no-repeat'}}
                ></div>
                <div className="special-projects__slide-info">
                  <h2 className="special-projects__slide-name">Андрей Татаринов</h2>
                  <h2 className="special-projects__slide-job">Сооснователь AGIMA.AI</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="special-projects__slide">
          <div className="special-projects__slide-wrap">
            <h3 className="special-projects__slide-title1">Наши спецпроекты</h3>
            <h3 className="special-projects__slide-title2">AGIMA<span>.boost</span></h3>
            <div className="special-projects__slide-description">Помогаем перспективным агентствам и студиям стать лидерами в своем сегменте</div>
            <div>
              <a className="special-projects__slide-link" href="#">Узнать больше
                <svg viewBox="0 0 38 12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <path
                    d="M37.1093 6.53033C37.4022 6.23744 37.4022 5.76256 37.1093 5.46967L32.3363 0.696699C32.0434 0.403806 31.5685 0.403806 31.2756 0.696699C30.9828 0.989593 30.9828 1.46447 31.2756 1.75736L35.5183 6L31.2756 10.2426C30.9828 10.5355 30.9828 11.0104 31.2756 11.3033C31.5685 11.5962 32.0434 11.5962 32.3363 11.3033L37.1093 6.53033ZM0 6.75L36.5789 6.75V5.25L0 5.25L0 6.75Z">
                  </path>
                </svg>
              </a>
            </div>
          </div>
          <div className="special-projects__slide-inner">
            <div className="special-projects__slide-video"
              style={{backgroundImage: 'url(https://www.agima.ru/upload/iblock/5ff/5ff9420907d9e18a84e3d9919a22056e.jpg)'}}>
            </div>
            <div className="special-projects__slide-quote">
              <div className="special-projects__slide-text" data-scroll>AGIMA уже давно передает лиды молодым студиям, помогает им с продажами и PR. Boost — это еще более плотная интеграция AGIMA с перспективными игроками рынка.</div>
              <div className="special-projects__slide-author" data-scroll>
                <div className="special-projects__slide-photo" 
                  style={{background: 'url(https://www.agima.ru/upload/resize_cache/uf/866/68_68_2/866687c83dcc06c056cc6cafbf7acaac.jpg) no-repeat'}}
                ></div>
                <div className="special-projects__slide-info">
                  <h2 className="special-projects__slide-name">Александр Бондарев</h2>
                  <h2 className="special-projects__slide-job">Основатель AGIMA</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="special-projects__slide">
          <div className="special-projects__slide-wrap">
            <h3 className="special-projects__slide-title1">Наши спецпроекты</h3>
            <h3 className="special-projects__slide-title2">AGIMA<span>.executive</span></h3>
            <div className="special-projects__slide-description"> У тебя есть digital-агентство, и у тебя есть какие-то проблемы. Мы знаем, как решить 90% из них
              <a className="special-projects__slide-link" href="#">Узнать больше
                <svg viewBox="0 0 38 12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <path
                    d="M37.1093 6.53033C37.4022 6.23744 37.4022 5.76256 37.1093 5.46967L32.3363 0.696699C32.0434 0.403806 31.5685 0.403806 31.2756 0.696699C30.9828 0.989593 30.9828 1.46447 31.2756 1.75736L35.5183 6L31.2756 10.2426C30.9828 10.5355 30.9828 11.0104 31.2756 11.3033C31.5685 11.5962 32.0434 11.5962 32.3363 11.3033L37.1093 6.53033ZM0 6.75L36.5789 6.75V5.25L0 5.25L0 6.75Z">
                  </path>
                </svg>
              </a>
            </div>
          </div>
          <div className="special-projects__slide-inner">
            <div className="special-projects__slide-video"
              style={{backgroundImage: 'url(https://www.agima.ru/upload/resize_cache/iblock/e4a/1100_610_0/e4a1a44ed2106db93764ccca54a8093d.jpg)'}}>
            </div>
            <div className="special-projects__slide-quote">
              <div className="special-projects__slide-text" data-scroll>Процессы производства стандартизированы, и есть много кейсов их успешного 
              применения. При реальном внедрении встречаются детали, мешающие масштабированию агентства. Обсудим не только общие принципы, но и решим 
              блокеры внедрения подходов для вашей организации.</div>
              <div className="special-projects__slide-author" data-scroll>
                <div className="special-projects__slide-photo" 
                  style={{background: 'url(https://www.agima.ru/upload/resize_cache/uf/406/68_68_2/40632c64b84959fec5a633210334067a.jpg) no-repeat'}}
                ></div>
                <div className="special-projects__slide-info">
                  <h2 className="special-projects__slide-name">Виталий Дощенко</h2>
                  <h2 className="special-projects__slide-job">Коммерчиский директор</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="special-projects__slide">
          <div className="special-projects__slide-wrap">
            <h3 className="special-projects__slide-title1">Наши спецпроекты</h3>
            <h3 className="special-projects__slide-title2">AGIMA<span>.partners</span></h3>
            <div className="special-projects__slide-description">Если сами не можем взяться за реализацию вашего проекта, мы предложим вам на выбор подрядчиков. Мы полностью контролируем ход их работ и отвечаем за результат
              <a className="special-projects__slide-link" href="#">Узнать больше
                <svg viewBox="0 0 38 12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <path
                    d="M37.1093 6.53033C37.4022 6.23744 37.4022 5.76256 37.1093 5.46967L32.3363 0.696699C32.0434 0.403806 31.5685 0.403806 31.2756 0.696699C30.9828 0.989593 30.9828 1.46447 31.2756 1.75736L35.5183 6L31.2756 10.2426C30.9828 10.5355 30.9828 11.0104 31.2756 11.3033C31.5685 11.5962 32.0434 11.5962 32.3363 11.3033L37.1093 6.53033ZM0 6.75L36.5789 6.75V5.25L0 5.25L0 6.75Z">
                  </path>
                </svg>
              </a>
            </div>
          </div>
          <div className="special-projects__slide-inner">
            <div className="special-projects__slide-video"
              style={{backgroundImage: 'url(https://www.agima.ru/upload/iblock/3b7/3b79627c716814e274b97970628b08ec.jpg)'}}>
            </div>
            <div className="special-projects__slide-quote">
              <div className="special-projects__slide-text" data-scroll>К нам поступает больше лидов, чем мы можем взять. И хотя наш приоритет — 
              большие и долгосрочные проекты, мы не любим отказывать. Поэтому мы создали Клуб партнеров AGIMA. В него входят 250 студий и агентств 
              разного профиля, которыe мы тщательно отбираем и сертифицируем.</div>
              <div className="special-projects__slide-author" data-scroll>
                <div className="special-projects__slide-photo" 
                  style={{background: 'url(https://www.agima.ru/upload/resize_cache/uf/e81/68_68_2/e81ef117cae38131ea6fba449b3e442f.jpg) no-repeat'}}
                ></div>
                <div className="special-projects__slide-info">
                  <h2 className="special-projects__slide-name">Константин Мовчан</h2>
                  <h2 className="special-projects__slide-job">Руководитель проектного офиса, директор бизнес-юнита</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="special-projects__slide">
          <div className="special-projects__slide-wrap">
            <h3 className="special-projects__slide-title1">Наши спецпроекты</h3>
            <h3 className="special-projects__slide-title2">RUNIT<span>.digital</span></h3>
            <div className="special-projects__slide-description">Let the sport drive your work! Крупнейший спортивный фестиваль IT-отрасли, вошедший в Книгу рекордов России
              <a className="special-projects__slide-link" href="#">Узнать больше
                <svg viewBox="0 0 38 12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <path
                    d="M37.1093 6.53033C37.4022 6.23744 37.4022 5.76256 37.1093 5.46967L32.3363 0.696699C32.0434 0.403806 31.5685 0.403806 31.2756 0.696699C30.9828 0.989593 30.9828 1.46447 31.2756 1.75736L35.5183 6L31.2756 10.2426C30.9828 10.5355 30.9828 11.0104 31.2756 11.3033C31.5685 11.5962 32.0434 11.5962 32.3363 11.3033L37.1093 6.53033ZM0 6.75L36.5789 6.75V5.25L0 5.25L0 6.75Z">
                  </path>
                </svg>
              </a>
            </div>
          </div>
          <div className="special-projects__slide-inner">
            <div className="special-projects__slide-video"
              style={{backgroundImage: 'url(https://www.agima.ru/upload/resize_cache/iblock/fc8/1100_610_0/fc8e2806baa492fff8ba8513760bb570.jpg)'}}>
            </div>
            <div className="special-projects__slide-quote">
              <div className="special-projects__slide-text" data-scroll>Мы верим, что проходит пора нетворкинга на afterparty отраслевых мероприятий. 
              С ростом популярности спорта и бега в частности, наступает время совсем других коммуникаций, в основе которых здоровье, 
              энергия, целеустремленность и воля к победе.</div>
              <div className="special-projects__slide-author" data-scroll>
                <div className="special-projects__slide-photo" 
                  style={{background: 'url(https://www.agima.ru/upload/resize_cache/uf/535/68_68_2/535839c504689f9edb7fe2d1c3e693c9.jpg) no-repeat'}}
                ></div>
                <div className="special-projects__slide-info">
                  <h2 className="special-projects__slide-name">Андрей Татаринов</h2>
                  <h2 className="special-projects__slide-job">Сооснователь AGIMA.AI</h2>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>

      <ul className="special-projects__links">
        <li className="special-projects__link special-projects__link--active" onClick={() => SlideReplacement(0)}>ai</li>
        <li className="special-projects__link" onClick={() => SlideReplacement(1)}>boost</li>
        <li className="special-projects__link" onClick={() => SlideReplacement(2)}>executive</li>
        <li className="special-projects__link" onClick={() => SlideReplacement(3)}>partners</li>
        <li className="special-projects__link" onClick={() => SlideReplacement(4)}>runit</li>
      </ul>
    </div>
  )
}