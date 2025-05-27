
import { Suspense, useEffect } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";

const AuthSuccessContent = () => {
  const [searchParams] = useSearchParams();
   const navigate = useNavigate()


  useEffect(() => {
    const token = searchParams?.get("token");
    console.log(token);
    if (token) {
      localStorage.setItem("token", token);
      navigate("/home");
    }
  }, [searchParams]);

  return <p>Autenticando...</p>;
};

const AuthSuccess = () => {
  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <AuthSuccessContent />
    </Suspense>
  );
};

export default AuthSuccess;