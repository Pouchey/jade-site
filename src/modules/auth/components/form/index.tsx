import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from '_components/button';
import Icon from '_components/icon';

import { FormProps, FormValues } from '_modules/auth/types';

import schema from './schema';
import {
  StyledForm,
  StyledIconButton,
  StyledInput,
  StyledLabel,
  StyledPassword,
} from './style';

export default ({ onSubmit }: FormProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const updateShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const { register, handleSubmit } = useForm<FormValues>({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    resolver: yupResolver(schema),
  });

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledLabel>Name :</StyledLabel>
      <StyledInput {...register('name')} placeholder="Entrez un nom" />
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
      <Button type="submit" color="secondary" size="huge" label="Login" />
    </StyledForm>
  );
};
