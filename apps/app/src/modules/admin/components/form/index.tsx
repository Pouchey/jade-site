import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';

import Button from '_components/button';
import Icon from '_components/icon';

import { TSongForm } from '_modules/admin/types/form';

import schema from './schema';
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledImg,
  StyledIconContainer,
  StyledIconDiv,
} from './style';

interface Props {
  isLoading: boolean;
  onSubmit: SubmitHandler<TSongForm>;
}

const SongForm = ({ isLoading, onSubmit }: Props) => {
  const { register, handleSubmit } = useForm<TSongForm>({
    resolver: yupResolver(schema),
  });

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledImg src="" alt="Song cover" />
      <StyledIconContainer>
        <Icon glyph="close" size={50} color="white" />
        <Icon glyph="bin" size={35} color="red1" />
      </StyledIconContainer>
      <StyledLabel>Song</StyledLabel>
      <StyledInput {...register('song')} placeholder="Song title" />
      <StyledLabel>Artist</StyledLabel>
      <StyledInput {...register('artist')} placeholder="Artist name" />
      <StyledLabel>Image</StyledLabel>
      <StyledIconDiv>
        <Icon glyph="image" size={75} color="grey75" />
      </StyledIconDiv>
      <Button
        isLoading={isLoading}
        type="submit"
        color="secondary"
        size="huge"
        label="ADD"
      />
    </StyledForm>
  );
};

export default SongForm;
