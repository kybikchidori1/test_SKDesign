import React, { FC } from "react";
import styled from "styled-components";
import logo from "../etc/img/logo.png";

const StyledTitle = styled.h1`
  color: #353238;
  font-size: 24px;
  line-height: 36px;
  font-weight: bold;
`;

const StyledSubTitle = styled.h2`
  color: #353238;
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
`;

const InfoBlock: FC = (props: any) => {
  return (
    <div>
      <div>
        <img src={logo} alt="" />
      </div>
      <StyledTitle>Оставьте заявку и станьте частью нашей команды</StyledTitle>
      <StyledSubTitle>
        Компания SK Design приглашает к взаимовыгодному сотрудничеству
        креативных дизайнеров, архитекторов и декораторов, дизайн-бюро и
        интерьерные студии — все, кто дизайн интерьера сделали своим призванием.
        Партнерство мы видим как доверительные отношения, основанные на
        честности реализации бизнес идей в сфере создания и продаж современной,
        качественной, удобной, функциональной и эксклюзивной мебели.
        Ознакомиться с проектами можете в нашем портфолио. Если Вы оформляете
        интерьеры жилых или коммерческих помещений — мы с радостью поможем Вам:
        составим уникальные условия сотрудничества, предоставим 3D модели
        (уточняйте у менеджеров) и разработаем коммерческое предложение к Вашему
        проекту или изображениям.
      </StyledSubTitle>
    </div>
  );
};

export default InfoBlock;
