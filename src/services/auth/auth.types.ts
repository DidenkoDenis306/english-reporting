export interface ILoginRequestData {
  login: string;
  password: string;
}

export interface IRegisterRequestData {
  firstName: string;
  lastName: string;
  login: string;
  password: string;
  isSpecial: boolean;
}

export interface IAuthResponse {
  user: {
    id: number;
    login: string;
  };
  accessToken: string;
  refreshToken: string;
}
