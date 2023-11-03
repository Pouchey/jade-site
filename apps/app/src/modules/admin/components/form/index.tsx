import { yupResolver } from '@hookform/resolvers/yup';

import { useForm, SubmitHandler } from 'react-hook-form';
import { StyledContainer } from './style';
import { TSongForm } from '_modules/admin/types/form';

import schema from './schema';

interface Props {
  isLoading: boolean;
  onSubmit: SubmitHandler<TSongForm>;
  defaultValues: TSongForm;
}


const SongForm = ({isLoading, onSubmit, defaultValues}: Props) => {

  const { register, handleSubmit } = useForm<TSongForm>({
    resolver: yupResolver(schema),
  });

  return <StyledContainer>Form</StyledContainer>;
};

export default SongForm;
