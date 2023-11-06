import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useAuthContext } from '_modules/auth/hooks/useContext';
import { useFetchMe } from '_modules/me/hooks/useServices';

import Content from './Content';

const Admin = React.memo(() => {
  useFetchMe();

  const { state } = useAuthContext();
  const { pathname } = useLocation();

  if (!state?.isLogged)
    return <Navigate to="/login" state={{ from: pathname }} />;

  return <Content />;
});

export default Admin;
