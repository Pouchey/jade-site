import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';

import Button from '_components/button';
import Icon from '_components/icon';
import Switch from '_components/switch';

import FileImage from '_modules/file/components/image';
import { TSongForm } from '_modules/song/types/form';

import { TFile } from '_shared/file/types';

import schema from './schema';
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledIconContainer,
  StyledImageContainer,
  StyledDeleteText,
  StyledSwitchContainer,
} from './style';

interface Props {
  isLoading: boolean;
  onSubmit: SubmitHandler<TSongForm>;
  onClose: () => void;
  onDelete?: (id?: number) => void;
  defaultValues?: TSongForm & { icon?: TFile };
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
      song: '',
      artist: '',
      isVisible: true,
    },
  });

  const { register, handleSubmit, watch, setValue } = methods;

  const id = watch('id');
  const isVisible = watch('isVisible');

  const handleImageChange = (file: File | null) => {
    if (!file) return;
    setValue('file', file);
  };

  const handleDelete = () => {
    if (!onDelete) return;
    onDelete(id);
  };

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledIconContainer onClick={onClose}>
          <Icon glyph="close" size={50} color="white" />
        </StyledIconContainer>
        <StyledImageContainer>
          <FileImage
            defaultValue={defaultValues?.icon}
            onChange={handleImageChange}
          />
        </StyledImageContainer>
        <StyledLabel>Song</StyledLabel>
        <StyledInput {...register('song')} placeholder="Song title" />
        <StyledLabel>Artist</StyledLabel>
        <StyledInput {...register('artist')} placeholder="Artist name" />
        <StyledSwitchContainer>
          <StyledLabel>Visible</StyledLabel>
          <Switch
            key={id}
            {...register('isVisible')}
            value={isVisible}
            onChange={(val) => setValue('isVisible', val)}
          />
        </StyledSwitchContainer>
        <Button
          isLoading={isLoading}
          type="submit"
          color="secondary"
          size="huge"
          label={defaultValues ? 'UPDATE' : 'ADD'}
        />
        <StyledDeleteText onClick={handleDelete}>Delete song</StyledDeleteText>
      </StyledForm>
    </FormProvider>
  );
};

export default SongForm;
