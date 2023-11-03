export type TGetMeRequest = {
  email: string;
  password: string;
};

export type TGetMeResponse = {
  id: string;
  email: string;
  name: string;
};
