const createProduct = async (product) => {
  try {
    const response = await fetch("http://localhost:2500/createProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const json = await response.json();
    if (!response.ok) throw new Error("Ocurrió un error al crear el producto.");

    return json;
  } catch (e) {
    console.log(e);
  }
};

export default createProduct;
