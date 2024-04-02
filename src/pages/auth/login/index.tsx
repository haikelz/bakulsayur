import { ReactNode, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useTitle } from "../../../hooks";

export default function Login() {
  const [isHidePassword, setIsHidePassword] = useState<boolean>(true);
  const [isLoggedIn] = useState<string>(
    localStorage.getItem("isLoggedIn") || "false"
  );

  const navigate = useNavigate();

  function handleSubmit() {
    localStorage.setItem("isLoggedIn", "true");
    navigate("/");
  }

  useTitle("Login");

  return (
    <LoginRoute isLoggedIn={isLoggedIn}>
      <main className="flex justify-center items-center bg-hero-home bg-cover bg-no-repeat w-full min-h-screen">
        <section className="w-full max-w-7xl flex justify-center items-center flex-col">
          <h1 className="text-platinum">Selamat Datang</h1>
          <form
            onSubmit={handleSubmit}
            className="rounded-[64px] mt-10 w-[904px] px-10 py-20 bg-lightSilver/[.068] backdrop-blur-lg text-semiMedium font-normal"
          >
            <div className="flex flex-col justify-center items-center w-full mb-14">
              <div className="flex flex-col space-y-8 w-full">
                <div className="relative flex justify-center items-center">
                  <img
                    src="/images/user-icon.svg"
                    alt="user"
                    className="absolute left-0 pl-3"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    className="rounded-xl pl-20 bg-lightSilver shadow-innerInput placeholder:text-blackOlive py-3 w-full"
                    placeholder="Nama Pengguna"
                    required
                  />
                </div>
                <div className="relative flex justify-center items-center">
                  <img
                    src="/images/lock-icon.svg"
                    alt="password"
                    className="absolute left-0 pl-3"
                  />
                  <input
                    type={isHidePassword ? "password" : "text"}
                    className="rounded-xl pl-20 bg-lightSilver shadow-innerInput placeholder:text-blackOlive py-3 w-full"
                    placeholder="Kata Sandi"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setIsHidePassword(!isHidePassword)}
                    className="absolute right-0 pr-3"
                  >
                    <img
                      src={
                        isHidePassword
                          ? "/images/eye-icon.svg"
                          : "/images/eye-off.svg"
                      }
                      className="w-10 h-10"
                      alt="eye"
                    />
                  </button>
                </div>
                <div className="relative flex justify-center items-center">
                  <img
                    src="/images/user-type.svg"
                    alt="password"
                    className="absolute left-0 pl-3"
                  />
                  <select
                    defaultValue="Pilih Pengguna"
                    required
                    className="rounded-xl pl-20 bg-lightSilver shadow-innerInput pr-3 py-3 w-full text-blackOlive"
                  >
                    <option>Pilih Pengguna</option>
                    <option value="Pembeli">Pembeli</option>
                    <option value="petani">Petani</option>
                  </select>
                </div>
              </div>
              <p className="text-platinum mt-9">
                Belum Memiliki Akun?
                <a href="/auth/register" className="text-yellowGreenColorWheel">
                  {" "}
                  Daftar Akun
                </a>
              </p>
            </div>
            <div className="text-platinum flex justify-start space-x-44 items-center w-full">
              <Link to="/">
                <button
                  type="button"
                  aria-label="kembali"
                  className="flex justify-center items-center space-x-3"
                >
                  <img src="/images/arrow-left-white.svg" alt="Arrow Left" />
                  <span className="text-platinum">Kembali</span>
                </button>
              </Link>
              <button
                type="submit"
                aria-label="masuk"
                className="border-2 border-yellowGreenColorWheel rounded-xl px-16 font-semibold py-2"
              >
                Masuk
              </button>
            </div>
          </form>
        </section>
      </main>
    </LoginRoute>
  );
}

function LoginRoute({
  isLoggedIn,
  children,
}: {
  isLoggedIn: string;
  children: ReactNode;
}) {
  return <>{isLoggedIn === "false" ? children : <Navigate to="/" />}</>;
}
