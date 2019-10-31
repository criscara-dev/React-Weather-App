import React from "react";
import styled from "styled-components";

const AppTitle = () => {
  const Title = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin: 1rem 0;
    font-size: 36px;
    font-weight: 300;
    color: "#110E3C";
  `;

  return (
    <Title>
      <div>
        Weather <span style={{ fontWeight: "700" }}>Forecast</span>
      </div>
    </Title>
  );
};

export default AppTitle;
