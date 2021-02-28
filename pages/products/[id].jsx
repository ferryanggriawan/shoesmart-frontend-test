import Head from "next/head"
import { withRouter } from "next/router"
import { Component } from "react"
import Button from "../../components/elements/button/Button"
import ProductCard from "../../components/elements/card/ProductCard"
import StarIcon from "../../components/elements/icon/StarIcon"
import { TagSmall } from "../../components/elements/tag/Tag"
import TopNavbar from "../../components/navigation/TopNavbar"
import products from "../../lib/api/products"

const moreProduct = products.slice(0, 5)

class ProductDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: null,
      imageUrl: "",
      activeSize: 39,
      qty: 1,
    }
  }

  componentDidMount() {
    let id = this.props.router.query.id

    if (id === undefined) {
      const urlArr = window.location.href.split("/")
      id = parseInt(urlArr[4])
    }

    const items = products.filter((item) => item.id === parseInt(id))

    if (items.length > 0) {
      this.setState({ item: items[0], imageUrl: items[0].image_url })
    }
  }

  componentDidUpdate(nextProps, nextState) {
    const { router } = nextProps

    if (router.query.id !== undefined) {
      const urlArr = window.location.href.split("/")
      const nextId = parseInt(urlArr[4])

      if (this.state.item.id !== nextId) {
        const items = products.filter((item) => item.id === nextId)

        this.setState({ item: items[0], imageUrl: items[0].image_url })
      }
    }
  }

  render() {
    const { activeSize, qty, item } = this.state
    console.log(this.state)
    return (
      <div>
        <Head>
          <title>Shoesmart: Toko Sepatu</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <TopNavbar></TopNavbar>

        <main className="bg-gray-100 px-8 pb-16 pt-16">
          <div className="mb-6 mt-12">
            <div className="bg-blue-200 flex flex-wrap z-10 rounded-xl">
              <div className="flex-1">
                <div className="flex flex-wrap mb-3">
                  <div className="flex-1 p-3 pb-0">
                    <div
                      style={{
                        height: "300px",
                        backgroundImage: `url(${this.state.item?.image_url})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                      }}
                      className="rounded-xl"
                    ></div>
                  </div>
                  <div className="flex-1 py-3 pb-0">
                    <div className="pb-6 flex flex-wrap">
                      <div className="flex-auto">
                        <Button className="bg-gray-800 text-white rounded sm:m-0 sm:text-xs">
                          Description
                        </Button>
                      </div>
                      <div className="flex-auto">
                        <Button className="sm:m-0 sm:text-xs">Details</Button>
                      </div>
                      <div className="flex-auto">
                        <Button className="sm:m-0 sm:text-xs">
                          Instruction
                        </Button>
                      </div>
                    </div>
                    <div className="">
                      <div
                        className="bg-white rounded-xl px-5 py-6"
                        style={{ height: "240px", overflow: "auto" }}
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: this.state.item?.description,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap pb-3">
                  {[0, 1, 2, 3].map((idx) => {
                    const img = item?.variants[0].thumbnail_urls[idx]

                    if (img === undefined) {
                      return (
                        <div key={idx} className="flex-auto pl-3">
                          <div className="h-24 rounded-xl"></div>
                        </div>
                      )
                    }
                    return (
                      <div key={idx} className="flex-auto pl-3">
                        <div
                          className="bg-white h-24 rounded-xl"
                          style={{
                            backgroundImage: `url(${item?.variants[0].thumbnail_urls[idx]})`,
                            backgroundSize: "50%",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center",
                          }}
                        ></div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="flex-none pl-8">
                <div
                  className="bg-white shadow-xl h-full rounded-xl px-6 py-6 z-0"
                  style={{ width: "320px" }}
                >
                  <div className="text-xl font-medium py-3">
                    {this.state.item?.name}
                  </div>
                  <div className="pt-3">
                    <div className="text-xl font-medium">Size</div>
                    <div className="mt-1">
                      {[39, 40, 41, 43].map((size) => (
                        <TagSmall
                          key={size}
                          className="border inline-block border-gray-500 ml-0 sm:px-2 sm:mb-3"
                          active={activeSize == size}
                          onClick={() => {
                            this.setState({ activeSize: size })
                          }}
                        >
                          <small className="font-medium">{size}</small>
                        </TagSmall>
                      ))}
                    </div>
                  </div>
                  <div className="pt-3">
                    <div className="text-xl font-medium">Color</div>
                    <div className="mt-1">
                      {this.state.item?.colors?.map((item) => (
                        <TagSmall
                          key={item?.id}
                          className="border inline-block border-gray-500 ml-0 sm:px-2 sm:mb-3"
                          active={true}
                        >
                          <small className="font-medium">{item?.name}</small>
                        </TagSmall>
                      ))}
                    </div>
                  </div>
                  <div className="py-3 flex flex-wrap">
                    <div className="flex-1 text-xl font-medium">Quantity</div>
                    <div className="flex-none bg-blue-200 rounded-full">
                      <Button
                        className="rounded-full border bg-white border-gray-600 sm:px-3 sm:py-1 sm:mr-0"
                        onClick={() => {
                          if (qty >= 1) {
                            this.setState({ qty: qty - 1 })
                          }
                        }}
                      >
                        -
                      </Button>
                      <div className="inline-block w-10 text-center">{qty}</div>
                      <Button
                        className="rounded-full border bg-white border-gray-600 sm:px-3 sm:py-1 sm:mr-0"
                        onClick={() => {
                          this.setState({ qty: qty + 1 })
                        }}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                  <div className="py-3">
                    <div className="text-xl font-medium">Price</div>
                    <div className="mt-1">
                      <div className="text-3xl font-medium">
                        Rp {this.state.item?.price}
                      </div>
                    </div>
                  </div>
                  <div className="py-3">
                    <Button className="border border-gray-800 rounded">
                      Add To Cart
                    </Button>
                    <Button className="border bg-gray-800 text-white rounded-lg text-lg font-medium">
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-wrap">
              <div className="pr-3">
                <div className="bg-white py-8 px-9 rounded-xl">
                  <div>
                    <span className="text-7xl font-semibold">5.0</span>
                    <span>/5</span>
                  </div>
                  <div className="pt-1">
                    <StarIcon className="fill-current text-yellow-400"></StarIcon>
                    <StarIcon className="fill-current text-yellow-400"></StarIcon>
                    <StarIcon className="fill-current text-yellow-400"></StarIcon>
                    <StarIcon className="fill-current text-yellow-400"></StarIcon>
                    <StarIcon className="fill-current text-yellow-400"></StarIcon>
                  </div>
                  <div className="pt-2">
                    <div className="font-medium">Sangat Baik</div>
                  </div>
                </div>
              </div>
              <div className="pr-3 flex-1">
                <div className="bg-white py-6 px-9 rounded-xl text-left">
                  <div className="font-medium pb-5">
                    What they think about this product?
                  </div>
                  <div className="flex flex-wrap">
                    <div className="text-center px-5">
                      <div
                        className="rounded-full bg-gray-400 mx-auto"
                        style={{ width: "90px", height: "90px" }}
                      ></div>
                      <div className="pt-1">
                        <StarIcon className="fill-current text-yellow-400"></StarIcon>
                        <StarIcon className="fill-current text-yellow-400"></StarIcon>
                        <StarIcon className="fill-current text-yellow-400"></StarIcon>
                        <StarIcon className="fill-current text-yellow-400"></StarIcon>
                        <StarIcon className="fill-current text-yellow-400"></StarIcon>
                      </div>
                    </div>
                    <div className="flex-1 pl-10">
                      <div className="bg-blue-200 rounded-xl py-5 px-10">
                        <div className="font-medium pb-2">
                          Rosalina, Ibu Rumah Tangga
                        </div>
                        <p className="text-sm">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Sequi, ipsum nostrum atque blanditiis dolorem
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button className="bg-gray-800 text-white py-2 rounded mt-8">
              See More Review
            </Button>
          </div>

          <div className="bg-white rounded-xl mt-16 py-5 px-10">
            <div className="text-2xl font-semibold">More Product</div>
            <div className="flex flex-wrap py-4">
              {moreProduct.map((item) => (
                <div key={item?.id} className="w-3/6 sm:w-2/6 lg:w-1/5 p-2">
                  <ProductCard product={item}></ProductCard>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default withRouter(ProductDetail)
