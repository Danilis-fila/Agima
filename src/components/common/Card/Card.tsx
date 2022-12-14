import React from "react";
import './Card.scss'


interface ICard {
  title:string, 
  views:number,
  im:string,
  award:boolean
}

export default function Card({title, views, im, award}:ICard) {
  return (
    <div className="card">
      <div className="card__wrap">
        <div className="card__inner">
          <div className="video">
            <img className="video__img" src={im} alt=""></img>
            <span className="video__counter">
              <svg height="40px" alignmentBaseline="central">
                <path
                  d="M9.99998 4.27283C8.49542 4.27283 7.27271 5.49554 7.27271 7.0001C7.27271 8.50466 8.49542 9.72737 9.99998 9.72737C11.5045 9.72737 12.7272 8.50466 12.7272 7.0001C12.7272 5.49554 11.5045 4.27283 9.99998 4.27283Z"
                  fill="white"></path>
                <path
                  d="M10 0.182007C5.45455 0.182007 1.57274 3.00925 0 7.00019C1.57274 10.9911 5.45455 13.8184 10 13.8184C14.55 13.8184 18.4273 10.9911 20 7.00019C18.4273 3.00925 14.55 0.182007 10 0.182007ZM10 11.5456C7.49093 11.5456 5.45455 9.50924 5.45455 7.00015C5.45455 4.49106 7.49093 2.45472 10 2.45472C12.5091 2.45472 14.5455 4.4911 14.5455 7.00019C14.5455 9.50929 12.5091 11.5456 10 11.5456Z"
                  fill="white"></path>
              </svg>
              {views}
            </span>
            {
              award 
              ?
              <span className="card__awards">
                <img src='https://www.agima.ru/local/markup/build/assets/img/temp/award.png' alt=""></img>
                <span>1</span>
              </span>
              :
              ''
            }
          </div>
        </div>
        <a className="card__title" href="#">{title}</a>
      </div>
    </div>
  )
}