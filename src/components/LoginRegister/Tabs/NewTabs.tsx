import React from "react";
import styled from "styled-components";

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
`;

const Tab = styled.div<{ active: boolean }>`
  flex: 1;
  text-align: center;
  padding: 12px;
  cursor: pointer;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  border-bottom: ${(props) => (props.active ? "2px solid #2b5dff" : "none")};
  color: ${(props) => (props.active ? "#2b5dff" : "#555")};
`;

interface Props {
  currentTab: number;
  setCurrentTab: (tab: number) => void;
}

const NewTabs = ({ currentTab, setCurrentTab }: Props) => {
  return (
    <TabsContainer>
      <Tab active={currentTab === 0} onClick={() => setCurrentTab(0)}>
        Iniciar sesión
      </Tab>
      <Tab active={currentTab === 1} onClick={() => setCurrentTab(1)}>
        Registrarse
      </Tab>
    </TabsContainer>
  );
};

export default NewTabs;