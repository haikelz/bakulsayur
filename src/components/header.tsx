import { Link, useLocation, useNavigate } from "react-router-dom";
import { tw } from "../lib/helpers";
import { useEffect, useState } from "react";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState<string>(
    localStorage.getItem("isLoggedIn") || "false"
  );

  const navigate = useNavigate();

  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn")) {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") || "false");
    }
  }, [setIsLoggedIn]);

  return (
    <>
      <header className="w-full flex z-50 backdrop-blur-lg justify-center flex-col fixed top-0 items-center px-3 bg-platinum">
        <div className="flex justify-center items-center max-w-7xl w-full">
          <div
            className={tw(
              "flex justify-center -translate-x-[183px] items-center",
              pathname === "/" && isLoggedIn === "true"
                ? "-translate-x-[183px]"
                : pathname.includes("/belanja") &&
                  pathname !== "/belanja/keranjang" &&
                  isLoggedIn === "true"
                ? " -translate-x-[69px]"
                : pathname === "/tentang" && isLoggedIn === "true"
                ? "translate-x-[60px]"
                : pathname === "/"
                ? "-translate-x-[155px]"
                : pathname.includes("/belanja") &&
                  pathname !== "/belanja/keranjang"
                ? "-translate-x-[41px]"
                : pathname === "/tentang"
                ? "translate-x-[87px]"
                : "hidden"
            )}
          >
            <div className="rounded-bl-lg bg-yellowGreenColorWheel h-[5px] w-[77px] rounded-br-lg" />
          </div>
        </div>
        <nav className="max-w-7xl flex justify-between py-3 items-center w-full">
          <button type="button" aria-label="bakul sayur logo">
            <img src="/images/logo.svg" alt="bakul sayur" />
          </button>
          <div className="flex justify-center items-center space-x-12 font-semibold">
            <Link to="/">Home</Link>
            <Link to="/belanja">Belanja</Link>
            <Link to="/tentang">Tentang</Link>
          </div>
          <div className="space-x-7 flex justify-center items-center">
            {isLoggedIn === "true" ? (
              <>
                <>
                  <button
                    type="button"
                    aria-label="cart"
                    onClick={() => navigate("/belanja/keranjang")}
                  >
                    <img
                      src={
                        pathname === "/belanja/keranjang"
                          ? "/images/shopping-cart-active.svg"
                          : "/images/shopping-cart.svg"
                      }
                      alt="cart"
                    />
                  </button>
                  <button
                    type="button"
                    aria-label="notification"
                    onClick={() => navigate("/notifikasi")}
                  >
                    <img
                      src={
                        pathname === "/notifikasi"
                          ? "/images/notification-active.svg"
                          : "/images/notification.svg"
                      }
                      alt="notification"
                    />
                  </button>
                </>
                <button
                  type="button"
                  aria-label="masuk"
                  className={tw(
                    "flex justify-center items-center space-x-5 border px-5 rounded-lg py-2",
                    pathname.includes("/profil")
                      ? "border-yellowGreenColorWheel"
                      : "border-darkCharcoal"
                  )}
                  onClick={() => navigate("/profil")}
                >
                  <span
                    className={
                      pathname.includes("/profil")
                        ? "text-yellowGreenColorWheel"
                        : "text-darkCharcoal"
                    }
                  >
                    User
                  </span>
                  <img
                    src={
                      pathname.includes("/profil")
                        ? "/images/user-active.svg"
                        : "/images/user.svg"
                    }
                    alt=""
                  />
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  aria-label="daftar"
                  className="border-royalGreen hover:bg-palmLeaf hover:text-darkCharcoal font-semibold transition-all border border-solid px-5 rounded-lg py-2 text-royalGreen"
                  onClick={() => (window.location.href = "/auth/register")}
                >
                  Daftar
                </button>
                <button
                  type="button"
                  aria-label="masuk"
                  className="bg-royalGreen hover:text-darkCharcoal hover:bg-palmLeaf transition-all font-semibold text-cultured px-5 rounded-lg py-2"
                  onClick={() => (window.location.href = "/auth/login")}
                >
                  Masuk
                </button>
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
