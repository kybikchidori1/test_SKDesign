import React, { FC } from "react";
import styled from "styled-components";
import InputBox from "./InputBox";
import InputText from "./UI/InputText";

const StyledArea = styled.div`
  padding: 0 60px;
`;

const StyledRegistrationForm = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 30px;
  gap: 20px;
  background: #ffffff;
  box-shadow: 0px 5px 20px rgba(53, 50, 56, 0.14);
  border-radius: 8px;
  max-width: 440px;
  width: 440px;

  select {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px 13px;
    gap: 10px;
    width: 100%;
    margin-top: 20px;

    background: #ffffff;
    border-radius: 8px;
  }

  button {
    border: solid #e3e3e3;
    padding: 15px 13px;
    width: 100%;
    background: #e3e3e3;
    border-radius: 8px;
    margin-top: 20px;
  }

  span {
    position: relative;
    top: 10px;
    left: 10px;
    padding: 0px 5px;
    white-space: nowrap;
    user-select: none;
    display: inline-block;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0.25px;
    background: rgb(255, 255, 255);

    color: #828282;
  }

  .select-add {
    display: none;
  }
`;

const RegistrationForm: FC = () => {
  return (
    <StyledArea>
      <StyledRegistrationForm>
        <form action="#">
          <InputBox />
          <div className="select-box">
            <select className="details">
              <option>Выберите город *</option>
            </select>
          </div>
          <div className="input-box">
            <span className="details">Название организации/студии</span>
            <InputText
              className="input-skdesign"
              type="text"
              placeholder="SK Design"
              width="100%"
            />
          </div>
          <div className="select-add">
            <p>Показать дополнительные поля</p>
            <span className="details">Получатель</span>
            <InputText type="text" placeholder="ФИО" />
            <select>
              <option>Откуда узнали про нас?</option>
            </select>
          </div>
          <button>Отправить заявку</button>
        </form>
      </StyledRegistrationForm>
    </StyledArea>
  );
};

export default RegistrationForm;
