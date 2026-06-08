"use client";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import BannerCategories from "@/components/sections/BannerCategories";
import HeroBanner from "@/components/sections/HeroBanner";
import { Product, ProductCard } from "@/components/sections/ProductCard";
import { ArrowUpIcon, ChartArea, MessageCircle } from "lucide-react";
import { useState } from "react";
import { featuredProducts } from "./data/product";






function AnnouncementBar() {
  return (
    <div className="mx-4 mt-4 bg-[#1a1a3a] border border-blue-800/50 rounded-lg px-4 py-2.5 flex items-center justify-between text-sm text-gray-300">
      <div className="flex items-center gap-2">
        <span>📢</span>
        <span>
          <span className="text-cyan-400">Chào mừng bạn đến với Premikey!</span>
          {" "}Hệ thống cung cấp tài khoản AI & Giải trí tự động 24/7. Cam kết bảo hành uy tín - Hỗ trợ nhanh chóng!
        </span>
      </div>
      <button className="text-gray-500 hover:text-white ml-4">✕</button>
    </div>
  );
}




function FeaturedProducts() {
  const [showAll, setShowAll] = useState(false);
  const shown = showAll ? featuredProducts : featuredProducts.slice(0, 12);
  return (
    <section className="px-4 mt-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-orange-400">🔥</span>
            <h2 className="text-white text-xl font-bold">Sản phẩm nổi bật</h2>
          </div>
          <p className="text-gray-500 text-sm mt-0.5">Khám phá bộ sưu tập sản phẩm chất lượng cao được chọn lọc dành riêng cho bạn.</p>
        </div>
        <button className="text-cyan-400 text-sm border border-cyan-800 px-3 py-1.5 rounded-lg hover:bg-cyan-900/30 transition-colors">
          Xem tất cả →
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {shown.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
      {!showAll && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll(true)}
            className="bg-[#1e1e3a] border border-gray-700 text-gray-300 hover:text-white hover:border-cyan-700 px-6 py-2.5 rounded-lg text-sm font-medium transition-all"
          >
            Tải thêm sản phẩm
          </button>
        </div>
      )}
    </section>
  );
}






function ChatWidget() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button className="bg-cyan-500 hover:bg-cyan-400 text-white rounded-full px-4 py-2.5 text-sm font-semibold shadow-lg shadow-cyan-500/30 transition-all hover:scale-105 flex items-center gap-2">
        <MessageCircle/>   Chat hỗ trợ
      </button>
    </div>
  );
}

function ScrollToTop() {
  return (
    <div className="fixed bottom-16 right-6 z-50">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="w-9 h-9 bg-[#1e1e3a] border border-gray-700 hover:border-cyan-700 text-gray-400 hover:text-cyan-400 rounded-lg flex items-center justify-center transition-all"
      >
        <ArrowUpIcon className="w-5 h-5" />
      </button>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen bg-[#080816] text-white font-sans">

      <Navbar />
      <div className="max-w-7xl mx-auto">
        <HeroBanner />
        <BannerCategories />
        <AnnouncementBar />


        <FeaturedProducts />

      </div>
      <Footer />
      <ChatWidget />
      <ScrollToTop />
    </div>
  );
}