import React, { FC } from "react";
import styled from "styled-components";

const StyledRegistrationForm = styled.h1`
color
`;

const RegistrationForm: FC = () => {
  return (
    <div className="container">
      <div className="title">Registration</div>
      <form action="#">
        <div className="user-details">
          <div className="input-box">
            <span className="details">Ваше имя *</span>
            <input type="text" placeholder="Иван" required />
          </div>

          <div className="input-box">
            <span className="details">Номер телефона *</span>
            <input type="text" placeholder="+7 (000) 000-00-00" required />
          </div>

          <div className="input-box">
            <span className="details">E-mail *</span>
            <input type="text" placeholder="example@skdesign.ru" required />
          </div>

          <div className="input-box">
            <span className="details">Ссылка на профиль *</span>
            <input type="text" placeholder="instagram.com/skdesign" required />
          </div>

          <div className="select-box">
            <select className="details">
              <option>Выберите город *</option>
            </select>
          </div>

          <div className="input-box">
            <span className="details">Название организации/студии</span>
            <input type="text" placeholder="SK Design" required />
          </div>

          <button>Отправить заявку</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
