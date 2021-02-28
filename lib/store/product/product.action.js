import products from "../../api/products"

function takeProduct(count) {
  const tempProduct = []
  for (let index = 0; index < count; index++) {
    tempProduct.push(products[index])
  }
  return tempProduct
}

const productAction = {
  sortData(type = "") {
    return (dispatch) => {
      const data = takeProduct(20)
      if (type === "asc") {
        data.sort(sortAsc("name"))
      } else if (type === "desc") {
        data.sort(sortDesc("name"))
      } else if (type == "low-price") {
        data.sort(sortAsc("price"))
      } else if (type === "high-price") {
        data.sort(sortDesc("price"))
      } else if (type === "new") {
        data.sort(sortAsc("created_at"))
      } else if (type === "old") {
        data.sort(sortDesc("created_at"))
      }

      dispatch({ type: "PRODUCT_BROWSE", payload: data })
    }
  },
}

function sortAsc(prop) {
  return function (a, b) {
    if (a[prop] > b[prop]) {
      return 1
    } else if (a[prop] < b[prop]) {
      return -1
    }
    return 0
  }
}

function sortDesc(prop) {
  return function (a, b) {
    if (a[prop] > b[prop]) {
      return -1
    } else if (a[prop] < b[prop]) {
      return 1
    }
    return 0
  }
}

export default productAction
