export const types = {
  PRODUCT_BROWSE: "PRODUCT_BROWSE",
}

const initState = {
  products: [],
  product: null,
}

function productStore(state = initState, action) {
  const { type, payload } = action

  switch (type) {
    case types.PRODUCT_BROWSE:
      return {
        products: [...payload],
      }

    default:
      return state
  }
}

export default productStore
