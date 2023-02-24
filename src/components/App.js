import React from 'react';
import { useState } from 'react';
import '../App.css';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import Card from './Card';

function App() {
  //изменить аватар
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  //изменить профиль
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  //добавить место
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };
  const [selectedCard, setSelectedCard] = useState({ link: '' });
  const handleCardClick = (data) => {
    setSelectedCard(data);
  };

  //закрыть все попапы
  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ link: '' });
  };

  return (
    <div className="page">
      <div className="body">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          name="avatar-form"
          title="Обновить аватар"
          buttonText="Сохранить"
        >
          <input
            id="input-avatar"
            className="popup__input popup__input_type_avatar"
            type="url"
            name="link"
            autoComplete="off"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__input-error input-avatar-error" />
        </PopupWithForm>

        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          name="profile-form"
          title="Редактировать профиль"
          buttonText="Сохранить"
        >
          <input
            id="input-profileName"
            className="popup__input popup__input_type_name"
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Имя"
            minLength={2}
            maxLength={40}
            required
          />
          <span className="popup__input-error input-profileName-error" />
          <input
            id="input-profileInfo"
            className="popup__input popup__input_type_info"
            type="text"
            name="about"
            autoComplete="off"
            placeholder="Вид деятельности"
            minLength={2}
            maxLength={200}
            required
          />
          <span className="popup__input-error input-profileInfo-error" />
        </PopupWithForm>

        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          name="places-form"
          title="Новое место"
          buttonText="Создать"
        >
          <input
            id="input-place-name"
            className="popup__input popup__input_type_place"
            type="text"
            name="placeName"
            autoComplete="off"
            placeholder="Название"
            minLength={2}
            maxLength={30}
            required
          />
          <span className="popup__input-error input-place-name-error" />
          <input
            id="input-place-link"
            className="popup__input popup__input_type_link"
            type="url"
            name="placeLink"
            autoComplete="off"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__input-error input-place-link-error" />
        </PopupWithForm>

        <PopupWithForm name="conf-form" title="Вы уверены?" buttonText="Да" />
      </div>
    </div>
  );
}

export default App;
