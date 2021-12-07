import styled from "styled-components";
import { BaseButtonStyle } from "./BaseButtonStyle";

export const PrimaryButton = (props) => {
  const { children } = props;

  return <SButton>{children}</SButton>;
};

const SButton = styled(BaseButtonStyle)`
  background-color: #40514e;
`;
