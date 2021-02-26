import { Component } from "react"

class Button extends Component {
  render() {
    const { children, className = "" } = this.props
    return (
      <button className={`px-5 py-1 text-sm mr-2 ${className}`}>
        {children}
      </button>
    )
  }
}

export default Button
