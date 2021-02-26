import { withRouter } from "next/router"
import { Component } from "react"

class Link extends Component {
  render() {
    const { href, children, router } = this.props
    return (
      <a
        href={href}
        onClick={(e) => {
          e.preventDefault()
          router.push(href)
        }}
      >
        {children}
      </a>
    )
  }
}

export default withRouter(Link)
