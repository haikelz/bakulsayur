import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useTitle } from "../../hooks";
import Breadcrumbs from "../../components/breadcrumbs";

export default function Belanja() {
  const navigate = useNavigate();
  useTitle("Belanja");

  return (
    <>
      <Header />
      <main className="w-full flex justify-center items-center flex-col">
        <section className="flex justify-center items-center w-full flex-col">
          <div className="bg-banner-belanja bg-cover h-[600px] bg-no-repeat w-full"></div>
          <div className="flex flex-col justify-between items-center w-full pt-16 pb-28 px-3 max-w-7xl">
            <div className="flex justify-between w-full items-center">
              <Breadcrumbs />
              <div className="relative flex justify-center items-center">
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="Anda mencari apa?"
                  className="pl-10 pr-14 py-4 placeholder:text-blackOlive placeholder:text-semiMedium border-2 border-darkCharcoal/80 rounded-3xl w-[600px]"
                />
                <img
                  src="/images/search.svg"
                  alt="Search"
                  className="absolute right-4"
                />
              </div>
            </div>
            <div className="flex mt-16 flex-col justify-center items-center text-center">
              <h4 className="text-semiMedium">Apa yang ditawarkan?</h4>
              <div className="mt-9 flex justify-center items-center space-x-4">
                <div className="bg-platinum h-[22.5rem] flex justify-start text-center items-center p-6 flex-col shadow-card rounded-3xl">
                  <img
                    src="/images/produk-agrikultur.png"
                    alt="Produk agrikultur"
                  />
                  <p className="mt-3 font-semibold">Produk Agrikultur</p>
                </div>
                <div className="bg-platinum h-[22.5rem] flex justify-start text-center items-center p-6 flex-col shadow-card rounded-3xl">
                  <img src="/images/produk-organik.png" alt="Produk organik" />
                  <p className="mt-3 font-semibold">Produk Organik</p>
                </div>
                <div className="bg-platinum h-[22.5rem] flex justify-start text-center items-center p-6 flex-col shadow-card rounded-3xl">
                  <img
                    src="/images/buah-buahan-sehat.png"
                    alt="Buah-buahan sehat"
                  />
                  <p className="mt-3 font-semibold">Buah-Buahan Sehat</p>
                </div>
                <div className="bg-platinum h-[22.5rem] flex justify-start text-center items-center p-6 flex-col shadow-card rounded-3xl">
                  <img src="/images/sayuran-segar.png" alt="Sayuran segar" />
                  <p className="mt-3 font-semibold">Sayuran Segar</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center w-full bg-white">
          <div className="flex justify-center pt-16 pb-48 w-full items-center flex-col max-w-7xl">
            <div className="flex px-5 justify-between items-center w-full">
              <div className="w-[400px] h-2 bg-darkCharcoal rounded-xl" />
              <h3 className="">Produk Terbaik</h3>
              <div className="w-[400px] h-2 bg-darkCharcoal rounded-xl"></div>
            </div>
            <div className="w-full mt-16">
              <div className="flex w-full justify-center items-center space-x-16">
                <div className="shadow-card rounded-2xl w-full bg-platinum p-5">
                  <img
                    src="/images/belanja-product-wortel.png"
                    className="w-full"
                    alt="wortel"
                  />
                  <div className="my-3.5">
                    <p className="font-semibold">Wortel</p>
                    <p>Rp 5.000/Kg</p>
                  </div>
                  <div className="flex justify-between w-full items-center space-x-4 text-platinum">
                    <button
                      type="button"
                      aria-label="beli sekarang"
                      className="bg-yellowGreenColorWheel text-black rounded-xl py-3 px-6"
                      onClick={() => navigate("/belanja/deskripsi-produk")}
                    >
                      Beli Sekarang
                    </button>
                    <button
                      type="button"
                      aria-label="cart"
                      className="bg-yellowGreenColorWheel rounded-xl py-3 px-4"
                    >
                      <img src="/images/add-shopping-cart.svg" alt="cart" />
                    </button>
                  </div>
                </div>
                <div className="shadow-card rounded-2xl w-full bg-platinum p-5">
                  <img
                    src="/images/belanja-product-labu.png"
                    className="w-full"
                    alt="labu"
                  />
                  <div className="my-3.5">
                    <p className="font-semibold">Labu</p>
                    <p>Rp 15.000/Kg</p>
                  </div>
                  <div className="flex justify-between w-full items-center space-x-4 text-platinum">
                    <button
                      type="button"
                      aria-label="beli sekarang"
                      className="bg-yellowGreenColorWheel text-black rounded-xl py-3 px-6"
                    >
                      Beli Sekarang
                    </button>
                    <button
                      type="button"
                      aria-label="cart"
                      className="bg-yellowGreenColorWheel rounded-xl py-3 px-4"
                    >
                      <img src="/images/add-shopping-cart.svg" alt="cart" />
                    </button>
                  </div>
                </div>
                <div className="shadow-card rounded-2xl w-full bg-platinum p-5">
                  <img
                    src="/images/belanja-product-brokoli.png"
                    className="w-full"
                    alt="brokoli"
                  />
                  <div className="my-3.5">
                    <p className="font-semibold">Brokoli</p>
                    <p>Rp 15.000/Kg</p>
                  </div>
                  <div className="flex justify-between w-full items-center space-x-4 text-platinum">
                    <button
                      type="button"
                      aria-label="beli sekarang"
                      className="bg-yellowGreenColorWheel text-black rounded-xl py-3 px-6"
                    >
                      Beli Sekarang
                    </button>
                    <button
                      type="button"
                      aria-label="cart"
                      className="bg-yellowGreenColorWheel rounded-xl py-3 px-4"
                    >
                      <img src="/images/add-shopping-cart.svg" alt="cart" />
                    </button>
                  </div>
                </div>
                <div className="shadow-card rounded-2xl w-full bg-platinum p-5">
                  <img
                    src="/images/belanja-product-cabai.png"
                    className="w-full"
                    alt="cabai"
                  />
                  <div className="my-3.5">
                    <p className="font-semibold">Cabai</p>
                    <p>Rp 6.000/Ons</p>
                  </div>
                  <div className="flex justify-between w-full items-center space-x-4 text-platinum">
                    <button
                      type="button"
                      aria-label="beli sekarang"
                      className="bg-yellowGreenColorWheel text-black rounded-xl py-3 px-6"
                    >
                      Beli Sekarang
                    </button>
                    <button
                      type="button"
                      aria-label="cart"
                      className="bg-yellowGreenColorWheel rounded-xl py-3 px-4"
                    >
                      <img src="/images/add-shopping-cart.svg" alt="cart" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-12">
              <h3 className="drop-shadow-lg ">Produk Sayuran</h3>
              <div className="flex mt-2 justify-center items-center space-x-16">
                <div className="shadow-card rounded-2xl w-full bg-platinum p-5">
                  <img
                    src="/images/belanja-product-bawang-merah.png"
                    className="w-full"
                    alt="bawang merah"
                  />
                  <div className="my-3.5">
                    <p className="font-semibold">Bawang Merah</p>
                    <p>Rp 5.000/Kg</p>
                  </div>
                  <div className="flex justify-between w-full items-center space-x-4 text-platinum">
                    <button
                      type="button"
                      aria-label="beli sekarang"
                      className="bg-yellowGreenColorWheel text-black rounded-xl py-3 px-6"
                    >
                      Beli Sekarang
                    </button>
                    <button
                      type="button"
                      aria-label="cart"
                      className="bg-yellowGreenColorWheel rounded-xl py-3 px-4"
                    >
                      <img src="/images/add-shopping-cart.svg" alt="cart" />
                    </button>
                  </div>
                </div>
                <div className="shadow-card rounded-2xl w-full bg-platinum p-5">
                  <img
                    src="/images/belanja-product-sawi.png"
                    className="w-full"
                    alt="sawi"
                  />
                  <div className="my-3.5">
                    <p className="font-semibold">Sawi</p>
                    <p>Rp 5.000/Kg</p>
                  </div>
                  <div className="flex justify-between w-full items-center space-x-4 text-platinum">
                    <button
                      type="button"
                      aria-label="beli sekarang"
                      className="bg-yellowGreenColorWheel text-black rounded-xl py-3 px-6"
                    >
                      Beli Sekarang
                    </button>
                    <button
                      type="button"
                      aria-label="cart"
                      className="bg-yellowGreenColorWheel rounded-xl py-3 px-4"
                    >
                      <img src="/images/add-shopping-cart.svg" alt="cart" />
                    </button>
                  </div>
                </div>
                <div className="shadow-card rounded-2xl w-full bg-platinum p-5">
                  <img
                    src="/images/belanja-product-tomat.png"
                    className="w-full"
                    alt="tomat"
                  />
                  <div className="my-3.5">
                    <p className="font-semibold">Tomat</p>
                    <p>Rp 5.000/Kg</p>
                  </div>
                  <div className="flex justify-between w-full items-center space-x-4 text-platinum">
                    <button
                      type="button"
                      aria-label="beli sekarang"
                      className="bg-yellowGreenColorWheel text-black rounded-xl py-3 px-6"
                    >
                      Beli Sekarang
                    </button>
                    <button
                      type="button"
                      aria-label="cart"
                      className="bg-yellowGreenColorWheel rounded-xl py-3 px-4"
                    >
                      <img src="/images/add-shopping-cart.svg" alt="cart" />
                    </button>
                  </div>
                </div>
                <div className="shadow-card rounded-2xl w-full bg-platinum p-5">
                  <img
                    src="/images/belanja-product-kol.png"
                    className="w-full"
                    alt="kol"
                  />
                  <div className="my-3.5">
                    <p className="font-semibold">Kol</p>
                    <p>Rp 5.000/Kg</p>
                  </div>
                  <div className="flex justify-between w-full items-center space-x-4 text-platinum">
                    <button
                      type="button"
                      aria-label="beli sekarang"
                      className="bg-yellowGreenColorWheel text-black rounded-xl py-3 px-6"
                    >
                      Beli Sekarang
                    </button>
                    <button
                      type="button"
                      aria-label="cart"
                      className="bg-yellowGreenColorWheel rounded-xl py-3 px-4"
                    >
                      <img src="/images/add-shopping-cart.svg" alt="cart" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-12">
              <h3>Produk Buah-Buahan</h3>
              <div className="flex mt-2 items-center space-x-16 justify-center">
                <div className="shadow-card rounded-2xl w-full bg-platinum p-5">
                  <img
                    src="/images/belanja-product-jeruk.png"
                    className="w-full"
                    alt="jeruk"
                  />
                  <div className="my-3.5">
                    <p className="font-semibold">Jeruk</p>
                    <p>Rp 5.000/Kg</p>
                  </div>
                  <div className="flex justify-between w-full items-center space-x-4 text-platinum">
                    <button
                      type="button"
                      aria-label="beli sekarang"
                      className="bg-yellowGreenColorWheel text-black rounded-xl py-3 px-6"
                    >
                      Beli Sekarang
                    </button>
                    <button
                      type="button"
                      aria-label="cart"
                      className="bg-yellowGreenColorWheel rounded-xl py-3 px-4"
                    >
                      <img src="/images/add-shopping-cart.svg" alt="cart" />
                    </button>
                  </div>
                </div>
                <div className="shadow-card rounded-2xl w-full bg-platinum p-5">
                  <img
                    src="/images/belanja-product-pisang.png"
                    className="w-full"
                    alt="pisang"
                  />
                  <div className="my-3.5">
                    <p className="font-semibold">Pisang</p>
                    <p>Rp 5.000/Kg</p>
                  </div>
                  <div className="flex justify-between w-full items-center space-x-4 text-platinum">
                    <button
                      type="button"
                      aria-label="beli sekarang"
                      className="bg-yellowGreenColorWheel text-black rounded-xl py-3 px-6"
                    >
                      Beli Sekarang
                    </button>
                    <button
                      type="button"
                      aria-label="cart"
                      className="bg-yellowGreenColorWheel rounded-xl py-3 px-4"
                    >
                      <img src="/images/add-shopping-cart.svg" alt="cart" />
                    </button>
                  </div>
                </div>
                <div className="shadow-card rounded-2xl w-full bg-platinum p-5">
                  <img
                    src="/images/belanja-product-apel.png"
                    className="w-full"
                    alt="apel"
                  />
                  <div className="my-3.5">
                    <p className="font-semibold">Apel</p>
                    <p>Rp 5.000/Kg</p>
                  </div>
                  <div className="flex justify-between w-full items-center space-x-4 text-platinum">
                    <button
                      type="button"
                      aria-label="beli sekarang"
                      className="bg-yellowGreenColorWheel text-black rounded-xl py-3 px-6"
                    >
                      Beli Sekarang
                    </button>
                    <button
                      type="button"
                      aria-label="cart"
                      className="bg-yellowGreenColorWheel rounded-xl py-3 px-4"
                    >
                      <img src="/images/add-shopping-cart.svg" alt="cart" />
                    </button>
                  </div>
                </div>
                <div className="shadow-card rounded-2xl w-full bg-platinum p-5">
                  <img
                    src="/images/belanja-product-anggur.png"
                    className="w-full"
                    alt="anggur"
                  />
                  <div className="my-3.5">
                    <p className="font-semibold">Anggur</p>
                    <p>Rp 5.000/Tangkai</p>
                  </div>
                  <div className="flex justify-between w-full items-center space-x-4 text-platinum">
                    <button
                      type="button"
                      aria-label="beli sekarang"
                      className="bg-yellowGreenColorWheel text-black rounded-xl py-3 px-6"
                    >
                      Beli Sekarang
                    </button>
                    <button
                      type="button"
                      aria-label="cart"
                      className="bg-yellowGreenColorWheel rounded-xl py-3 px-4"
                    >
                      <img src="/images/add-shopping-cart.svg" alt="cart" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
