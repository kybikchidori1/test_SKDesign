import React from "react";
import styled from "styled-components";
import InputText from "./UI/InputText";

const StyledInputBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 20px;
`;

const InputBox = () => {
  return (
    <>
      <StyledInputBox>
        <div>
          <span className="details">Ваше имя *</span>
          <InputText placeholder="Иван" type="text" />
          {/* <span>Обязательное поле</span> */}
        </div>
        <div>
          <span className="details">Номер телефона *</span>
          <InputText type="text" placeholder="+7 (000) 000-00-00" />
        </div>
      </StyledInputBox>
      <StyledInputBox>
        <div>
          <span className="details">E-mail *</span>
          <InputText type="text" placeholder="example@skdesign.ru" />
        </div>
        <div>
          <span className="details">Ссылка на профиль *</span>
          <InputText type="text" placeholder="instagram.com/skd..." />
        </div>
      </StyledInputBox>
    </>
  );
};

export default InputBox;
