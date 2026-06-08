import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  ArrowRight
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[#0b1120] relative overflow-hidden">

      {/* Glow background */}
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px]" />
      <div className="absolute -bottom-40 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10 relative z-10">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-black">
            <span className="text-cyan-400">TaiKhoan</span>
            <span className="text-white">GiaSi</span>
          </h2>

          <p className="mt-4 text-slate-400 text-sm leading-relaxed">
            Nền tảng cung cấp tài khoản số Premium (AI Tools, Design, Entertainment)
            với hệ thống tự động 24/7, tối ưu chi phí cho người dùng.
          </p>

          {/* Trust badges */}
          <div className="mt-5 flex flex-wrap gap-2">
            <div className="flex items-center gap-1 text-xs text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
              <ShieldCheck size={14} />
              Bảo hành
            </div>

            <div className="flex items-center gap-1 text-xs text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
              ⚡ Auto 24/7
            </div>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-5">
            Liên hệ
          </h3>

          <div className="space-y-4 text-sm text-slate-400">

            <div className="flex items-center gap-3">
              <Mail size={16} className="text-cyan-400" />
              support@taikhoangiasi.com
            </div>

            <div className="flex items-center gap-3">
              <Phone size={16} className="text-cyan-400" />
              Hotline 24/7
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-cyan-400 mt-1" />
              Cần Thơ, Việt Nam
            </div>

          </div>
        </div>

        {/* Links + CTA */}
        <div>
          <h3 className="text-white font-semibold mb-5">
            Liên kết nhanh
          </h3>

          <div className="grid grid-cols-2 gap-3 text-sm">
            {[
              "Chính sách",
              "Bảo mật",
              "FAQ",
              "Liên hệ",
              "API",
              "Blog"
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="
                  text-slate-400
                  hover:text-cyan-400
                  transition
                "
              >
                {item}
              </a>
            ))}
          </div>

          
        </div>

      </div>

     
    </footer>
  );
}