import { useNavigate } from "react-router-dom";
import Footer from "../../../components/footer";
import Header from "../../../components/header";
import { useTitle } from "../../../hooks";
import Breadcrumbs from "../../../components/breadcrumbs";

export default function DeskripsiProduk() {
  const navigate = useNavigate();

  useTitle("Deskripsi Produk");
  return (
    <>
      <Header />
      <main className="flex justify-center bg-yellowGreenColorWheel items-center min-h-screen w-full">
        <section className="flex justify-center pt-36 pb-20 items-center flex-col w-full max-w-7xl">
          <div className="flex flex-col justify-center w-full items-start">
            <div className="flex justify-between w-full items-center">
              <Breadcrumbs />
              <div className="relative flex justify-center items-center">
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="Anda mencari apa?"
                  className="pl-10 pr-14 py-4 placeholder:text-platinum bg-transparent placeholder:text-semiMedium border-2 border-platinum rounded-3xl w-[600px]"
                />
                <img
                  src="/images/search-white.svg"
                  alt="Search"
                  className="absolute right-4"
                />
              </div>
            </div>
            <div className="rounded-3xl bg-platinum w-full mt-12 p-12 flex justify-center items-start space-x-8">
              <img
                className="text-platinum"
                src="/images/deskkripsi-produk-wortel.png"
                alt="wortel"
              />
              <div className="w-[677px]">
                <h1>Wortel</h1>
                <p className="font-normal">
                  Wortel adalah jenis sayuran akar yang dikenal dengan warna
                  oranye cerahnya dan bentuk yang silindris atau kerucut. Wortel
                  kaya akan nutrisi, terutama vitamin A dalam bentuk
                  beta-karoten, serta serat, vitamin K1, potassium, dan
                  antioksidan.
                </p>
                <p className="font-semibold my-4">Rp 5.000/Kg</p>
                <div className="flex justify-center w-fit items-center space-x-4">
                  <button
                    type="button"
                    aria-label="beli sekarang"
                    className="bg-yellowGreenColorWheel rounded-lg py-4 px-10 h-fit text-white"
                  >
                    Beli Sekarang
                  </button>
                  <button
                    type="button"
                    aria-label="cart"
                    className="bg-yellowGreenColorWheel rounded-lg py-1.5"
                    onClick={() => navigate("/belanja/keranjang")}
                  >
                    <img src="/images/white-shopping-cart.svg" alt="cart" />
                  </button>
                </div>
              </div>
            </div>
            <button
              type="button"
              aria-label="kembali"
              className="flex justify-center items-center space-x-4 mt-6"
            >
              <img
                src="/images/arrow-left-white.svg"
                alt="arrow left"
                onClick={() => navigate("/")}
              />
              <span className="text-platinum">Kembali</span>
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
