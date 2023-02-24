import React from 'react';

function PopupWithForm({ isOpen, name, title, children, buttonText, onClose }) {
  return (
    <div
      className={`popup ${isOpen ? 'popup_opened' : ''} popup_type_${name} `}
    >
      <div className="popup__container">
        <form className="popup__form form" name={name}>
          <h3 className="popup__title">{title}</h3>
          <fieldset className="popup__input-box">{children}</fieldset>
          <button className="popup__btn" type="submit">
            {buttonText}
          </button>
        </form>
        <button
          className="popup__close-icon"
          onClick={onClose}
          type="button"
          aria-label="закрыть"
        />
      </div>
    </div>
  );
}

export default PopupWithForm;
