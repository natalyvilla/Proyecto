const updateProduct = async (id, product) => {
  try {
    const data = await fetch(`http://localhost:2500/updateProduct/${id}`, {
      method: "PUT",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!data.ok)
      throw new Error("Ocurrio un error actualizando los productos");
    const json = data.json();
    return json;
  } catch (e) {
    console.log(e);
  }
};

export default updateProduct;
