"use client";

import { useState } from "react";
import { Button } from "@headlessui/react";
import Alert from "@mui/material/Alert";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log("A tentar fazer login com:", { email, password });
  };

  return (
    // Fundo da página, que centra o conteúdo
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 p-4">
      {/* MUDANÇA PRINCIPAL AQUI:
        1. Removemos: "grid grid-cols-1 md:grid-cols-2"
        2. Alterámos: "max-w-6xl" para "max-w-lg" (pode usar 'md' ou 'lg' consoante preferir)
        3. Adicionámos: "p-8 sm:p-12 lg:p-16" (que estava na div filha)
      */}
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg overflow-hidden p-8 sm:p-12 lg:p-16">
        {/* MUDANÇA AQUI:
          Removemos a div "w-full bg-white flex flex-col justify-center..."
          e trouxemos o seu conteúdo (este "max-w-md") para cima.
        */}
        <div className="w-full max-w-md mx-auto flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-4">
              <svg
                className="w-10 h-10 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-2xl font-bold text-slate-800">UniPocket</p>
            </div>

            <p className="text-slate-900 text-4xl font-black leading-tight tracking-tight">
              Entrar como estudante
            </p>
            <p className="text-slate-500 text-base font-normal leading-normal">
              Bem-vindo de volta! Por favor, insira os seus dados!
            </p>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-4">
            {/* Email */}
            <label className="flex flex-col w-full">
              <p className="text-slate-800 text-base font-medium pb-2">Email</p>
              <input
                className="flex w-full rounded-lg border border-slate-300 bg-white h-14 p-4 text-base focus:outline-0 focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 text-slate-900"
                placeholder="Insira o seu email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            {/* Password */}
            <label className="flex flex-col w-full">
              <p className="text-slate-800 text-base font-medium pb-2">
                Password
              </p>
              <div className="flex w-full items-stretch rounded-lg">
                <input
                  className="flex w-full rounded-l-lg border border-slate-300 bg-white h-14 p-4 text-base focus:outline-0 focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 border-r-0 text-slate-900"
                  placeholder="Insira a sua palavra-passe"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="px-4 rounded-r-lg border border-slate-300 bg-white border-l-0 text-slate-500 hover:text-slate-700"
                >
                  👁
                </button>
              </div>
            </label>

            <a
              className="text-blue-600 text-sm self-end underline hover:text-blue-600/80"
              href="#"
            >
              Esqueceu-se da palavra-passe?
            </a>
          </div>

          {/* Submit */}
          <div className="flex flex-col gap-4">
            <Button
              onClick={handleLogin}
              className="
                  inline-flex items-center justify-center w-full
                  rounded-lg px-4 py-3.5 text-base font-semibold text-white
                  bg-blue-600 shadow-inner shadow-white/10
                  focus:outline-none data-focus:outline data-focus:outline-white
                  data-hover:bg-blue-500 data-open:bg-blue-600
                  transition-colors
                "
            >
              Entrar
            </Button>

            <p className="text-slate-500 text-sm text-center">
              Não tem uma conta?{" "}
              <a
                className="text-blue-600 font-medium underline hover:text-blue-600/80"
                href="#"
              >
                Registe-se aqui
              </a>
            </p>
          </div>

          <div className="mt-16 text-center text-sm text-slate-400">
            <a className="hover:underline" href="#">
              Ajuda?
            </a>{" "}
            ·{" "}
            <a className="hover:underline" href="#">
              Página Inicial do UniPocket
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
