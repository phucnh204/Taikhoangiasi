import {
  ShoppingCart,
  Star,
  ShieldCheck,
  ArrowRight
} from "lucide-react";
// ── Types ──────────────────────────────────────────────────────────────────
export interface Product {
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


export function ProductCard({ product }: { product: Product }) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden

        rounded-3xl

        border border-white/10
        bg-[#0b1120]

        transition-all
        duration-300

        hover:-translate-y-2
        hover:border-cyan-500/30
        hover:shadow-[0_20px_50px_rgba(6,182,212,.15)]
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity
          bg-gradient-to-br
          from-cyan-500/5
          via-transparent
          to-purple-500/5
        "
      />

      {/* Banner */}
      <div
        className={`
          relative
          h-44
          overflow-hidden
          bg-gradient-to-br
          ${product.bgGradient}
        `}
      >
        {/* Discount */}
        {product.discount && (
          <div
            className="
              absolute
              top-3
              left-3
              px-3 py-1

              rounded-full
              bg-red-500

              text-white
              text-xs
              font-bold
            "
          >
            {product.discount}
          </div>
        )}

        {/* Brand */}
        <div
          className="
            absolute
            top-3
            right-3

            px-3 py-1
            rounded-full

            bg-black/30
            backdrop-blur-md

            text-xs
            text-white
          "
        >
          PremiKey
        </div>

        {/* Icon */}
        <div
          className="
            absolute
            inset-0

            flex
            items-center
            justify-center
          "
        >
          <div
            className={`
              w-20 h-20
              rounded-3xl

              ${product.badgeColor}

              flex
              items-center
              justify-center

              text-4xl

              shadow-2xl

              transition-transform
              duration-300

              group-hover:scale-110
              group-hover:rotate-6
            `}
          >
            {product.emoji}
          </div>
        </div>

        {/* Verify */}
        {product.tag && (
          <div
            className="
              absolute
              left-3
              bottom-3

              flex
              items-center
              gap-1

              rounded-full

              bg-emerald-500/20
              border border-emerald-500/20

              px-3 py-1

              text-xs
              text-emerald-300
            "
          >
            <ShieldCheck size={12} />
            {product.tag}
          </div>
        )}

        {/* Badge */}
        <div
          className="
            absolute
            right-3
            bottom-3

            rounded-full
            bg-black/30

            backdrop-blur-md

            px-3 py-1
            text-xs
            text-white
          "
        >
          {product.badge}
        </div>
      </div>

      {/* Content */}
      <div className="relative p-5">
        {/* Title */}
        <h3
          className="
            line-clamp-2
            min-h-[52px]

            text-white
            font-semibold

            transition-colors

            group-hover:text-cyan-400
          "
        >
          {product.name}
        </h3>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">
          <Star
            size={14}
            className="fill-yellow-400 text-yellow-400"
          />

          <span className="text-sm text-gray-300">
            4.9
          </span>

          <span className="text-gray-600">
            •
          </span>

          <span className="text-sm text-gray-400">
            {product.sold} lượt mua
          </span>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-end gap-2">
          <span
            className="
              text-2xl
              font-black
              text-cyan-400
            "
          >
            {product.salePrice}
          </span>

          {product.originalPrice && (
            <span
              className="
                text-sm
                text-gray-500
                line-through
              "
            >
              {product.originalPrice}
            </span>
          )}
        </div>

        {/* CTA */}
        <div className="mt-5 flex gap-2">
          <button
            className="
              flex-1

              flex
              items-center
              justify-center
              gap-2

              rounded-xl

              bg-gradient-to-r
              from-cyan-500
              to-blue-600

              py-3

              font-semibold

              hover:scale-[1.02]

              transition-all
            "
          >
            <ShoppingCart size={16} />
            Mua ngay
          </button>

          <button
            className="
              w-12

              flex
              items-center
              justify-center

              rounded-xl

              border
              border-white/10

              hover:bg-white/5

              transition-all
            "
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}