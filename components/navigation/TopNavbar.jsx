import { Component } from "react"
import Button from "../elements/button/Button"
import Link from "../elements/link/Link"

class TopNavbar extends Component {
  render() {
    return (
      <nav className="fixed w-full bg-white z-50">
        <div
          style={{ height: "65px" }}
          className="flex justify-between content-center items-center space-x-4 px-8 border-b border-gray-200"
        >
          <div className="sm:flex-1 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <div className="text-xl ml-1">
              <span>Store</span>
            </div>
          </div>
          <div className="flex-none hidden sm:block text-center">
            <div className="text-3xl font-semibold">
              <Link href="/">SHOESMART</Link>
            </div>
          </div>
          <div className="flex-1 text-right">
            <Button>Login</Button>
            <Button className="bg-gray-800 rounded text-white">Register</Button>
          </div>
        </div>
      </nav>
    )
  }
}

export default TopNavbar
