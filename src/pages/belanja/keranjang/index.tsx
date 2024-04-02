import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../../components/footer";
import Header from "../../../components/header";
import ProtectedRoute from "../../../components/protected-route";
import { useTitle } from "../../../hooks";
import { toRupiah, tw } from "../../../lib/helpers";
import Breadcrumbs from "../../../components/breadcrumbs";

export default function Keranjang() {
  const [isBuyNow, setIsBuyNow] = useState<boolean>(false);
  const [totalProduct1, setTotalProduct1] = useState<number>(1);
  const [totalProduct2, setTotalProduct2] = useState<number>(1);
  const [isLoggedIn] = useState<string>(
    localStorage.getItem("isLoggedIn") || "false"
  );

  const navigate = useNavigate();

  useTitle("Keranjang");

  return (
    <ProtectedRoute isLoggedIn={isLoggedIn}>
      <Header />
      <main className="w-full flex justify-center items-center flex-col">
        <section className="flex justify-start max-w-7xl items-center w-full">
          <div className="w-full h-full min-h-screen">
            <div className="mt-28 h-full w-full">
              <Breadcrumbs />
              <div className="mt-10 w-full h-[700px] flex justify-between items-start flex-col">
                <div className="w-fit flex flex-col justify-start items-start space-y-16">
                  <div className="bg-yellowGreenColorWheel w-[708px] px-6 py-8 rounded-2xl flex justify-start items-start">
                    <div className="flex flex-col w-full">
                      <div className="flex w-full">
                        <div className="flex items-center mr-10">
                          <label
                            className="relative flex items-center p-3 mr-4 rounded-full cursor-pointer"
                            htmlFor="check1"
                          >
                            <input
                              type="checkbox"
                              className="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border border-black transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-black before:opacity-0 before:transition-opacity checked:border-black checked:before:bg-black hover:before:opacity-10"
                              id="check1"
                            />
                            <span className="absolute text-black transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3.5 w-3.5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth={1}
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          </label>
                          <img
                            src="/images/keranjang-wortel.png"
                            alt="wortel"
                          />
                        </div>
                        <div className="flex flex-col justify-between">
                          <div>
                            <p className="font-semibold text-platinum">
                              Wortel
                            </p>
                            <p className="font-normal text-platinum">
                              Jumlah/Kg
                            </p>
                          </div>
                          <div className="flex justify-center mt-9 items-center space-x-5">
                            <button
                              type="button"
                              aria-label="minus"
                              className="border border-platinum w-5 h-5 text-[12px] flex justify-center items-center rounded-sm"
                              onClick={() =>
                                setTotalProduct1((prev) =>
                                  prev <= 0 ? 0 : prev - 1
                                )
                              }
                            >
                              -
                            </button>
                            <span className="bg-platinum text-[12px] w-5 h-5 flex justify-center items-center rounded-sm">
                              {totalProduct1}
                            </span>
                            <button
                              type="button"
                              aria-label="plus"
                              className="border border-platinum w-5 h-5 text-[12px] flex justify-center items-center rounded-sm"
                              onClick={() =>
                                setTotalProduct1((prev) => prev + 1)
                              }
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex justify-end items-center">
                        <button type="button" aria-label="trash">
                          <img src="/images/trash.svg" alt="trash" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-yellowGreenColorWheel w-[708px] px-6 py-8 rounded-2xl flex justify-start items-start">
                    <div className="flex flex-col w-full">
                      <div className="flex w-full">
                        <div className="flex items-center mr-10">
                          <label
                            className="relative flex items-center p-3 mr-4 rounded-full cursor-pointer"
                            htmlFor="check2"
                          >
                            <input
                              type="checkbox"
                              className="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border border-black transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-black before:opacity-0 before:transition-opacity checked:border-black checked:before:bg-black hover:before:opacity-10"
                              id="check2"
                            />
                            <span className="absolute text-black transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3.5 w-3.5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth={1}
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          </label>
                          <img src="/images/keranjang-apel.png" alt="apel" />
                        </div>
                        <div className="flex flex-col justify-between">
                          <div>
                            <p className="font-semibold text-platinum">
                              Wortel
                            </p>
                            <p className="font-normal text-platinum">
                              Jumlah/Kg
                            </p>
                          </div>
                          <div className="flex justify-center mt-9 items-center space-x-5">
                            <button
                              type="button"
                              aria-label="minus"
                              className="border border-platinum w-5 h-5 text-[12px] flex justify-center items-center rounded-sm"
                              onClick={() =>
                                setTotalProduct2((prev) =>
                                  prev <= 0 ? 0 : prev - 1
                                )
                              }
                            >
                              -
                            </button>
                            <span className="bg-platinum text-[12px] w-5 h-5 flex justify-center items-center rounded-sm">
                              {totalProduct2}
                            </span>
                            <button
                              type="button"
                              aria-label="plus"
                              className="border border-platinum w-5 h-5 text-[12px] flex justify-center items-center rounded-sm"
                              onClick={() =>
                                setTotalProduct2((prev) => prev + 1)
                              }
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex justify-end items-center">
                        <button type="button" aria-label="trash">
                          <img src="/images/trash.svg" alt="trash" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="flex justify-center items-center space-x-2"
                >
                  <img
                    src="/images/arrow-left.svg"
                    alt="arrow left"
                    onClick={() => navigate("/belanja/deskripsi-produk")}
                  />
                  <span>Kembali</span>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-yellowGreenColorWheel w-[700px] flex flex-col justify-center items-center px-9">
            <div className="flex flex-col justify-between w-full h-full min-h-screen items-center">
              <div className="w-full flex-col mt-28 flex space-y-36 justify-center items-center">
                <button
                  type="button"
                  aria-label="keranjang"
                  className="font-semibold border border-white text-white rounded-2xl px-8 py-2.5"
                >
                  Keranjang
                </button>
                <div className="flex flex-col w-full items-center justify-between space-y-5">
                  {totalProduct1 > 0 ? (
                    <div className="border-b-[3px] w-full pb-1 border-platinum flex justify-between items-center">
                      <div className="space-x-5 flex justify-center items-center">
                        <p className="text-platinum">Wortel</p>
                        <p className="font-normal text-platinum">
                          Jumlah {totalProduct1} Kg
                        </p>
                      </div>
                      <p className="text-platinum">
                        {toRupiah(totalProduct1 * 5000)}
                      </p>
                    </div>
                  ) : null}
                  {totalProduct2 > 0 ? (
                    <div className="border-b-[3px] w-full pb-1 border-platinum flex justify-between items-center">
                      <div className="space-x-5 flex justify-center items-center">
                        <p className="text-platinum">Apel</p>
                        <p className="font-normal text-platinum">
                          Jumlah {totalProduct2} Kg
                        </p>
                      </div>
                      <p className="text-platinum">
                        {toRupiah(totalProduct2 * 5000)}
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="w-full mb-12">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-platinum">Total</span>
                  <span className="font-semibold text-platinum">
                    {toRupiah(totalProduct1 * 5000 + totalProduct2 * 5000)}
                  </span>
                </div>
                <button
                  type="button"
                  id="btn-beli-sekarang"
                  aria-label="bayar sekarang"
                  className=" mt-10 font-semibold rounded-3xl bg-platinum py-4 w-full"
                  onClick={() => setIsBuyNow(true)}
                >
                  Bayar Sekarang
                </button>
              </div>
            </div>
          </div>
        </section>
        <div
          id="modal-success-pembelian-produk"
          className={tw(
            "w-full min-h-screen fixed justify-center items-center top-0 bg-platinum/60 backdrop-blur-md z-50",
            isBuyNow ? "flex" : "hidden"
          )}
        >
          <div className="flex justify-center items-center flex-col h-[674px] py-32 rounded-[48px] max-w-7xl w-full  bg-platinum">
            <div className="flex justify-between items-center h-full flex-col">
              <div className="flex flex-col justify-center items-center">
                <img src="/images/done.svg" alt="done" />
                <h1>Yeah</h1>
                <p className="text-medium">Pembelian Berhasil</p>
              </div>
              <Link to="/">*Ketuk Untuk Kembali ke Beranda*</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </ProtectedRoute>
  );
}
