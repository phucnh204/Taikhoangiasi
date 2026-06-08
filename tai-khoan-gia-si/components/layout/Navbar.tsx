"use client";

import {
  Search,
  ShoppingCart,
  Heart,
  MessageCircle,
  Menu,
  CreditCard,
  Package,
  Newspaper,
  Phone,
  Mail
} from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1120]/95 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4">

        {/* Main Nav */}
        <div className="h-16 flex items-center gap-6">

          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <h1 className="text-2xl font-black tracking-tight">
              <span className="text-cyan-400">TaiKhoan</span>
              <span className="text-white">GiaSi</span>
            </h1>
          </div>

          {/* Search */}
          <div className="hidden md:block flex-1 max-w-2xl">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                type="text"
                placeholder="Tìm kiếm tài khoản, phần mềm..."
                className="
                  w-full
                  pl-11
                  pr-4
                  py-3
                  rounded-xl
                  bg-slate-900/80
                  border
                  border-slate-800
                  text-white
                  placeholder:text-slate-500
                  focus:outline-none
                  focus:border-cyan-500
                  focus:ring-2
                  focus:ring-cyan-500/20
                  transition-all
                "
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 ml-auto">

            <button
              className="
                p-2.5
                rounded-xl
                text-slate-400
                hover:text-white
                hover:bg-white/5
                transition-all
              "
            >
              <ShoppingCart size={20} />
            </button>

            <button
              className="
                p-2.5
                rounded-xl
                text-slate-400
                hover:text-red-400
                hover:bg-white/5
                transition-all
              "
            >
              <Heart size={20} />
            </button>

            <button
              className="
                p-2.5
                rounded-xl
                text-slate-400
                hover:text-cyan-400
                hover:bg-white/5
                transition-all
              "
            >
              <MessageCircle size={20} />
            </button>

            <button
              className="
                ml-2
                px-5
                py-2.5
                rounded-xl
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                text-white
                font-semibold
                hover:scale-105
                transition-all
              "
            >
              Đăng nhập
            </button>
          </div>
        </div>

        {/* Sub Menu */}
        <div className="hidden lg:flex items-center h-12 text-sm border-t border-white/5">

          <button className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition">
            <Menu size={16} />
            Sản phẩm
          </button>

          <button className="flex items-center gap-2 ml-6 text-slate-300 hover:text-cyan-400 transition">
            <CreditCard size={16} />
            Nạp tiền

            <span
              className="
                bg-gradient-to-r
                from-red-500
                to-orange-500
                text-white
                text-[10px]
                px-2
                py-0.5
                rounded-full
                font-semibold
              "
            >
              HOT
            </span>
          </button>

          <button className="flex items-center gap-2 ml-6 text-slate-300 hover:text-cyan-400 transition">
            <Package size={16} />
            Đơn hàng
          </button>

          <button className="flex items-center gap-2 ml-6 text-slate-300 hover:text-cyan-400 transition">
            <Newspaper size={16} />
            Blog
          </button>

          <div className="ml-auto flex items-center gap-6 text-xs text-slate-500">

            <div className="flex items-center gap-2">
              <Phone size={14} />
              24/7 Support
            </div>

            <div className="flex items-center gap-2">
              <Mail size={14} />
              support@taikhoangiasi.vn
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}