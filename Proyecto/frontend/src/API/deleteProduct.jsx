const deleteProduct = async (id) => {
  try {
    const data = await fetch(`http://localhost:2500/deleteProduct/${id}`, {
      method: "DELETE",
    });
    if (!data.ok) throw new Error("Ocurrio un error eliminando los productos");

    const json = data.json();
    return json;
  } catch (e) {
    console.log(e);
  }
};

export default deleteProduct;
