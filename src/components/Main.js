import React from 'react';
import profileAvatarEdit from '../images/Vector_btn_edit_320.svg';
import { api } from '../utils/Api';
import { useState, useEffect } from 'react';
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getAllCards(), api.getUser()])
      .then(([cards, userData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cards);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div onClick={props.onEditAvatar} className="profile__avatar-wrapper">
          <img
            className="profile__avatar-edit"
            src={profileAvatarEdit}
            alt="иконка карандаша"
          />
          <img className="profile__avatar" src={userAvatar} alt="фото" />
        </div>
        <div className="profile__container">
          <h1 className="profile__name">{userName}</h1>
          <button
            onClick={props.onEditProfile}
            className="profile__btn-edit"
            type="button"
            aria-label="изменить"
          />
          <p className="profile__info">{userDescription}</p>
        </div>
        <button
          onClick={props.onAddPlace}
          className="profile__btn-add"
          type="button"
          aria-label="добавить"
        />
      </section>

      <section className="cards">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              title={card.name}
              likes={card.likes.length}
              src={card.link}
              card={card}
              onCardClick={props.onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
