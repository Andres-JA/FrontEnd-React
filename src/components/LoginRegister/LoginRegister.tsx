import React, { useContext } from "react";
import styled from "styled-components";
import NewTabs from "./Tabs/NewTabs";
import LoginForm from "./Forms/LoginForm";
import RegisterForm from "./Forms/RegisterForm";
import { Context as UserContext } from "../../context/UserContext";

const Container = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 30px;
  border: 1px solid #eee;
  border-radius: 8px;
`;

const LoginRegister = () => {
  const { currentTab, setCurrentTab } = useContext(UserContext);

  return (
    <Container>
      <NewTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab === 0 ? (
        <LoginForm />
      ) : (
        <RegisterForm onSuccess={() => setCurrentTab(0)} />
      )}
    </Container>
  );
};

export default LoginRegister;