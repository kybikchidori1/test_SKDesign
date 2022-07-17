import React, { useState } from "react";
import styled from "styled-components";
import InputText from "./UI/InputText";

const StyledInputBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 20px;
  p {
    display: none;
  }

  .error-text {
    font-size: 12px;
  }
`;

const InputBox = () => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [nameDirty, setNameDirty] = useState(false);
  const [nameError, setNameError] = useState("Обязательное поле");

  const [linkDirty, setLinkDirty] = useState(false);
  const [linkError, setLinkError] = useState("Обязательное поле");

  const [phoneDirty, setPhoneDirty] = useState(false);
  const [phoneError, setPhoneError] = useState("Обязательное поле");

  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState("Обязательное поле");

  const nameHandler = (e: any) => {
    setName(e.target.value);
    const regex = /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/;
    if (!regex.test(String(e.target.value).toLowerCase())) {
      setNameError("Некорректное имя");
    } else {
      setNameError("");
    }
  };

  const phoneHandler = (e: any) => {
    setPhone(e.target.value);
    const regex = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    if (!regex.test(String(e.target.value).toLowerCase())) {
      setPhoneError("Некорректный телефон");
    } else {
      setPhoneError("");
    }
  };

  const emailHandler = (e: any) => {
    setEmail(e.target.value);
    const regex = /^[\w-\\.]+@[\w-]+\.[a-z]{2,4}$/i;
    if (!regex.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректное e-mail");
    } else {
      setEmailError("");
    }
  };

  const linkHandler = (e: any) => {
    setName(e.target.value);
    const regex =
      /(^https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i;
    if (!regex.test(String(e.target.value).toLowerCase())) {
      setLinkError("Некорректная ссылка");
    } else {
      setLinkError("");
    }
  };

  const blurHandlerName = (e: any) => {
    switch (e.target.name) {
      case "name":
        setNameDirty(true);
        break;
    }
  };

  const blurHandlerLink = (e: any) => {
    switch (e.target.name) {
      case "link":
        setLinkDirty(true);
        break;
    }
  };

  const blurHandlerPhone = (e: any) => {
    switch (e.target.name) {
      case "phone":
        setPhoneDirty(true);
        break;
    }
  };

  const blurHandlerEmail = (e: any) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
    }
  };

  return (
    <>
      <StyledInputBox>
        <div>
          <span className="details">Ваше имя *</span>
          <InputText
            value={name}
            name="name"
            placeholder="Иван"
            type="text"
            width="180px"
            onBlur={(e: any) => blurHandlerName(e)}
            onChange={(e: any) => nameHandler(e)}
          />
          {nameDirty && nameError && (
            <div className="error-text" style={{ color: "red" }}>
              {nameError}
            </div>
          )}
        </div>
        <div>
          <span className="details">Номер телефона *</span>
          <InputText
            name="phone"
            type="text"
            placeholder="+7 (000) 000-00-00"
            width="180px"
            onBlur={(e: any) => blurHandlerPhone(e)}
            onChange={(e: any) => phoneHandler(e)}
          />
          {phoneDirty && phoneError && (
            <div className="error-text" style={{ color: "red" }}>
              {phoneError}
            </div>
          )}
        </div>
      </StyledInputBox>

      <StyledInputBox>
        <div>
          <span className="details">E-mail *</span>
          <InputText
            name="email"
            type="text"
            placeholder="example@skdesign.ru"
            width="180px"
            onBlur={(e: any) => blurHandlerEmail(e)}
            onChange={(e: any) => emailHandler(e)}
          />
          {emailDirty && emailError && (
            <div className="error-text" style={{ color: "red" }}>
              {emailError}
            </div>
          )}
        </div>
        <div>
          <span className="details">Ссылка на профиль *</span>
          <InputText
            name="link"
            type="text"
            placeholder="instagram.com/skd..."
            width="180px"
            onBlur={(e: any) => blurHandlerLink(e)}
            onChange={(e: any) => linkHandler(e)}
          />
          {linkDirty && linkError && (
            <div className="error-text" style={{ color: "red" }}>
              {linkError}
            </div>
          )}
        </div>
      </StyledInputBox>
    </>
  );
};

export default InputBox;
