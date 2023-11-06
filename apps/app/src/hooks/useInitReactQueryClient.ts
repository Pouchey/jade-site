import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

export default () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.setDefaultOptions({
      queries: {
        refetchOnWindowFocus: false,
        retry: 0,
      },
    });
  }, []);
};
