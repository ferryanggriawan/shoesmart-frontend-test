import { Component } from "react"
import Button from "../elements/button/Button"

class TopNavbar extends Component {
  render() {
    return (
      <nav className="">
        <div
          style={{ height: "65px" }}
          className="flex justify-between content-center items-center space-x-4 px-8 border-b border-gray-200"
        >
          <div className="sm:flex-1">
            <div className="text-xl">Store</div>
          </div>
          <div className="flex-none hidden sm:block text-center">
            <div className="text-3xl font-semibold">SHOESMART</div>
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
