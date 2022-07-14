import React, { FC } from "react";
import styled from "styled-components";
import InfoBlock from "./components/InfoBlock";
import RegistrationForm from "./components/RegistrationForm";

const StyledAppWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem;
  background: #ffffff;
`;

const App: FC = () => {
  return (
    <StyledAppWrapper>
      <InfoBlock />
      <RegistrationForm />
    </StyledAppWrapper>
  );
};

export default App;
