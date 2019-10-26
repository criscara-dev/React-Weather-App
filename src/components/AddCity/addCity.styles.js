import styled from "styled-components";

const borderRadius = "5px";

export const Input = styled.input`
  height: 32px;
  width: 150px;
  border-radius: ${borderRadius};
  font-size: 24px;
  margin-right: 24px;
`;

export const Container = styled.div``;

export const FormCitySearch = styled.form`
  display: flex;
`;

export const Button = styled.button`
  border-radius: ${borderRadius};
  background: ${props => (props.alt ? "white" : "#333")};
  color: ${props => (props.alt ? "black" : "white")};
`;
