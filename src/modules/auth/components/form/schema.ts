import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string().required('Name is required'),
  password: Yup.string().required('Password is required'),
});
