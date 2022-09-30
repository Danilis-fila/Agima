import React from "react";
import Card from "../../common/Card/Card";
import Video from "../../common/Video/Video";
import './PromoProjects.scss'

export default function PromoProjects() {
  return (
    <div className="promo-projects">
      <div className="promo-project promo-project__indents" data-scroll>
        <div className="promo-project__wrap">
          <h2 className="promo-project__title">Работы</h2>
          <a className="promo-project__text" href="#">«Пятёрочка» продуктовые команды</a>
        </div>

        <Video
          video="https://www.agima.ru/upload/iblock/ae4/ae442b3ac0fd9ea598b5633efb5138d5.jpg"
          views={2358}
          awards={false}
          awardsCount={0}
        ></Video>
      </div>

      <div className="promo-project promo-project__indents" data-scroll>
        <Card 
          title='Мобильное приложение «СберСпасибо»'
          views={8087}
          im='https://www.agima.ru/upload/iblock/a4d/a4d836e56a7532ed47fe200fe08096df.png'
          award={true}
        ></Card>

        <Card 
          title="Мобильное приложение O'STIN"
          views={5144}
          im='https://www.agima.ru/upload/iblock/f1e/f1e651cc71f429adff6c90ab1a22ddbb.jpg'
          award={false}
        ></Card>

        <Card 
          title="Чат-бот для сервиса услуг"
          views={190}
          im='https://www.agima.ru/upload/iblock/4d8/4d88d68465de1ec6c36ce1ec440e5faa.png'
          award={false}
        ></Card>
      </div>

      <div className="promo-project promo-project__indents" data-scroll>
        <Video
          video="https://www.agima.ru/upload/iblock/2be/2be681e5a20c65651435ebbefab01e75.png"
          views={4122}
          awards={true}
          awardsCount={6}
        ></Video>
        <div className="promo-project__wrap">
          <a className="promo-project__text" href="#">Сервис для заботы о домашних питомцах Petstory</a>
        </div>
      </div>


      <div className="promo-project promo-project__indents" data-scroll>
        <Card 
          title="Помогаем развивать «Эльдорадо» в digital"
          views={4892}
          im='https://www.agima.ru/upload/iblock/71d/71d1999ecbaf5c6ae3a72ef921f08ae9.jpg'
          award={true}
        ></Card>
        
        <Card 
          title="Продуктовая аналитика в «Леруа Мерлен»"
          views={2827}
          im='https://www.agima.ru/upload/iblock/911/9118153239c0c4205305015ab439d1fd.jpg'
          award={true}
        ></Card>
        
        <Card 
          title="Сайт и приложение Mycar.kz"
          views={12672}
          im='https://www.agima.ru/upload/iblock/671/67159bbfebfbb60c41ca8642cd3b2444.jpg'
          award={true}
          ></Card>
      </div>

      <div className="promo-projects__button">
        <a className="button-read-more" href="#">Все проекты 
          <svg viewBox="0 0 38 12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <path
              d="M37.1093 6.53033C37.4022 6.23744 37.4022 5.76256 37.1093 5.46967L32.3363 0.696699C32.0434 0.403806 31.5685 0.403806 31.2756 0.696699C30.9828 0.989593 30.9828 1.46447 31.2756 1.75736L35.5183 6L31.2756 10.2426C30.9828 10.5355 30.9828 11.0104 31.2756 11.3033C31.5685 11.5962 32.0434 11.5962 32.3363 11.3033L37.1093 6.53033ZM0 6.75L36.5789 6.75V5.25L0 5.25L0 6.75Z">
            </path>
          </svg>
        </a>
      </div>
    </div>
  )
}