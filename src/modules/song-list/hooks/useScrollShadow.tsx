import { useState } from 'react';

export default () => {
  const [scroll, setScroll] = useState(0);
  const onScroll = (event: React.UIEvent<HTMLDivElement>)=> setScroll(event.currentTarget.scrollTop);
  return [scroll, { onScroll }] as const; 
}

export type ScrollProps  = {
  scroll: number;
  onScroll: (event: React.UIEvent<HTMLDivElement>) => void;
};
