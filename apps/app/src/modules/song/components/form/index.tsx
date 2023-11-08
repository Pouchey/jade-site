import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';

import Button from '_components/button';
import Icon from '_components/icon';
import Switch from '_components/switch';

import { TSongForm } from '_modules/song/types/form';

import schema from './schema';
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledImg,
  StyledIconContainer,
  StyledSwitchContainer,
  StyledDeleteText,
} from './style';

interface Props {
  isLoading: boolean;
  onSubmit: SubmitHandler<TSongForm>;
  onClose: () => void;
  onDelete?: (id?: number) => void;
  defaultValues?: TSongForm;
}

const SongForm = ({
  isLoading,
  onSubmit,
  onClose,
  onDelete,
  defaultValues,
}: Props) => {
  const methods = useForm<TSongForm>({
    resolver: yupResolver(schema),
    defaultValues: defaultValues || {
      id: 0,
      song: '',
      artist: '',
      image: { url: '', alt: '' },
    },
  });

  const { register, handleSubmit } = methods;

  let isVisible = true;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    isVisible = e.target.checked;
  };

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledImg
          src={defaultValues?.image?.url}
          alt={defaultValues?.image?.alt}
        />
        <StyledIconContainer>
          <div onClick={onClose}>
            <Icon glyph="close" size={50} color="white" />
          </div>
        </StyledIconContainer>
        <StyledLabel>Song</StyledLabel>
        <StyledInput {...register('song')} placeholder="Song title" />
        <StyledLabel>Artist</StyledLabel>
        <StyledInput {...register('artist')} placeholder="Artist name" />
        <StyledSwitchContainer>
          <StyledLabel>Visible</StyledLabel>
          <Switch value={isVisible} onChange={handleChange} />
        </StyledSwitchContainer>

        <Button
          isLoading={isLoading}
          type="submit"
          color="secondary"
          size="huge"
          label={defaultValues ? 'UPDATE' : 'ADD'}
        />
        {onDelete && (
          <StyledDeleteText onClick={() => onDelete(defaultValues?.id)}>
            Delete the song
          </StyledDeleteText>
        )}
      </StyledForm>
    </FormProvider>
  );
};

export default SongForm;
