import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../../components/footer";
import Header from "../../../components/header";
import ProtectedRoute from "../../../components/protected-route";
import { useTitle } from "../../../hooks";

export default function TambahProduk() {
  const [isLoggedIn] = useState<string>(
    localStorage.getItem("isLoggedIn") || "false"
  );
  const [isSuccessAddProduct, setIsSuccessAddProduct] =
    useState<boolean>(false);

  const navigate = useNavigate();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSuccessAddProduct(true);
  }

  useTitle("Tambah Produk");

  return (
    <ProtectedRoute isLoggedIn={isLoggedIn}>
      <Header />
      <main className="w-full flex justify-center items-center mt-28 pb-14 flex-col">
        <section className="flex flex-col justify-start items-start max-w-7xl w-full">
          <div className="flex justify-center items-center w-fit space-x-5 font-semibold">
            <span className="text-semiMedium font-semibold">Home</span>
            <img src="/images/arrow-right.svg" alt="arrow right" />
            <span className="text-semiMedium font-semibold">Profil</span>
            <img src="/images/arrow-right.svg" alt="arrow right" />
            <span className="text-semiMedium font-semibold">Tambah Produk</span>
          </div>
          <div className="mt-16 w-full flex justify-between">
            <div className="flex flex-col justify-start items-start space-y-10">
              <ul className="space-y-4">
                <li className="flex space-x-4 items-center">
                  <img src="/images/checkmark.svg" alt="checkmark" />
                  <p className="font-normal">Informasi Produk</p>
                </li>
                <li className="flex space-x-4 items-center">
                  <img src="/images/checkmark.svg" alt="checkmark" />
                  <p className="font-normal">Spesifikasi</p>
                </li>
                <li className="flex space-x-4 items-center">
                  <img src="/images/checkmark.svg" alt="checkmark" />
                  <p className="font-normal">Informasi Penjualan</p>
                </li>
                <li className="flex space-x-4 items-center">
                  <img src="/images/checkmark.svg" alt="checkmark" />
                  <p className="font-normal">Gambar Produk</p>
                </li>
              </ul>
              <div className="flex w-fit justify-center items-center flex-col rounded-lg p-6 bg-yellowGreenColorWheel">
                <img
                  className="bg-white rounded-lg"
                  src="/images/tambahkan-gambar.png"
                  alt="tambahkan gambar"
                />
                <p className="font-semibold mt-4 mb-8">Tambahkan Gambar</p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="h-fit">
              <div className="h-full bg-yellowGreenColorWheel rounded-2xl px-10 w-[840px] pt-8 pb-24">
                <div className="space-y-5">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-normal ">
                      Informasi Produk
                    </h4>
                    <div className="flex justify-between items-start space-x-10">
                      <div className="border border-black rounded-lg px-4 py-3 w-full max-w-[182px]">
                        <p className="text-small font-normal">Nama Produk</p>
                      </div>
                      <input
                        required
                        type="text"
                        name=""
                        id=""
                        className="placeholder: w-full shadow-innerInput rounded-lg py-2.5 px-4 bg-lightSilver border border-black"
                      />
                    </div>
                    <div className="flex justify-between items-start space-x-10">
                      <div className="border border-black rounded-lg px-4 py-3 w-full max-w-[182px]">
                        <p className="text-small font-normal">Jumlah Produk</p>
                      </div>
                      <input
                        required
                        type="text"
                        name=""
                        id=""
                        className="placeholder: w-full shadow-innerInput rounded-lg py-2.5 px-4 bg-lightSilver border border-black"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-normal ">Spesifikasi</h4>
                    <div className="flex justify-between items-start space-x-10">
                      <div className="border border-black rounded-lg px-4 py-3 w-full max-w-[182px]">
                        <p className="text-small font-normal">Deskripsi</p>
                      </div>
                      <textarea
                        required
                        className="placeholder: h-[126px] w-full shadow-innerInput rounded-lg py-2.5 px-4 bg-lightSilver border border-black"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-normal ">
                      Informasi Penjualan
                    </h4>
                    <div className="flex justify-between items-start space-x-10">
                      <div className="border border-black rounded-lg px-4 py-3 w-full max-w-[182px]">
                        <p className="text-small font-normal">Harga Produk</p>
                      </div>
                      <input
                        required
                        type="text"
                        name=""
                        id=""
                        className="placeholder: w-full shadow-innerInput rounded-lg py-2.5 px-4 bg-lightSilver border border-black"
                      />
                    </div>
                    <div className="flex justify-between items-start space-x-10">
                      <div className="border border-black rounded-lg px-4 py-3 w-full max-w-[182px]">
                        <p className="text-small font-normal">Minimal Order</p>
                      </div>
                      <input
                        required
                        type="text"
                        name=""
                        id=""
                        className="placeholder: w-full shadow-innerInput rounded-lg py-2.5 px-4 bg-lightSilver border border-black"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end items-center w-full mt-16">
                <div className="flex justify-center items-center w-fit space-x-7">
                  <button
                    type="button"
                    aria-label="kembali"
                    className="border-[3px] text-semiMedium font-semibold border-darkCharcoal px-7 rounded-xl border-solid py-3"
                    onClick={() => navigate("/profil")}
                  >
                    Kembali
                  </button>
                  <button
                    id="btn-tambah-produk"
                    type="submit"
                    aria-label="simpan dan tampilkan"
                    className="border-[3px] text-semiMedium font-semibold border-darkCharcoal px-7 rounded-xl border-solid py-3"
                  >
                    Simpan dan tampilkan
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
        {isSuccessAddProduct ? (
          <div
            id="modal-success-tambah-produk"
            className="w-full min-h-screen flex fixed justify-center items-center top-0 bg-darkCharcoal/60 backdrop-blur-md z-50"
          >
            <div className="flex justify-center items-center flex-col h-[674px] py-32 rounded-[48px] max-w-7xl w-full  bg-platinum">
              <div className="flex justify-between items-center h-full flex-col">
                <div className="flex flex-col justify-center items-center">
                  <img src="/images/done.svg" alt="done" />
                  <h1>Yeah</h1>
                  <p className="text-medium">Produk Berhasil Ditambahkan</p>
                </div>
                <Link to="/">*Ketuk Untuk Kembali ke Beranda*</Link>
              </div>
            </div>
          </div>
        ) : null}
      </main>
      <Footer />
    </ProtectedRoute>
  );
}
