import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";
import ProtectedRoute from "../../components/protected-route";
import { useTitle } from "../../hooks";

export default function Profil() {
  const [isLoggedIn, setIsLoggedIn] = useState<string>(
    localStorage.getItem("isLoggedIn") || "false"
  );

  const navigate = useNavigate();

  useTitle("Profil");

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn")) {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") || "false");
    }
  }, [setIsLoggedIn]);

  return (
    <ProtectedRoute isLoggedIn={isLoggedIn}>
      <Header />
      <main className="flex justify-center items-center w-full">
        <section className="flex flex-col justify-center items-center w-full">
          <div className="bg-center relative bg-cover bg-no-repeat bg-hero-profile w-full h-full min-h-[344.67px]"></div>
          <div className="absolute z-10 flex justify-between items-start w-full max-w-7xl">
            <div className="bg-platinum w-[450px] rounded-3xl p-8">
              <div className="w-full mb-14">
                <div className="flex justify-center items-center flex-col">
                  <div className="w-[295px] h-[295px] flex justify-center items-center p-10 bg-yellowGreenColorWheel rounded-full">
                    <img
                      src="/images/user-profile.svg"
                      alt="user profile"
                      className="w-[256px] h-[256px]"
                    />
                  </div>
                  <h2 className="text-[36px]  mt-3">Pak Ahmad</h2>
                </div>
                <div className="flex space-y-7 flex-col justify-center items-center w-full mt-8">
                  <button
                    type="button"
                    aria-label="ubah profil"
                    className="flex justify-between border border-black rounded-lg py-1 w-full items-center px-8  text-semiMedium"
                  >
                    <p className="text-semiMedium">Ubah Profil</p>
                    <img src="/images/ubah-profil.svg" alt="ubah profil" />
                  </button>
                  <button
                    type="button"
                    aria-label="tambah produk"
                    onClick={() => navigate("/profil/tambah-produk")}
                    className="flex justify-between border border-black rounded-lg py-1 w-full items-center px-8  text-semiMedium"
                  >
                    <p className="text-semiMedium">Tambah Produk</p>
                    <img src="/images/tambah-produk.svg" alt="tambah produk" />
                  </button>
                </div>
              </div>
              <div className="w-full flex justify-between items-center">
                <button
                  type="button"
                  aria-label="kembali"
                  className="flex justify-center items-center space-x-2"
                  onClick={() => navigate("/")}
                >
                  <img src="/images/arrow-left.svg" alt="arrow left" />
                  <span className="font-semibold">Kembali</span>
                </button>
                <button
                  type="button"
                  aria-label="keluar"
                  className="px-14 border border-black rounded-lg py-1.5"
                  onClick={() => {
                    navigate("/");
                    localStorage.removeItem("isLoggedIn");
                  }}
                >
                  <span className="font-semibold">Keluar</span>
                </button>
              </div>
            </div>
            <div className="bg-platinum flex flex-col justify-center items-center w-[715px] px-10 py-10 rounded-3xl">
              <h4>Profil Pengguna</h4>
              <div className="flex flex-col mt-8 mb-14 w-full justify-center items-center space-y-8">
                <div className="w-full">
                  <p className="font-semibold ">Nama</p>
                  <input
                    required
                    type="text"
                    name=""
                    id=""
                    className="shadow-innerInput rounded-lg px-6 border border-black bg-platinum placeholder:mt-0.5 py-3 w-full"
                  />
                </div>
                <div className="w-full">
                  <p className="font-semibold ">No Telepon</p>
                  <input
                    required
                    type="text"
                    name=""
                    id=""
                    className="shadow-innerInput rounded-lg px-6 border border-black bg-platinum placeholder:mt-0.5 py-3 w-full"
                  />
                </div>
                <div className="w-full">
                  <p className="font-semibold ">Nama Toko</p>
                  <input
                    required
                    type="text"
                    name=""
                    id=""
                    className="shadow-innerInput rounded-lg px-6 border border-black bg-platinum placeholder:mt-0.5 py-3 w-full"
                  />
                </div>
                <div className="w-full">
                  <p className="font-semibold ">Alamat</p>
                  <input
                    required
                    type="text"
                    name=""
                    id=""
                    className="shadow-innerInput rounded-lg px-6 border border-black bg-platinum placeholder:mt-0.5 py-3 w-full"
                  />
                </div>
              </div>
              <button
                type="button"
                aria-label="Selesai"
                className=" text-semiMedium px-2 py-2 w-[250px] border-[3px] rounded-xl font-semibold border-darkCharcoal"
              >
                Selesai
              </button>
            </div>
          </div>
          <div className="min-h-[684px] relative w-full h-full bg-yellowGreenColorWheel" />
        </section>
      </main>
      <Footer />
    </ProtectedRoute>
  );
}
