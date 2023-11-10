import { useRef } from 'react';

import useIntersectionObserver from '_hooks/useIntersectionObserver';

interface Props {
  children: React.ReactNode;
  fetchNext: () => void;
}
const LastItem = ({ children, fetchNext }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  if (isVisible) {
    fetchNext();
  }

  return <div ref={ref}>{children}</div>;
};

export default LastItem;
