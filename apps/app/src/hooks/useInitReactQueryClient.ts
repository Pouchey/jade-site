import { useEffect } from 'react';
import { useQueryClient } from 'react-query';

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
