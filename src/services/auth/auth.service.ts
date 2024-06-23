import { AxiosResponse } from 'axios';
import {
  IAuthResponse,
  ILoginRequestData,
  IRegisterRequestData,
} from '@repo/src/services/auth/auth.types';
import { http } from '@repo/src/http/http-client';
import { APIRoutes } from '@repo/constants';

class AuthService {
  public login(data: ILoginRequestData): Promise<AxiosResponse<IAuthResponse>> {
    return http
      .post<AxiosResponse<IAuthResponse>>(APIRoutes.LOGIN, data)
      .then((result) => result);
  }

  public register(
    data: IRegisterRequestData,
  ): Promise<AxiosResponse<IAuthResponse>> {
    return http
      .post<AxiosResponse<IAuthResponse>>(`/auth/register`, data)
      .then((result) => result);
  }

  public refreshAccessToken(refreshToken: string) {
    return http
      .post<
        AxiosResponse<IAuthResponse>
      >(`/auth/login/access-token`, { refreshToken })
      .then((result) => result);
  }
}

export const authService = new AuthService();
