"use client";

import { useState } from "react";

// ── Types ──────────────────────────────────────────────────────────────────
interface Product {
  id: number;
  name: string;
  badge: string;
  badgeColor: string;
  discount: string;
  originalPrice: string;
  salePrice: string;
  sold: number;
  emoji: string;
  bgGradient: string;
  tag?: string;
}

// ── Data ───────────────────────────────────────────────────────────────────
const featuredProducts: Product[] = [
  {
    id: 1, name: "Tài Khoản Gemini AI", badge: "6 Tháng", badgeColor: "bg-blue-500",
    discount: "Sale 68%", originalPrice: "350.000₫", salePrice: "79.000₫",
    sold: 767, emoji: "✨", bgGradient: "from-blue-600 to-indigo-700", tag: "Ulimited",
  },
  {
    id: 2, name: "Canva Pro và Education", badge: "1 Tháng", badgeColor: "bg-purple-500",
    discount: "Sale 60%", originalPrice: "169.000₫", salePrice: "39.000₫",
    sold: 347, emoji: "🎨", bgGradient: "from-purple-600 to-pink-600",
  },
  {
    id: 3, name: "Mua Tài Khoản Netflix Premium 4K Giá Rẻ, Giao Nhanh", badge: "1 Tháng", badgeColor: "bg-red-600",
    discount: "Sale 76%", originalPrice: "279.000₫", salePrice: "79.000₫",
    sold: 76, emoji: "🎬", bgGradient: "from-red-700 to-red-900",
  },
  {
    id: 4, name: "Tài Khoản ChatGPT Open AI", badge: "1 Tháng", badgeColor: "bg-emerald-500",
    discount: "Sale 51%", originalPrice: "450.000₫", salePrice: "79.000₫",
    sold: 355, emoji: "🤖", bgGradient: "from-teal-600 to-emerald-700",
  },
  {
    id: 5, name: "CapCut Pro", badge: "1 Tháng", badgeColor: "bg-pink-500",
    discount: "Sale 61%", originalPrice: "99.000₫", salePrice: "39.000₫",
    sold: 256, emoji: "✂️", bgGradient: "from-pink-600 to-rose-700",
  },
  {
    id: 6, name: "Tài khoản Grok AI", badge: "1 Tháng", badgeColor: "bg-slate-500",
    discount: "Sale 71%", originalPrice: "400.000₫", salePrice: "15.000₫",
    sold: 99, emoji: "🧠", bgGradient: "from-slate-600 to-gray-800",
  },
  {
    id: 7, name: "Tài Khoản Claude AI", badge: "1 Tháng", badgeColor: "bg-orange-500",
    discount: "Sale 60%", originalPrice: "1.999.999₫", salePrice: "229.000₫",
    sold: 48, emoji: "🌟", bgGradient: "from-orange-600 to-amber-700",
  },
  {
    id: 8, name: "Adobe", badge: "1 Tháng", badgeColor: "bg-red-500",
    discount: "Sale 75%", originalPrice: "159.000₫", salePrice: "99.000₫",
    sold: 51, emoji: "🅰️", bgGradient: "from-red-600 to-red-800",
  },
  {
    id: 9, name: "Youtube Premium & YouTube Music", badge: "1 Tháng", badgeColor: "bg-red-500",
    discount: "Sale 80%", originalPrice: "569.000₫", salePrice: "39.000₫",
    sold: 94, emoji: "▶️", bgGradient: "from-red-600 to-rose-800",
  },
  {
    id: 10, name: "Google Antigravity", badge: "Vĩnh viễn", badgeColor: "bg-blue-500",
    discount: "", originalPrice: "", salePrice: "Liên hệ",
    sold: 49, emoji: "🔷", bgGradient: "from-blue-500 to-cyan-600",
  },
  {
    id: 11, name: "Spotify Premium", badge: "1 Tháng", badgeColor: "bg-green-500",
    discount: "Sale 90%", originalPrice: "559.000₫", salePrice: "79.000₫",
    sold: 29, emoji: "🎵", bgGradient: "from-green-600 to-emerald-800",
  },
  {
    id: 12, name: "Key Microsoft Office", badge: "Vĩnh viễn", badgeColor: "bg-blue-600",
    discount: "", originalPrice: "", salePrice: "Liên hệ",
    sold: 37, emoji: "📄", bgGradient: "from-blue-600 to-blue-800",
  },
];

