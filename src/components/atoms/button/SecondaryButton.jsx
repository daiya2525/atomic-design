import styled from "styled-components";
import { BaseButtonStyle } from "./BaseButtonStyle";

export const SecondaryButton = (props) => {
  const { children, onClick } = props;

  return <SButton onClick={onClick}>{children}</SButton>;
};

const SButton = styled(BaseButtonStyle)`
  background-color: #11999e;
`;
