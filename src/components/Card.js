import React from 'react';

function Card({ card, src, title, likes, handleCardClick, onCardClick }) {
  function handleCardClick() {
    onCardClick(card);
  }
  return (
    <li className="card">
      <button
        className="card__trash"
        type="button"
        aria-label="удалить"
      ></button>
      <img
        className="card__img"
        src={src}
        alt={title}
        onClick={handleCardClick}
      />
      <div className="card__caption">
        <h2 className="card__title">{title}</h2>
        <div className="card__count-wrapper">
          <button
            className="card__btn"
            type="button"
            aria-label="нравится"
          ></button>
          <p className="card__count-like">{likes}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