const bestSellers = featuredProducts.slice(0, 4);

const categories = [
  { icon: "🤖", label: "Ứng dụng AI" },
  { icon: "🎨", label: "Đồ Họa" },
  { icon: "📚", label: "Học Tập" },
  { icon: "⚡", label: "Siêu Ưu Đãi Trong Tháng" },
  { icon: "🎬", label: "Xem Phim" },
  { icon: "🎵", label: "Nghe Nhạc" },
  { icon: "🪟", label: "Windows Office" },
  { icon: "🔒", label: "VPN" },
  { icon: "📱", label: "ESIM" },
  { icon: "🎮", label: "Sắn Khấu" },
];

const bannerCategories = [
  { label: "KHÁM PHÁ THẾ GIỚI AI", color: "from-blue-700 to-indigo-900", emoji: "🤖" },
  { label: "ĐỒ HỌA & SÁNG TẠO", color: "from-purple-700 to-pink-900", emoji: "🎨" },
  { label: "HỌC TẬP & LANGUAGE", color: "from-green-700 to-teal-900", emoji: "📖" },
  { label: "TIỆN ÍCH & GIẢI TRÍ", color: "from-orange-600 to-red-900", emoji: "🎯" },
];



function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-[#0f0f23] border-b border-gray-800 px-4 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center gap-4">
        {/* Logo */}
        <div className="flex items-center gap-1 mr-6 flex-shrink-0">
          <span className="text-2xl font-black tracking-tight">
            <span className="text-cyan-400">TaiKhoan</span><span className="text-white">Giasi</span>
          </span>
        </div>
        {/* Search */}
        <div className="flex-1 max-w-xl relative">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            className="w-full bg-[#1e1e3a] border border-gray-700 rounded-lg px-4 py-2 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-cyan-400">🔍</button>
        </div>
        {/* Icons */}
        <div className="flex items-center gap-4 ml-4">
          <button className="text-gray-400 hover:text-white text-lg">🛒</button>
          <button className="text-gray-400 hover:text-white text-lg">❤️</button>
          <button className="text-gray-400 hover:text-white text-lg">💬</button>
          <button className="bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-semibold px-4 py-1.5 rounded-lg transition-colors">
            Login
          </button>
        </div>
      </div>
      {/* Sub-nav */}
      <div className="max-w-7xl mx-auto flex items-center gap-6 mt-2 text-sm">
        <button className="text-gray-300 hover:text-cyan-400 flex items-center gap-1">☰ Sản phẩm</button>
        <button className="flex items-center gap-1 text-gray-300 hover:text-cyan-400">
          💳 Nạp tiền <span className="bg-red-500 text-white text-xs px-1 rounded ml-1">HOT</span>
        </button>
        <button className="text-gray-300 hover:text-cyan-400">📦 Đơn hàng</button>
        <button className="text-gray-300 hover:text-cyan-400">📝 Blogs</button>
        <div className="ml-auto flex items-center gap-6 text-xs text-gray-500">
          <span>📞 HOTLINE 24/7</span>
          <span>✉️ support@premikey.id.vn</span>
        </div>
      </div>
    </nav>
  );
}

