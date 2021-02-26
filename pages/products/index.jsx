import Head from "next/head"
import { Component } from "react"
import Button from "../../components/elements/button/Button"
import ProductCard from "../../components/elements/card/ProductCard"
import Link from "../../components/elements/link/Link"
import Tag, { TagTransparent } from "../../components/elements/tag/Tag"
import TopNavbar from "../../components/navigation/TopNavbar"

class Products extends Component {
  render() {
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

              <div className="flex flex-wrap py-4">
                {[
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12,
                  13,
                  14,
                  15,
                  16,
                  17,
                  18,
                  19,
                  20,
                ].map((item) => (
                  <div key={item} className="w-3/6 sm:w-2/6 lg:w-1/5 p-2">
                    <ProductCard></ProductCard>
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

export default Products
