import { Component } from "react"

class Tag extends Component {
  render() {
    const { children, active = false } = this.props

    return (
      <div
        className={`px-4 py-2 mx-2 mb-2 sm:mb-0 rounded text-xs truncate ${
          active ? "bg-gray-800 text-white" : "bg-white text-gray-400"
        }`}
      >
        {children}
      </div>
    )
  }
}

export class TagTransparent extends Component {
  render() {
    const { children } = this.props

    return (
      <div className="px-0 py-2 mx-2 rounded text-xs text-gray-800 font-medium truncate">
        {children}
      </div>
    )
  }
}

export default Tag