function HeroBanner() {
  return (
    <div className="relative bg-gradient-to-br from-[#0a0a1a] via-[#0d0d2b] to-[#1a0a2e] overflow-hidden rounded-xl mx-4 mt-4">
      {/* Stars bg */}
      <div className="absolute inset-0 opacity-30"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
      {/* Purple glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-700 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20" />

      <div className="relative flex items-center justify-between px-10 py-10 min-h-[220px]">
        <div className="flex-1">
          <div className="inline-block bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded mb-2 animate-pulse">🔥 HOT</div>
          <h1 className="text-4xl font-black text-white leading-tight">
            FLASH<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">SALE HOT</span>
          </h1>
          <p className="text-gray-300 text-sm mt-2 max-w-xs leading-relaxed">
            Deal tốt cho Gemini, ChatGPT, CapCut, Canva<br />
            • Giá cạnh tranh - Tự động 24/7 - Hỗ trợ nhanh<br />
            • Sản phẩm nổi bật, ưu đãi hấp dẫn nổi ngày
          </p>
          <button className="mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold px-6 py-2.5 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/30">
            Mua ngay →
          </button>
        </div>
        {/* Product logos floating */}
        <div className="relative w-64 h-48 hidden md:block">
          {[
            { emoji: "✨", label: "Gemini", x: "left-0", y: "top-0", size: "text-3xl", bg: "from-blue-600 to-indigo-700" },
            { emoji: "🤖", label: "ChatGPT", x: "right-0", y: "top-4", size: "text-3xl", bg: "from-teal-600 to-emerald-700" },
            { emoji: "🎨", label: "Canva", x: "left-8", y: "bottom-0", size: "text-3xl", bg: "from-purple-600 to-pink-600" },
            { emoji: "✂️", label: "CapCut", x: "right-8", y: "bottom-4", size: "text-3xl", bg: "from-pink-600 to-rose-700" },
          ].map((item, i) => (
            <div key={i} className={`absolute ${item.x} ${item.y} w-14 h-14 rounded-2xl bg-gradient-to-br ${item.bg} flex items-center justify-center shadow-xl border border-white/10`}>
              <span className={item.size}>{item.emoji}</span>
            </div>
          ))}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-2xl">⚡</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BannerCategories() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 px-4 mt-4">
      {bannerCategories.map((cat, i) => (
        <button key={i} className={`bg-gradient-to-br ${cat.color} rounded-xl p-4 text-left hover:opacity-90 transition-opacity border border-white/5`}>
          <div className="text-2xl mb-1">{cat.emoji}</div>
          <div className="text-white text-xs font-bold">{cat.label}</div>
          <div className="text-white/60 text-xs mt-1">Khám phá →</div>
        </button>
      ))}
    </div>
  );
}

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

