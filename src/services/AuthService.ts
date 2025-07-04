import ApiService from './ApiService'
import endpointConfig from '@/configs/endpoint.config'
import type {
    SignInCredential,
    SignUpCredential,
    ForgotPassword,
    ResetPassword,
    SignInResponse,
    SignUpResponse,
} from '@/@types/auth'
import { access } from 'fs';

export async function apiSignIn(data: SignInCredential) {
  const url = process.env.NEXT_PUBLIC_API;
    let response = await fetch(`${url}/auth/login`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (response.status == 200) {
        let data = await response.json();
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("configs", JSON.stringify(data.configs));
        return { status: 'success', message: 'Usuário logado', token: data.access_token, user: data.user   }
    }

    return { status: 'failed', message: 'Usuário ou senha inválido.' }
}

export async function apiSignUp(data: SignUpCredential) {
    return ApiService.fetchDataWithAxios<SignUpResponse>({
        url: endpointConfig.signUp,
        method: 'post',
        data,
    })
}

export async function apiSignOut() {
    return ApiService.fetchDataWithAxios({
        url: endpointConfig.signOut,
        method: 'post',
    })
}

export async function apiForgotPassword<T>(data: ForgotPassword) {
    return ApiService.fetchDataWithAxios<T>({
        url: endpointConfig.forgotPassword,
        method: 'post',
        data,
    })
}

export async function apiResetPassword<T>(data: ResetPassword) {
    return ApiService.fetchDataWithAxios<T>({
        url: endpointConfig.resetPassword,
        method: 'post',
        data,
    })
}
export const authFetch = async (url:string, options: any, onError?: any) => {
    const token = localStorage.getItem('token'); 
    const headers = {
      ...options.headers,
      Authorization: token ? `Bearer ${token}` : undefined,
      'Content-Type': 'application/json',
    };
  
    const updatedOptions = {
      ...options,
      headers,
    };
  
    const response = await fetch(url, updatedOptions);
  

    if (!response.ok) {
      if (onError) onError(response);
      throw console.error(`Erro: ${response.status}`);
    }
  
    const text = await response.text();
    if (text.length === 0) return null;
  
    return JSON.parse(text);
  };