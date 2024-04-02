import { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { useTitle } from "../hooks";
import ProtectedRoute from "../components/protected-route";
import Breadcrumbs from "../components/breadcrumbs";

export default function Notifikasi() {
  const [isLoggedIn] = useState<string>(
    localStorage.getItem("isLoggedIn") || "false"
  );

  useTitle("Notifikasi");

  return (
    <ProtectedRoute isLoggedIn={isLoggedIn}>
      <Header />
      <main className="w-full flex justify-center items-center my-16 flex-col">
        <section className="flex justify-center items-start w-full px-3 mt-14 flex-col max-w-7xl">
          <Breadcrumbs />
          <div className="space-y-14 w-full mt-16 flex flex-col justify-center items-center">
            <div className="py-5 w-full px-6 flex justify-between items-center  shadow-innerInput rounded-l-2xl rounded-tr-2xl">
              <div className="flex justify-center items-center w-fit space-x-7">
                <img src="/images/user-notification.svg" alt="user" />
                <div>
                  <p className="font-semibold text-semiMedium">
                    Siti Badriyah{" "}
                    <span className="font-normal ml-3">memesan....</span>
                  </p>
                  <p className="font-normal mt-2">1 Kg Apel - 1 Kg Jeruk</p>
                </div>
              </div>
              <span>Rp 10.000</span>
            </div>
            <div className="py-5 w-full px-6 flex justify-between items-center  shadow-innerInput rounded-l-2xl rounded-tr-2xl">
              <div className="flex justify-center items-center w-fit space-x-7">
                <img src="/images/user-notification.svg" alt="user" />
                <div>
                  <p className="font-semibold text-semiMedium">
                    Udin Vandores{" "}
                    <span className="font-normal ml-3">memesan....</span>
                  </p>
                  <p className="font-normal mt-2">1 Kg Apel</p>
                </div>
              </div>
              <span>Rp 5.000</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </ProtectedRoute>
  );
}
