import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import Button from '_components/button';
import Icon from '_components/icon';

import { TAuthForm } from '_modules/auth/types/form';

import schema from './schema';
import {
  StyledForm,
  StyledIconButton,
  StyledInput,
  StyledLabel,
  StyledPassword,
} from './style';

interface Props {
  isLoading: boolean;
  onSubmit: SubmitHandler<TAuthForm>;
}

const AuthForm = ({ isLoading, onSubmit }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const updateShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const { register, handleSubmit } = useForm<TAuthForm>({
    resolver: yupResolver(schema),
  });

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledLabel>Email :</StyledLabel>
      <StyledInput
        {...register('email')}
        placeholder="Entrez une adresse mail"
      />
      <StyledLabel>Password :</StyledLabel>
      <StyledPassword>
        <StyledInput
          {...register('password')}
          type={showPassword ? 'text' : 'password'}
          placeholder="Entrez un mot de passe"
        />
        <StyledIconButton onClick={updateShowPassword}>
          <Icon
            glyph={showPassword ? 'eye' : 'eyeSlash'}
            size={24}
            color="green2"
          />
        </StyledIconButton>
      </StyledPassword>
      <Button
        isLoading={isLoading}
        type="submit"
        color="secondary"
        size="huge"
        label="Login"
      />
    </StyledForm>
  );
};

export default AuthForm;
