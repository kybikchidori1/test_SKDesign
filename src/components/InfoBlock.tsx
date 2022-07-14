import React, { FC } from "react";
import styled from "styled-components";
import logo from "../etc/img/logo.png";

const StyledInfoBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  justify-content: center;
`;

const StyledImgLogo = styled.div`
  margin-bottom: 40px;
`;

const StyledTitle = styled.h1`
  color: #353238;
  font-size: 24px;
  line-height: 36px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const StyledDescription = styled.p`
  color: #353238;
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
  margin-top: 21px;
`;

const InfoBlock: FC = (props: any) => {
  return (
    <StyledInfoBlock>
      <StyledImgLogo>
        <img src={logo} alt="" />
      </StyledImgLogo>
      <StyledTitle>Оставьте заявку и станьте частью нашей команды</StyledTitle>
      <StyledDescription>
        Компания SK Design приглашает к взаимовыгодному сотрудничеству
        креативных дизайнеров, архитекторов и декораторов, дизайн-бюро и
        интерьерные студии — все, кто дизайн интерьера сделали своим призванием.
      </StyledDescription>
      <StyledDescription>
        Партнерство мы видим как доверительные отношения, основанные на
        честности реализации бизнес идей в сфере создания и продаж современной,
        качественной, удобной, функциональной и эксклюзивной мебели.
      </StyledDescription>
      <StyledDescription>
        Ознакомиться с проектами можете в нашем портфолио. Если Вы оформляете
        интерьеры жилых или коммерческих помещений — мы с радостью поможем Вам:
        составим уникальные условия сотрудничества, предоставим 3D модели
        (уточняйте у менеджеров) и разработаем коммерческое предложение к Вашему
        проекту или изображениям.
      </StyledDescription>
    </StyledInfoBlock>
  );
};

export default InfoBlock;
