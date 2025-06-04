import { createContext } from 'react'
import type {
    SignInCredential,
    SignUpCredential,
    AuthResult,
    User,
    OauthSignInCallbackPayload,
} from '@/@types/auth'

type Auth = {
    authenticated: boolean
    user: User
    signIn: (values: SignInCredential) => AuthResult
    signUp: (values: SignUpCredential) => AuthResult
    signOut: () => void
    oAuthSignIn: (
        callback: (payload: OauthSignInCallbackPayload) => void,
    ) => void
}

const defaultFunctionPlaceHolder = async (data:any): AuthResult => {
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
 return { status: 'success', message: 'Usuário logado' }
    }

    return { status: 'failed', message: 'Usuário ou senha inválido.' }
}

const defaultOAuthSignInPlaceHolder = (
    callback: (payload: OauthSignInCallbackPayload) => void,
): void => {
    callback({
        onSignIn: () => {},
        redirect: () => {},
    })
}

const AuthContext = createContext<Auth>({
    authenticated: false,
    user: {},
    signIn: async (data) => defaultFunctionPlaceHolder(data),
    signUp: async (data) => defaultFunctionPlaceHolder(data),
    signOut: () => {},
    oAuthSignIn: defaultOAuthSignInPlaceHolder,
})

export default AuthContext
