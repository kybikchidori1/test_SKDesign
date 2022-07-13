import React, { FC } from "react";
import styled from "styled-components";
import InfoBlock from "./components/InfoBlock";
import RegistrationForm from "./components/RegistrationForm";

const AppWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: #ffffff;
`;

const App: FC = () => {
  return (
    <AppWrapper>
      <InfoBlock />
      <RegistrationForm />
    </AppWrapper>
  );
};

export default App;
