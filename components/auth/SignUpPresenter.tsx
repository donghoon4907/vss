import React, { FC } from "react";
import styled from "styled-components";
import { FormWrapper, Label, InputWrapper } from "../common/Form";
import Input from "../common/Input";
import Button from "../common/Button";
import Loader from "../common/Loader";
import { Thumbnail } from "../icon";
import { UseInputProps } from "../../hooks";

const UploadWrapper = styled.div`
  ${props => props.theme.whiteBox}
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;

  & img {
    width: 100%;
    height: 100%;
  }
`;

type Props = {
  loading: boolean;
  signUpLoading: boolean;
  nickname: UseInputProps;
  email: UseInputProps;
  pwd: UseInputProps;
  confirmPwd: string;
  preview: string;
  fileEl: any;
  confirmPwdEl: any;
  onChangePreview: any;
  onChangeConfirmPwd: any;
  onClickUpload: any;
  onSubmit: any;
};

const SignUpPresenter: FC<Props> = ({
  loading,
  signUpLoading,
  nickname,
  email,
  pwd,
  confirmPwd,
  preview,
  fileEl,
  confirmPwdEl,
  onChangePreview,
  onChangeConfirmPwd,
  onClickUpload,
  onSubmit
}) => {
  return (
    <FormWrapper>
      {(loading || signUpLoading) && <Loader />}
      <form onSubmit={onSubmit}>
        <UploadWrapper onClick={onClickUpload}>
          {preview ? (
            <img src={preview} alt="avatar" title="변경하려면 클릭하세요." />
          ) : (
            <Thumbnail style={{ width: 100, height: 50 }} />
          )}

          <input
            type="file"
            onChange={onChangePreview}
            ref={fileEl}
            hidden
            accept="image/jpg, image/jpeg, image/png"
          />
        </UploadWrapper>
        <InputWrapper>
          <Label htmlFor="email" val={email.value}>
            이메일
          </Label>
          <Input type="email" placeholder="이메일" name="email" {...email} />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="password" val={pwd.value}>
            암호
          </Label>
          <Input type="password" placeholder="암호" name="password" {...pwd} />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="conform_password" val={confirmPwd}>
            암호 확인
          </Label>
          <Input
            type="password"
            placeholder="암호 확인"
            name="conform_password"
            value={confirmPwd}
            onChange={onChangeConfirmPwd}
            ref={confirmPwdEl}
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="nickname" val={nickname.value}>
            닉네임
          </Label>
          <Input placeholder="닉네임" name="nickname" {...nickname} />
        </InputWrapper>
        <Button text="회원가입" />
      </form>
    </FormWrapper>
  );
};

export default SignUpPresenter;