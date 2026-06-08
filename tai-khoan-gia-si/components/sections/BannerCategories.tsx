import {
  Bot,
  Sparkles,
  Palette,
  Scissors,
  ArrowRight
} from "lucide-react";

const bannerCategories = [
  {
    label: "ChatGPT Plus",
    products: "120+ sản phẩm",
    icon: Bot,
    color: "from-emerald-500/20 to-teal-500/20",
    glow: "group-hover:shadow-emerald-500/20"
  },
  {
    label: "Gemini Pro",
    products: "80+ sản phẩm",
    icon: Sparkles,
    color: "from-blue-500/20 to-indigo-500/20",
    glow: "group-hover:shadow-blue-500/20"
  },
  {
    label: "Canva Pro",
    products: "60+ sản phẩm",
    icon: Palette,
    color: "from-purple-500/20 to-pink-500/20",
    glow: "group-hover:shadow-purple-500/20"
  },
  {
    label: "CapCut Pro",
    products: "40+ sản phẩm",
    icon: Scissors,
    color: "from-pink-500/20 to-rose-500/20",
    glow: "group-hover:shadow-pink-500/20"
  }
];

export default function BannerCategories() {
  return (
    <section className="px-4 mt-5">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {bannerCategories.map((cat) => {
          const Icon = cat.icon;

          return (
            <button
              key={cat.label}
              className={`
                group
                relative
                overflow-hidden
                rounded-3xl

                border border-white/10
                bg-gradient-to-br ${cat.color}

                backdrop-blur-xl

                p-5

                transition-all
                duration-300

                hover:-translate-y-2
                hover:border-cyan-400/30
                hover:shadow-2xl

                ${cat.glow}
              `}
            >
              {/* Glow */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  bg-gradient-to-r
                  from-cyan-500/10
                  to-purple-500/10
                "
              />

              <div className="relative z-10">

                {/* Icon */}
                <div
                  className="
                    w-14 h-14
                    rounded-2xl
                    bg-white/10
                    border border-white/10
                    flex items-center justify-center
                  "
                >
                  <Icon
                    size={28}
                    className="text-white"
                  />
                </div>

                {/* Content */}
                <h3 className="mt-4 text-white font-bold text-lg">
                  {cat.label}
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  {cat.products}
                </p>

                <div
                  className="
                    mt-4
                    flex items-center
                    gap-2

                    text-cyan-400
                    font-medium
                    text-sm
                  "
                >
                  Khám phá

                  <ArrowRight
                    size={16}
                    className="
                      transition-transform
                      group-hover:translate-x-1
                    "
                  />
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}