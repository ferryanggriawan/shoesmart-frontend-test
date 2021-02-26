import { Component } from "react"

class ProductCard extends Component {
  render() {
    return (
      <div className="bg-white px-3 py-2 rounded-md">
        <div
          style={{
            backgroundImage: "url(/images/produc-1.jpeg)",
            backgroundPosition: "center center",
            backgroundSize: "90%",
            backgroundRepeat: "no-repeat",
            maxWidth: "100%",
            height: "auto",
            aspectRatio: "1/1",
          }}
          className="flex flex-wrap justify-end items-start"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 stroke-current text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
        </div>
        <div className="pt-3 pb-2">
          <div className="text-gray-400 text-xs py-1 truncate">Nama Sepatu</div>
          <div className="font-medium truncate">Rp 100.000</div>
        </div>
      </div>
    )
  }
}

export default ProductCard
