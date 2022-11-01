export interface CounterProps {
  count: number;
  requested?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export type CounterElement = {
  requested?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};
