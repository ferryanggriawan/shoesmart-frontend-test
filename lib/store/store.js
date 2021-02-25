import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"

import rootReducer from "./reducer"

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware()],
    preloadedState,
    enhancers: [],
  })

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./reducer", () => store.replaceReducer(rootReducer))
  }

  return store
}
