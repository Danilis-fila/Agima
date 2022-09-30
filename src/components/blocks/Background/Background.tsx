import React, { useEffect } from "react";
import './Background.scss'

export default function Background() {
    
    useEffect(() => {
        const title = document.querySelector('.background__title');
        title!.classList.add('background__title--ready');

        // const ul = document.querySelector('.background__ul');
        // ul!.classList.add('background__ul--ready')

        const letters = document.querySelectorAll('.background__ul li');
        letters.forEach((element) => {
          element?.addEventListener('animationend', () => {
            (element as HTMLElement)!.style.color = '#202020'
          })
        })
      }, [])

    function autoScroll() {
        const topOffset2 = document.querySelector('.main__title');
        const topOffset = (document!.querySelector('.main__title') as HTMLElement)!.offsetHeight * 10 / 100;
        const elementPosition = topOffset2!.getBoundingClientRect().top;
        console.log(elementPosition)
        const offsetPosition = elementPosition + topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }

    return (
    <div className="background">
        <div className="background__title">
            <h1>Крупнейший интегратор <br />
                <ul className="background__ul background__ul--initial">
                    <li>d</li>
                    <li>i</li>
                    <li>g</li>
                    <li>i</li>
                    <li>t</li>
                    <li>a</li>
                    <li>l</li>
                    <li>‑</li>
                    <li>р</li>
                    <li>е</li>
                    <li>ш</li>
                    <li>е</li>
                    <li>н</li>
                    <li>и</li>
                    <li>й</li>
                </ul>
            </h1>
        </div>
        <div className="background__tags">
            <span className="background__tags-item"> web</span>
            <span className="background__tags-item"> mobile</span>
            <span className="background__tags-item"> analytics</span>
            <span className="background__tags-new"> ml</span>
        </div>
        <a className="background__img" id="background__img" onClick={() => autoScroll()}></a>
    </div>

    )
}