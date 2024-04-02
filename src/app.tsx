import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Belanja from "./pages/belanja";
import DeskripsiProduk from "./pages/belanja/deskripsi-produk";
import Keranjang from "./pages/belanja/keranjang";
import Home from "./pages/homepage";
import Notifikasi from "./pages/notifikasi";
import Profil from "./pages/profil";
import TambahProduk from "./pages/profil/tambah-produk";
import Tentang from "./pages/tentang";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/belanja" element={<Belanja />} />
        <Route path="/belanja/deskripsi-produk" element={<DeskripsiProduk />} />
        <Route path="/belanja/keranjang" element={<Keranjang />} />
        <Route path="/notifikasi" element={<Notifikasi />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/profil/tambah-produk" element={<TambahProduk />} />
        <Route path="/tentang" element={<Tentang />} />
      </Routes>
    </BrowserRouter>
  );
}
