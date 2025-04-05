type OAuthResponse = {
    token: string
    user: {
        id: string
        name: string
        email: string
    }
}

async function placeholderFunction(): Promise<OAuthResponse> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: 'placeholder_token',
                user: {
                    id: 'placeholder_id',
                    name: 'Placeholder User',
                    email: 'user@example.com',
                },
            })
        }, 500)
    })
}

export async function apiGoogleOauthSignIn(): Promise<OAuthResponse> {
    return await placeholderFunction()
}

export async function apiGithubOauthSignIn(): Promise<OAuthResponse> {
    return await placeholderFunction()
}

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
       // return router.push("/contractor/dashboard");
    }

    return alert("Usuário ou senha inválido.");
};