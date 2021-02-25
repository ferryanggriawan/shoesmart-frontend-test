import App from "next/app"
import { Provider } from "react-redux"
import configureAppStore from "../lib/store/store"

import "../styles/globals.css"

const store = configureAppStore()

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Provider store={store}>
        <Component {...pageProps}></Component>
      </Provider>
    )
  }
}

export default MyApp
