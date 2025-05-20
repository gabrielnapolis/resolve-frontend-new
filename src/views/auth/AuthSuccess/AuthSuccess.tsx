"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

const AuthSuccessContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const token = searchParams?.get("token");
    if (token) {
      localStorage.setItem("token", token);
      router.push("/");
    }
  }, [searchParams, router]);

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