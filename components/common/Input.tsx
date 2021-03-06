import React, { forwardRef, ChangeEvent, HTMLAttributes } from "react";
import styled from "styled-components";

const Container = styled.input`
  border: 0;
  border: ${props => props.theme.boxBorder};
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.theme.bgColor};
  width: 100%;
  height: 35px;
  padding: 0px 15px;
  font-size: 12px;

  &:focus {
    outline: none;
  }
`;

interface Props extends HTMLAttributes<HTMLInputElement> {
  /**
   * * Placeholder
   */
  placeholder?: string;
  /**
   * * Required
   */
  required?: boolean;
  /**
   * * Input Value
   */
  value: string;
  /**
   * * Handler for change value
   */
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  /**
   * * Input Type
   */
  type?: string;
  /**
   * * Name
   */
  name?: string;
  /**
   * * Autocomplete
   */
  autoComplete?: string;
}

/**
 * * 공통 input 컴포넌트
 *
 * @Component
 * @author frisk
 * @param props.onSubmit 로그인 요청 핸들러
 */
const Input = forwardRef<HTMLInputElement, Props>((props, ref) => (
  <Container ref={ref} {...props} />
));

export default Input;
