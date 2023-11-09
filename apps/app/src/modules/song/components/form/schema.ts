import * as Yup from 'yup';

export default Yup.object().shape({
  id: Yup.number(),
  song: Yup.string().required('Song is required'),
  artist: Yup.string().required('Artist is required'),
  isVisible: Yup.boolean().required('Visibiliy is required'),
});
