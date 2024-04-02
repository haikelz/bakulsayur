import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center items-center bg-darkCharcoal flex-col">
      <div className="w-full flex justify-between items-start py-20 text-platinum max-w-7xl px-3">
        <div className="flex justify-center flex-col items-center">
          <h2 className="text-appleGreen">Bakul Sayur</h2>
          <p className="text-small text-platinum">Bergabung Bersama Kami</p>
          <ul className="flex space-x-6 my-5 justify-center items-center">
            <li>
              <a href="https://facebook.com">
                <img src="/images/facebook.svg" alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="https://tiktok.com">
                <img src="/images/tiktok.svg" alt="Tiktok" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com">
                <img src="/images/instagram.svg" alt="Instagram" />
              </a>
            </li>
          </ul>
          <p className="font-semibold mb-2.5 text-small text-platinum">
            Copyright © 2024 Krigan Pasupati Team
          </p>
          <p className="text-small text-platinum">All right reserved </p>
        </div>
        <div>
          <h4>Kategori</h4>
          <ul className="flex justify-start items-start mt-5 space-y-4 flex-col">
            <li>
              <Link to="/" className="text-platinum">
                Home
              </Link>
            </li>
            <li>
              <Link to="/belanja" className="text-platinum">
                Belanja
              </Link>
            </li>
            <li>
              <Link to="/tentang" className="text-platinum">
                Tentang
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Layanan</h4>
          <ul className="flex justify-start items-start mt-5 space-y-4 flex-col">
            <li>
              <a href="" className="text-platinum">
                Daftar Produsen
              </a>
            </li>
            <li>
              <a href="" className="text-platinum">
                Pengiriman produk
              </a>
            </li>
            <li>
              <a href="" className="text-platinum">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Kontak</h4>
          <ul className="flex justify-start items-start mt-5 space-y-4 flex-col">
            <li>
              <a href="" className="flex justify-center items-center space-x-3">
                <img src="/images/letter.svg" alt="Letter" />
                <p className="text-platinum">kriganpasupati@gmail.com</p>
              </a>
            </li>
            <li>
              <div className="flex justify-center items-center space-x-3">
                <img src="/images/phone.svg" alt="Phone" />
                <p className="text-platinum">+62 895 5995 9955</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
