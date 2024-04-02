import Footer from "../components/footer";
import Header from "../components/header";
import { useTitle } from "../hooks";

export default function Tentang() {
  useTitle("Tentang");

  return (
    <>
      <Header />
      <main className="w-full flex justify-center items-center flex-col bg-cover bg-no-repeat bg-hero-tentang">
        <section className="flex text-center text-platinum justify-center min-h-screen max-w-7xl px-3 items-center w-full flex-col">
          <h1>Tentang Kami</h1>
          <p className="font-normal text-platinum mt-5 w-[1240px]">
            Selamat datang di Marketplace Pertanian, tempat di mana para petani,
            produsen, dan pembeli dapat terhubung secara langsung untuk
            memperdagangkan produk pertanian berkualitas. Kami didirikan dengan
            tujuan untuk mengatasi tantangan dalam rantai pasokan pertanian dan
            memperkuat ekosistem pertanian lokal.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
