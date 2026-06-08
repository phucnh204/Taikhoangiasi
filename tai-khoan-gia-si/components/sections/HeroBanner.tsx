import {
  Bot,
  Sparkles,
  Scissors,
  Palette,
  ArrowRight
} from "lucide-react";

const products = [
  {
    name: "Gemini",
    icon: Sparkles,
    color: "from-blue-500 to-indigo-600",
    position: "top-0 left-0"
  },
  {
    name: "ChatGPT",
    icon: Bot,
    color: "from-emerald-500 to-teal-600",
    position: "top-6 right-0"
  },
  {
    name: "Canva",
    icon: Palette,
    color: "from-purple-500 to-pink-600",
    position: "bottom-0 left-10"
  },
  {
    name: "CapCut",
    icon: Scissors,
    color: "from-pink-500 to-rose-600",
    position: "bottom-6 right-10"
  }
];

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden rounded-3xl mx-4 mt-5 border border-white/10 bg-[#0b1120]">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 h-[400px] w-[400px] bg-cyan-500/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] bg-purple-500/20 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle,rgba(255,255,255,.15) 1px,transparent 1px)",
            backgroundSize: "32px 32px"
          }}
        />
      </div>

      <div className="relative grid lg:grid-cols-2 gap-10 items-center px-8 lg:px-14 py-14">

        {/* LEFT */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-yellow-300">
            🔥 Flash Sale hôm nay
          </div>

          <h1 className="mt-5 text-5xl lg:text-6xl font-black leading-tight">
            <span className="text-white">
              TÀI KHOẢN
            </span>

            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              PREMIUM GIÁ SỈ
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-slate-300 text-lg leading-relaxed">
            Chuyên cung cấp tài khoản ChatGPT, Gemini,
            Canva, CapCut, Netflix, Spotify với hệ thống
            giao hàng tự động 24/7.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              className="
                flex items-center gap-2
                px-7 py-3
                rounded-xl
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                font-semibold
                hover:scale-105
                transition-all
              "
            >
              Mua ngay
              <ArrowRight size={18} />
            </button>

            <button
              className="
                px-7 py-3
                rounded-xl
                border
                border-white/10
                bg-white/5
                hover:bg-white/10
                transition-all
              "
            >
              Xem sản phẩm
            </button>
          </div>

          {/* Stats */}
          <div className="mt-8 flex flex-wrap gap-4">
            {[
              {
                value: "50.000+",
                label: "Đơn hàng"
              },
              {
                value: "99.8%",
                label: "Khách hài lòng"
              },
              {
                value: "24/7",
                label: "Hỗ trợ"
              }
            ].map((item) => (
              <div
                key={item.label}
                className="
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  px-5 py-3
                "
              >
                <div className="font-black text-cyan-400">
                  {item.value}
                </div>

                <div className="text-xs text-slate-400">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="hidden lg:flex justify-center">
          <div className="relative h-[320px] w-[320px]">

            {products.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.name}
                  className={`
                    absolute
                    ${item.position}
                    w-24 h-24
                    rounded-3xl
                    bg-gradient-to-br
                    ${item.color}
                    border border-white/10
                    backdrop-blur-xl
                    shadow-2xl
                    flex flex-col
                    items-center
                    justify-center
                    hover:scale-110
                    transition
                  `}
                >
                  <Icon size={32} />

                  <span className="mt-2 text-xs font-medium">
                    {item.name}
                  </span>
                </div>
              );
            })}

            {/* Center Card */}
            <div
              className="
                absolute
                inset-0
                m-auto
                h-32
                w-32
                rounded-full
                border border-cyan-500/20
                bg-white/5
                backdrop-blur-xl
                flex items-center
                justify-center
              "
            >
              <div className="text-center">
                <div className="text-3xl font-black text-cyan-400">
                  24/7
                </div>

                <div className="text-xs text-slate-400">
                  Auto Delivery
                </div>
              </div>
            </div>

            {/* Revenue Card */}
            <div
              className="
                absolute
                bottom-0
                left-1/2
                -translate-x-1/2

                rounded-2xl
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                px-5 py-4
              "
            >
              <div className="text-xs text-slate-400">
                Đơn hàng hôm nay
              </div>

              <div className="text-xl font-black text-green-400">
                +1.248
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}