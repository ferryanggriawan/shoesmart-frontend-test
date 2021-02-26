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
          className="text-right"
        >
          {`i`}
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
