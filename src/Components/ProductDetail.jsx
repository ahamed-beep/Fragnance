"use client"
import { Check } from "lucide-react"
import { useState } from "react"

export default function ProductBundle() {
  const [product1Selected, setProduct1Selected] = useState(true)
  const [product2Selected, setProduct2Selected] = useState(true)

  const productPrice = 19.9
  const totalPrice = (product1Selected ? productPrice : 0) + (product2Selected ? productPrice : 0)

  return (
    <div className="w-full max-w-sm bg-white border border-[#e5e5e5] p-6">
      <p className="text-[#666] text-sm mb-4 leading-relaxed">
        Pair it with our "100% natural essential oil blends to add aromatherapeutic benefits to your hair
      </p>

      {/* Product Bundle */}
      <div className="flex items-center justify-center gap-6 mb-6">
        {/* Product 1 */}
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-32 mb-3">
            <img src="/product-1.jpg" alt="Pair Essential 01 - Good Night" className="w-full h-full object-contain" />
            <button
              onClick={() => setProduct1Selected(!product1Selected)}
              className="absolute bottom-1 left-1 w-4 h-4 bg-white border border-[#999] flex items-center justify-center cursor-pointer hover:border-[#666] transition-colors"
              aria-label="Toggle Product 1"
            >
              {product1Selected && <Check className="w-3 h-3 text-[#333]" strokeWidth={3} />}
            </button>
          </div>
          <p className="text-xs text-[#666] mb-1">Pair Essential 01 - Good Night</p>
          <p className="text-sm font-medium">$19.90</p>
        </div>

        {/* Plus Sign */}
        <div className="text-2xl font-light text-[#333] mt-8">+</div>

        {/* Product 2 */}
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-32 mb-3">
            <img src="/product-2.jpg" alt="Pair Essential 01 - Rose Parade" className="w-full h-full object-contain" />
            <button
              onClick={() => setProduct2Selected(!product2Selected)}
              className="absolute bottom-1 left-1 w-4 h-4 bg-white border border-[#999] flex items-center justify-center cursor-pointer hover:border-[#666] transition-colors"
              aria-label="Toggle Product 2"
            >
              {product2Selected && <Check className="w-3 h-3 text-[#333]" strokeWidth={3} />}
            </button>
          </div>
          <p className="text-xs text-[#666] mb-1">Pair Essential 01 - Rose Parade</p>
          <p className="text-sm font-medium">$19.90</p>
        </div>
      </div>

      {/* Total Price */}
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#e5e5e5]">
        <span className="text-sm text-[#666]">Total price:</span>
        <span className="text-lg font-semibold">${totalPrice.toFixed(2)}</span>
      </div>

      {/* Add to Cart Button */}
      <button className="w-full bg-[#6b1c1c] hover:bg-[#5a1717] text-white h-11 text-sm font-medium rounded transition-colors">
        Add to Refined Basket
      </button>
    </div>
  )
}