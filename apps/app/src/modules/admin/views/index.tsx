import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useAuthContext } from '_modules/auth/hooks/useContext';
import { useFetchMe } from '_modules/me/hooks/useServices';

import Content from './Content';

const Admin = React.memo(() => {
  const { state, dispatch } = useAuthContext();
  const { isError } = useFetchMe();

  useEffect(() => {
    if (isError) dispatch({ type: 'disconnect' });
  }, [isError, dispatch]);

  const { pathname } = useLocation();

  if (!state?.isLogged)
    return <Navigate to="/login" state={{ from: pathname }} replace={true} />;

  return <Content />;
});

export default Admin;
