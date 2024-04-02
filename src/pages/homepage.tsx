import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import { useTitle } from "../hooks";
import { tw } from "../lib/helpers";

export default function Home() {
  const navigate = useNavigate();
  useTitle("Home");

  return (
    <>
      <Header />
      <main className="w-full flex justify-center items-center flex-col">
        <section className="flex relative justify-center bg-hero-home bg-no-repeat bg-cover min-h-screen items-center w-full flex-col">
          <div className="w-full flex z-20 flex-col px-3 justify-center items-start max-w-7xl">
            <div>
              <h1 className="w-[844px] leading-[90px] text-platinum">
                Nikmati Sayur dan Buah Segar dari Petani
              </h1>
              <p className="w-[840px] text-platinum leading-10 mb-6 mt-4">
                Rasakan kenikmatan dan kebaikan alami dari sayuran segar,
                langsung dari petani yang berpengalaman. Dipetik dengan teliti
                dari ladang yang subur, memberikan cita rasa alami dan nutrisi
                terbaik.
              </p>
              <div className="flex justify-center w-fit items-center space-x-8">
                <button
                  type="button"
                  aria-label="mulai"
                  className={tw(
                    "px-14 py-4 rounded-2xl transition-all font-semibold",
                    "bg-yellowGreenColorWheel text-white"
                  )}
                  onClick={() => (window.location.href = "#jaminan")}
                >
                  Mulai
                </button>
                <button
                  type="button"
                  aria-label="daftar sekarang"
                  className={tw(
                    "px-14 py-4 rounded-2xl border hover:bg-yellowGreen hover:border-yellowGreen transition-all hover:text-black border-yellowGreenColorWheel text-yellowGreenColorWheel font-semibold"
                  )}
                  onClick={() => navigate("/belanja")}
                >
                  Belanja Sekarang
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="flex w-full justify-center absolute z-10 top-0 translate-y-[95px] h-full items-end">
          <div
            id="jaminan"
            className="flex justify-around rounded-3xl px-5 items-center bg-yellowGreenColorWheel max-w-7xl w-full py-7 space-x-5"
          >
            <div className="flex flex-col justify-center items-center">
              <img src="/images/guarantee.svg" alt="image" />
              <p className="mt-4 text-platinum">Kualitas Tinggi</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src="/images/dollar-coin.svg" alt="image" />
              <p className="mt-4 text-platinum">Harga Terjangkau</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src="/images/leaf.svg" alt="image" />
              <p className=" mt-4 text-platinum">Higienis</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src="/images/clean-hands.svg" alt="image" />
              <p className="mt-4 text-platinum">Tangan Pertama</p>
            </div>
          </div>
        </div>
        <section className="flex justify-center w-full items-center max-w-7xl min-h-screen px-3 relative">
          <div className="flex justify-between items-center w-full">
            <div className="rounded-2xl box-shadow-hero w-[430px] overflow-hidden">
              <img
                src="/images/pertanian-padi-home.png"
                className="w-full rounded-2xl"
                alt="pertanian padi"
              />
            </div>
            <div className="w-[714px]">
              <span className="text-royalGreen leading-10">
                Kenapa Harus Kami?
              </span>
              <h1 className="leading-[90px]">
                Semua Sayur dan Buah Segar Tersedia
              </h1>
              <p className="mb-10 mt-2 leading-10">
                Kami menyediakan beragam sayuran segar yang berkualitas tinggi.
                Tersedia juga Buah-buahan segar. Nikmati pilihan beragam sayur
                dan buah yang siap dihidangan untuk keluarga tercinta.
              </p>
              <button
                type="button"
                aria-label="tentang kami"
                className="rounded-2xl border font-semibold hover:text-white text-yellowGreenColorWheel hover:bg-yellowGreenColorWheel transition-all border-yellowGreenColorWheel px-16 py-3"
                onClick={() => navigate("/tentang")}
              >
                Tentang Kami
              </button>
            </div>
          </div>
        </section>
        <section className="flex relative py-20 px-3 justify-center text-darkCharcoal bg-yellowGreenColorWheel items-center w-full flex-col">
          <div className="flex justify-center items-center max-w-7xl w-full flex-col">
            <div className="text-center mb-10">
              <h2 className="leading-[90px] text-platinum">
                Apa Saja Yang Kami Jual?
              </h2>
              <p className="text-platinum leading-10 mt-6 w-[706px]">
                Kami menyediakan beragam sayuran segar yang berkualitas tinggi
                dan Buah-buahan segar yang langsung dari petani.
              </p>
            </div>
            <div className="flex space-x-5 justify-center items-center">
              <div
                className="bg-white p-8 text-center rounded-xl drop-shadow-xl"
                onClick={() => navigate("/belanja")}
              >
                <h3 className="text-royalGreen text-[40px]">Sayur mayur</h3>
                <img
                  className="mt-8"
                  src="/images/sayur-mayur-home.png"
                  alt="sayur mayur"
                  loading="lazy"
                />
              </div>
              <div
                className="bg-white p-8 text-center rounded-xl drop-shadow-xl"
                onClick={() => navigate("/belanja")}
              >
                <h3 className="text-royalGreen text-[40px]">Buah buahan</h3>
                <img
                  className="mt-8"
                  src="/images/buah-buahan-home.png"
                  alt="sayur mayur"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center max-w-7xl flex-col py-44">
          <div className="w-full flex flex-col justify-center items-center">
            <h2 className="text-center w-[852px] leading-[90px]">
              Keunggulan Berbelanja di toko kami?
            </h2>
            <div className="flex justify-between mt-20 ">
              <div className="flex justify-between items-end flex-col">
                <div className="text-end">
                  <h4 className="text-royalGreen">Kualitas Tinggi</h4>
                  <p className="mt-3">
                    Kualitas produk sudah tidak diragukan lagi karena langsung
                    dari hasil panen.
                  </p>
                </div>
                <div className="text-end">
                  <h4 className="text-royalGreen">Tangan Pertama</h4>
                  <p className="mt-3">
                    Produk langsung turun dari hasil panen para petani.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-between w-full items-center">
                <img src="/images/food.png" alt="food" loading="lazy" />
                <button
                  type="button"
                  aria-label="belanja sekarang"
                  className="border border-royalGreen transition-all hover:bg-yellowGreen hover:text-black text-royalGreen mt-8 font-semibold rounded-xl px-10 py-3"
                  onClick={() => navigate("/belanja")}
                >
                  Belanja Sekarang
                </button>
              </div>
              <div className="flex justify-between items-start flex-col">
                <div>
                  <h4 className="text-royalGreen">Higienis</h4>
                  <p className="mt-3">Kebersihan produk terjaga dengan baik.</p>
                </div>
                <div>
                  <h4 className="text-royalGreen">Harga Terjangkau</h4>
                  <p className="mt-3">
                    Harga produk sangat terjangkau daripada harga dipasar.
                    karena langsung tangan pertama.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
