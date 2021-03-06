import Head from "next/head"
import { Component } from "react"
import { connect } from "react-redux"
import Button from "../../components/elements/button/Button"
import ProductCard from "../../components/elements/card/ProductCard"
import Link from "../../components/elements/link/Link"
import Tag, {
  TagSmall,
  TagTransparent,
} from "../../components/elements/tag/Tag"
import TopNavbar from "../../components/navigation/TopNavbar"
import productAction from "../../lib/store/product/product.action"

class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeSort: "asc",
      activeColor: "yellow",
      activeSize: 28,
    }
  }

  setActiveSort(str) {
    this.setState({ activeSort: str })
  }

  setActiveColor(str) {
    this.setState({ activeColor: str })
  }

  componentDidMount() {
    this.props.sortData("asc")
  }

  render() {
    const products = [...this.props.products]
    const { activeSort, activeColor, activeSize } = this.state
    return (
      <div>
        <Head>
          <title>Shoesmart: Toko Sepatu</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <TopNavbar></TopNavbar>

        <main className="bg-gray-100 px-8 pb-16 pt-16">
          <div className="flex flex-wrap mt-5">
            <div className="sm:w-1/6 md:w-1/6 hidden sm:block">
              <div className="sticky top-20">
                <div className="mb-5">
                  <div className="text-lg block font-medium pb-1">
                    <Link href="/products">Product</Link>
                  </div>
                  <div className="text-xs py-1">All</div>
                  <div className="text-xs py-1">Men</div>
                  <div className="text-xs py-1">Women</div>
                  <div className="text-xs py-1">Kids</div>
                </div>
                <div className="mb-5">
                  <div className="text-lg font-medium pb-1">Category</div>
                  <div className="text-xs py-1">All</div>
                  <div className="text-xs py-1">Men</div>
                  <div className="text-xs py-1">Women</div>
                  <div className="text-xs py-1">Kids</div>
                  <div className="text-xs py-1 font-medium">More...</div>
                </div>
                <div className="mb-5">
                  <div className="text-lg font-medium pb-1">Information</div>
                  <div className="text-xs py-1">About Us</div>
                  <div className="text-xs py-1">Faq</div>
                  <div className="text-xs py-1">Shipping</div>
                </div>
              </div>
            </div>
            <div className="sm:w-5/6 md:w-5/6">
              <div className="block mb-8">
                <div className="flex-auto sm:mb-4 lg:mt-0 ">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    autoComplete="given-name"
                    placeholder="Search your favorite shoes ..."
                    className="mt-1 py-1.5 px-3 focus:ring-indigo-500 shadow-sm sm:text-sm w-full lg:w-2/6 border-gray-300 rounded-md"
                  ></input>
                </div>
                <div className="flex-auto hidden sm:block">
                  <div className="flex flex-wrap justify-evenly lg:justify-start">
                    <Tag active={true}>ALL BRAND</Tag>
                    <Tag>All Brand</Tag>
                    <Tag>All Brand</Tag>
                    <Tag>All Brand</Tag>
                    <Tag>All Brand</Tag>
                    <Tag>All Brand</Tag>
                    <TagTransparent>{`More Brands >`}</TagTransparent>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl flex flex-wrap px-8 py-6">
                <div className="flex-1 px-3">
                  <div className="text-lg font-medium">Sort</div>
                  <div className="flex flex-wrap mt-3">
                    <TagSmall
                      className="border border-gray-400 ml-0 py-1 sm:mb-3"
                      active={activeSort == "asc"}
                      onClick={() => {
                        this.setActiveSort("asc")
                        this.props.sortData("asc")
                      }}
                    >
                      <small>Ascending</small>
                    </TagSmall>
                    <TagSmall
                      className="border border-gray-400 ml-0 py-1 sm:mb-3"
                      active={activeSort == "desc"}
                      onClick={() => {
                        this.setActiveSort("desc")
                        this.props.sortData("desc")
                      }}
                    >
                      <small>Descending</small>
                    </TagSmall>
                    <TagSmall
                      className="border border-gray-400 ml-0 py-1 sm:mb-3"
                      active={activeSort == "low-price"}
                      onClick={() => {
                        this.setActiveSort("low-price")
                        this.props.sortData("low-price")
                      }}
                    >
                      <small>Lower Price</small>
                    </TagSmall>
                    <TagSmall
                      className="border border-gray-400 ml-0 py-1 sm:mb-3"
                      active={activeSort == "high-price"}
                      onClick={() => {
                        this.setActiveSort("high-price")
                        this.props.sortData("high-price")
                      }}
                    >
                      <small>Higher Price</small>
                    </TagSmall>
                    <TagSmall
                      className="border border-gray-400 ml-0 py-1 sm:mb-3"
                      active={activeSort == "new"}
                      onClick={() => {
                        this.setActiveSort("new")
                        this.props.sortData("new")
                      }}
                    >
                      <small>Newest</small>
                    </TagSmall>
                    <TagSmall
                      className="border border-gray-400 ml-0 py-1 sm:mb-3"
                      active={activeSort == "old"}
                      onClick={() => {
                        this.setActiveSort("old")
                        this.props.sortData("old")
                      }}
                    >
                      <small>Oldest</small>
                    </TagSmall>
                  </div>
                </div>
                <div className="flex-1 px-3">
                  <div className="text-lg font-medium">Color</div>
                  <div className="flex flex-wrap mt-3">
                    <TagSmall
                      className={`border ${
                        activeColor == "red"
                          ? "bg-red-600 border-red-600"
                          : "border-gray-400"
                      }  ml-0 py-1 sm:mb-3`}
                      active={activeColor === "red"}
                      onClick={() => {
                        this.setActiveColor("red")
                      }}
                    >
                      <small>Red</small>
                    </TagSmall>
                    <TagSmall
                      className={`border ${
                        activeColor == "yellow"
                          ? "bg-yellow-500 border-yellow-500"
                          : "border-gray-400"
                      }  ml-0 py-1 sm:mb-3`}
                      active={activeColor === "yellow"}
                      onClick={() => {
                        this.setActiveColor("yellow")
                      }}
                    >
                      <small>Yellow</small>
                    </TagSmall>
                    <TagSmall
                      className={`border ${
                        activeColor == "green"
                          ? "bg-green-500 border-green-500"
                          : "border-gray-400"
                      }  ml-0 py-1 sm:mb-3`}
                      active={activeColor === "green"}
                      onClick={() => {
                        this.setActiveColor("green")
                      }}
                    >
                      <small>Green</small>
                    </TagSmall>
                    <TagSmall
                      className={`border ${
                        activeColor == "black"
                          ? "bg-black-500 border-black-500"
                          : "border-gray-400"
                      }  ml-0 py-1 sm:mb-3`}
                      active={activeColor === "black"}
                      onClick={() => {
                        this.setActiveColor("black")
                      }}
                    >
                      <small>Black</small>
                    </TagSmall>
                    <TagSmall
                      className={`border ${
                        activeColor == "blue"
                          ? "bg-blue-500 border-blue-500"
                          : "border-gray-400"
                      }  ml-0 py-1 sm:mb-3`}
                      active={activeColor === "blue"}
                      onClick={() => {
                        this.setActiveColor("blue")
                      }}
                    >
                      <small>Blue</small>
                    </TagSmall>
                    <TagSmall
                      className={`border ${
                        activeColor == "pink"
                          ? "bg-pink-500 border-pink-500"
                          : "border-gray-400"
                      }  ml-0 py-1 sm:mb-3`}
                      active={activeColor === "pink"}
                      onClick={() => {
                        this.setActiveColor("pink")
                      }}
                    >
                      <small>Pink</small>
                    </TagSmall>
                  </div>
                </div>
                <div className="flex-1 px-3">
                  <div className="text-lg font-medium">Size</div>
                  <div className="flex flex-wrap mt-3">
                    {[28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40].map(
                      (size) => (
                        <TagSmall
                          key={size}
                          className="border  border-gray-500 ml-0 sm:px-2 sm:mb-3"
                          active={activeSize == size}
                          onClick={() => {
                            this.setState({ activeSize: size })
                          }}
                        >
                          <small>{size}</small>
                        </TagSmall>
                      )
                    )}
                  </div>
                </div>
                <div className="flex-1 px-3">
                  <div className="text-lg font-medium">Price Range</div>
                  <div className="mt-3">
                    <div className="flex flex-wrap justify-between">
                      <div>
                        <small>Rp 0</small>
                      </div>
                      <div>
                        <small>Rp 2000</small>
                      </div>
                    </div>
                    <input type="range" className="input-slider w-full" />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap py-4">
                {products.map((item) => (
                  <div key={item?.id} className="w-3/6 sm:w-2/6 lg:w-1/5 p-2">
                    <ProductCard product={item}></ProductCard>
                  </div>
                ))}
              </div>
              <div className="text-center pt-10">
                <Button className="bg-gray-800 text-white rounded py-2">
                  Show More Product
                </Button>
              </div>
            </div>
          </div>
        </main>

        <footer style={{ background: "#E9F0F7" }} className="px-8 py-10">
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-4/6 flex flex-wrap">
              <div className="flex-1 pr-10 ">
                <div className="text-xl font-semibold pb-3">SHOESMART</div>
                <p className="text-xs text-gray-500 overflow-ellipsis">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid, error! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Aliquid, error!
                </p>
              </div>
              <div className="flex-1">
                <div className="text-base font-medium mb-3">Category</div>
                <div className="flex flex-wrap text-gray-500">
                  <div className="flex-1">
                    <div className="text-xs py-1">Boots</div>
                    <div className="text-xs py-1">Flats</div>
                    <div className="text-xs py-1">Heels</div>
                    <div className="text-xs py-1">Loafers</div>
                    <div className="text-xs py-1">Pantofels</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs py-1">About Us</div>
                    <div className="text-xs py-1">FAQ</div>
                    <div className="text-xs py-1">Shipping</div>
                    <div className="text-xs py-1">Return Policy</div>
                  </div>
                </div>
              </div>
              <div className="flex-none w-52 flex items-start">
                <img
                  src="/icons/twitter.svg"
                  width="24"
                  alt=""
                  className="mr-2"
                />
                <img
                  src="/icons/youtube.svg"
                  width="24"
                  alt=""
                  className="mr-2"
                />
                <img
                  src="/icons/facebook.svg"
                  width="24"
                  alt=""
                  className="mr-2"
                />
                <img
                  src="/icons/phone-call.svg"
                  width="24"
                  alt=""
                  className="mr-2"
                />
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

const mapState = (state) => ({
  products: state.product.products,
})

const mapDispatch = {
  sortData: productAction.sortData,
}

export default connect(mapState, mapDispatch)(Products)
