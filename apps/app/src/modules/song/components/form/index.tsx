import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';

import Button from '_components/button';
import Icon from '_components/icon';
import InputFile from '_components/input-file';

import { TSongForm } from '_modules/song/types/form';

import schema from './schema';
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledImg,
  StyledIconContainer,
} from './style';

interface Props {
  isLoading: boolean;
  onSubmit: SubmitHandler<TSongForm>;
  onClose: () => void;
  defaultValues?: TSongForm;
}

const SongForm = ({ isLoading, onSubmit, onClose, defaultValues }: Props) => {
  const methods = useForm<TSongForm>({
    resolver: yupResolver(schema),
    defaultValues: defaultValues || {
      song: '',
      artist: '',
      image: { url: '', alt: '' },
    },
  });

  const { register, handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledImg
          src={defaultValues?.image.url}
          alt={defaultValues?.image.alt}
        />
        <StyledIconContainer>
          <div onClick={onClose}>
            <Icon glyph="close" size={50} color="white" />
          </div>
          <Icon glyph="delete" size={45} color="red1" />
        </StyledIconContainer>
        <StyledLabel>Song</StyledLabel>
        <StyledInput {...register('song')} placeholder="Song title" />
        <StyledLabel>Artist</StyledLabel>
        <StyledInput {...register('artist')} placeholder="Artist name" />
        <StyledLabel>Image</StyledLabel>
        <InputFile />
        <Button
          isLoading={isLoading}
          type="submit"
          color="secondary"
          size="huge"
          label="ADD"
        />
      </StyledForm>
    </FormProvider>
  );
};

export default SongForm;
