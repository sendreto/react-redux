import products from "./products-data.json";

export class Products {
  static getProducts() {
    return new Promise((resolve, reject) => {
      if (products) {
        resolve(products);
      } else {
        reject();
      }
    });
  }

  static getProductById(id) {
    return new Promise((resolve, reject) => {
      const product = products.items.find(p => p.id === parseInt(id));

      if (product) {
        resolve(product);
      } else {
        reject();
      }
    });
  }
}