function FilterTabs() {
  const [active, setActive] = useState("Tất cả");
  const tabs = ["Tất cả", "Tiện ích", "Gift cards", "Game"];
  return (
    <div className="px-4 mt-4 flex gap-2 flex-wrap">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
            active === tab
              ? "bg-cyan-500 text-white"
              : "bg-[#1e1e3a] text-gray-400 hover:text-white border border-gray-700"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

function CategoryIcons() {
  return (
    <div className="px-4 mt-4">
      <div className="bg-[#0f0f23] border border-gray-800 rounded-xl p-4">
        <div className="grid grid-cols-5 md:grid-cols-10 gap-3">
          {categories.map((cat, i) => (
            <button key={i} className="flex flex-col items-center gap-1.5 group">
              <div className="w-12 h-12 bg-[#1e1e3a] rounded-xl flex items-center justify-center text-xl group-hover:bg-[#2a2a5a] transition-colors border border-gray-800 group-hover:border-cyan-800">
                {cat.icon}
              </div>
              <span className="text-gray-400 text-xs text-center leading-tight group-hover:text-cyan-400 transition-colors">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-[#0f0f23] border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-800 transition-all hover:shadow-lg hover:shadow-cyan-900/20 group cursor-pointer">
      {/* Thumbnail */}
      <div className={`relative bg-gradient-to-br ${product.bgGradient} h-36 flex items-center justify-center`}>
        {product.discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">
            {product.discount}
          </div>
        )}
        <div className="absolute top-2 right-2 bg-black/40 text-white text-xs px-2 py-0.5 rounded-full">
          PremiKey
        </div>
        {product.tag && (
          <div className="absolute bottom-2 left-2 bg-blue-500/80 text-white text-xs px-2 py-0.5 rounded">
            ✓ {product.tag}
          </div>
        )}
        <div className={`w-14 h-14 ${product.badgeColor} rounded-2xl flex items-center justify-center text-3xl shadow-xl`}>
          {product.emoji}
        </div>
        <div className="absolute bottom-2 right-2 bg-black/40 text-white text-xs px-2 py-0.5 rounded-full">
          {product.badge}
        </div>
      </div>
      {/* Info */}
      <div className="p-3">
        <div className="text-white text-sm font-semibold leading-tight line-clamp-2 min-h-[40px] group-hover:text-cyan-300 transition-colors">
          {product.name}
        </div>
        <div className="mt-2 flex items-end gap-2">
          <span className="text-cyan-400 font-bold text-base">{product.salePrice}</span>
          {product.originalPrice && (
            <span className="text-gray-500 text-xs line-through">{product.originalPrice}</span>
          )}
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-gray-500 text-xs">Đã bán {product.sold}</span>
          <button className="text-xs bg-cyan-500/20 text-cyan-400 border border-cyan-800 hover:bg-cyan-500 hover:text-white px-2 py-1 rounded-lg transition-all">
            🛒 Order
          </button>
        </div>
      </div>
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

function BestSellers() {
  return (
    <section className="px-4 mt-10">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-400">🏆</span>
            <h2 className="text-white text-xl font-bold">Sản phẩm bán chạy</h2>
          </div>
          <p className="text-gray-500 text-sm">Top sản phẩm được mua nhiều nhất</p>
        </div>
        <button className="text-cyan-400 text-sm border border-cyan-800 px-3 py-1.5 rounded-lg hover:bg-cyan-900/30 transition-colors">
          Xem tất cả →
        </button>
      </div>
      <div className="relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {bestSellers.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
        <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-8 h-8 bg-[#1e1e3a] border border-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:border-cyan-700 transition-all">‹</button>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-8 h-8 bg-[#1e1e3a] border border-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:border-cyan-700 transition-all">›</button>
      </div>
    </section>
  );
}

function RecentlyViewed() {
  const p = featuredProducts[0];
  return (
    <section className="px-4 mt-10">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-blue-400">🕐</span>
            <h2 className="text-white text-xl font-bold">Đã xem gần đây</h2>
          </div>
          <p className="text-gray-500 text-sm">Bạn đã xem 1 sản phẩm gần đây</p>
        </div>
        <button className="text-cyan-400 text-sm border border-cyan-800 px-3 py-1.5 rounded-lg hover:bg-cyan-900/30 transition-colors">
          Xem tất cả →
        </button>
      </div>
      <div className="relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ProductCard product={p} />
        </div>
        <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-8 h-8 bg-[#1e1e3a] border border-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:border-cyan-700 transition-all">‹</button>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-8 h-8 bg-[#1e1e3a] border border-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:border-cyan-700 transition-all">›</button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-16 bg-[#0a0a1a] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <div className="text-2xl font-black mb-3">
            <span className="text-cyan-400">Premi</span><span className="text-white">Key</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Premikey cung cấp giải pháp tài khoản số Premium cho học tập, làm việc, sáng tạo nội dung và giải trí. Nhanh chóng, tiện lợi, tối ưu chi phí.
          </p>
        </div>
        {/* Contact */}
        <div>
          <h3 className="text-white font-bold mb-3 flex items-center gap-2">✉️ Liên hệ</h3>
          <div className="space-y-2 text-sm text-gray-500">
            <div className="flex items-center gap-2">📧 support@premikey.id.vn</div>
            <div className="flex items-center gap-2">📞 Hotline 24/7</div>
            <div className="flex items-start gap-2">
              📍 Tòa tháp Skyline, KĐT Văn Quán, Phường Văn Quán, Quận Hà Đông, Hà Nội.
            </div>
          </div>
        </div>
        {/* Links */}
        <div>
          <h3 className="text-white font-bold mb-3 flex items-center gap-2">🔗 Liên kết</h3>
          <div className="space-y-2 text-sm">
            {["Chính sách", "Quyền riêng tư", "Câu hỏi thường gặp", "Liên hệ chúng tôi", "Tài liệu API"].map((link) => (
              <div key={link}>
                <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">{link}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 py-4 text-center text-gray-600 text-xs">
        © 2026 All Copyrights Reserved by Premikey – Giải pháp tài khoản số Premium toàn diện | Software By CMSNT.CO
      </div>
    </footer>
  );
}

function ChatWidget() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button className="bg-cyan-500 hover:bg-cyan-400 text-white rounded-full px-4 py-2.5 text-sm font-semibold shadow-lg shadow-cyan-500/30 transition-all hover:scale-105 flex items-center gap-2">
        💬 Chat hỗ trợ
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
        ↑
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
        <FilterTabs />
        <CategoryIcons />
        <FeaturedProducts />
        <BestSellers />
        <RecentlyViewed />
      </div>
      <Footer />
      <ChatWidget />
      <ScrollToTop />
    </div>
  );
}