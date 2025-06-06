import Logo from '@/components/template/Logo'
import Alert from '@/components/ui/Alert'
import SignInForm from './components/SignInForm'
import OauthSignIn from './components/OauthSignIn'
import ActionLink from '@/components/shared/ActionLink'
import useTimeOutMessage from '@/utils/hooks/useTimeOutMessage'
import { useThemeStore } from '@/store/themeStore'
import { useForm } from 'react-hook-form'

type SignInProps = {
    signUpUrl?: string
    forgetPasswordUrl?: string
    disableSubmit?: boolean
}

export const SignInBase = ({
    signUpUrl = '/create-contractor',
    forgetPasswordUrl = '/forgot-password',
    disableSubmit,
}: SignInProps) => {
    const [message, setMessage] = useTimeOutMessage()
    const { register, handleSubmit } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const handleFacebookLogin = () => {
        window.location.href = "http://localhost:3001/auth/facebook"; // Backend endpoint
    };

    const handleGoogleLogin = () => {
        window.location.href = "http://localhost:3001/auth/google";
    };

    const onSubmit = async (data: any) => {
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
            return 
            // Navigate//router.push("/contractor/dashboard");
        }

        return alert("Usuário ou senha inválido.");
    };
    const mode = useThemeStore((state) => state.mode)

    return (
        <>
            <div className="mb-8">
                <Logo
                    type="streamline"
                    mode={mode}
                    imgClass="flex w-[229px]"
                    logoWidth={60}
                />
            </div>
            <div className="mb-10 flex justify-center">
                <h3 className="mb-2">Bem-vindo ao Resolve!</h3>
            </div>
            {message && (
                <Alert showIcon className="mb-4" type="danger">
                    <span className="break-all">{message}</span>
                </Alert>
            )}
            <SignInForm
                disableSubmit={disableSubmit}
                setMessage={setMessage}
                passwordHint={
                    <div className="mb-7 mt-2">
                        <ActionLink
                            to={forgetPasswordUrl}
                            className="font-semibold heading-text mt-2 underline"
                            themeColor={false}
                        >
                            Esqueceu sua senha?
                        </ActionLink>
                    </div>
                }
            />
            <div className="mt-8">
                <div className="flex items-center gap-2 mb-6">
                    <div className="border-t border-gray-200 dark:border-gray-800 flex-1 mt-[1px]" />
                    <p className="font-semibold heading-text">
                        ou continue com
                    </p>
                    <div className="border-t border-gray-200 dark:border-gray-800 flex-1 mt-[1px]" />
                </div>
                <OauthSignIn
                    disableSubmit={disableSubmit}
                    setMessage={setMessage}
                />
            </div>
            <div>
                <div className="mt-6 text-center">
                    <span>{`Não tem conta ainda?`} </span>
                    <ActionLink
                        to={signUpUrl}
                        className="heading-text font-bold"
                        themeColor={false}
                    >
                        Cadastre-se
                    </ActionLink>
                </div>
            </div>
        </>
    )
}

const SignIn = () => {
    return <SignInBase />
}

export default SignIn
