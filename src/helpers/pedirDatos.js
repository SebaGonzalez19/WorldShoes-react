import productos from "../data/productos.json";

export const pedirDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    });
  });
};

export const pedirItemPorId = (id) => {
  return new Promise((resolve, reject) => {
    const item = productos.find((el) => el.id === id);
    if (item) {
      resolve(item);
    } else {
      reject({
        error: "No se encontro el producto",
        id: id,
      });
    }
  });
};
