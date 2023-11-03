import * as Yup from 'yup';

export default Yup.object().shape({
  song: Yup.string().required('Song is required'),
  artist: Yup.string().required('Artist is required'),
  image: Yup.string()

});
