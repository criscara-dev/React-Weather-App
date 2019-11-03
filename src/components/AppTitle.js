import React from "react";
import styled from "styled-components";

const AppTitle = () => {
  const Title = styled.div`
    text-align: center;
    margin: 1rem 0;
    font-size: 36px;
    font-weight: 300;
    color: "#110E3C";
  `;

  const Span = styled.span`
    font-weight: 700;
  `;

  return (
    <Title>
      <div>
        Weather <Span>Forecast</Span>
      </div>
    </Title>
  );
};

export default AppTitle;
