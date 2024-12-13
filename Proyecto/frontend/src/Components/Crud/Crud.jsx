import React, { useState, useEffect, useRef } from "react";
import "./Crud.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";
import {
  fetchProducts,
  createProduct,
  uptadeProduct,
  deleteProduct,
} from "../../redux/slices/productsSlice";

import { useDispatch, useSelector } from "react-redux";

const Crud = () => {
  //Modal
  const [modalActualizar, setModalActualizar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [productId, setProductId] = useState(-1);

  //Referencia a los formularios
  const nameRef = useRef(null);
  const categoryRef = useRef(null);
  const imageRef = useRef(null);
  const new_priceRef = useRef(null);

  //Redux
  const { products, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loading === "idle") dispatch(fetchProducts());
  }, [loading, dispatch]);

  const mostrarModalActualizar = (dato) => {
    setModalActualizar(true);

    setTimeout(() => {
      setProductId(dato._id);
      nameRef.current.value = dato.name;
      categoryRef.current.value = dato.category;
      imageRef.current.value = dato.image;
      new_priceRef.current.value = dato.new_price;
    }, 0);
  };

  const cerrarModalActualizar = () => {
    setProductId(-1);
    setModalActualizar(false);
  };

  const mostrarModalInsertar = () => {
    setModalInsertar(true);
  };

  const cerrarModalInsertar = () => {
    setModalInsertar(false);
  };

  const editar = () => {
    const product = {
      _id: productId,
      name: nameRef.current.value,
      category: categoryRef.current.value,
      image: imageRef.current.value,
      new_price: parseFloat(new_priceRef.current.value),
    };

    const res = handleValidateForm(product);
    if (res) {
      dispatch(uptadeProduct(product));
      cerrarModalActualizar();
    }
  };

  const eliminar = (dato) => {
    dispatch(deleteProduct(dato._id));
  };

  const insertar = () => {
    // const new_id = Math.round(Math.random() * 10000000000000);
    const new_id = products.length + 1;
    const new_product = {
      _id: new_id,
      name: nameRef.current.value,
      category: categoryRef.current.value,
      image: imageRef.current.value,
      new_price: parseFloat(new_priceRef.current.value),
    };

    const res = handleValidateForm(new_product);
    if (res) {
      dispatch(createProduct(new_product));
      setModalInsertar(false);
    }
  };

  const handleValidateForm = (formProduct) => {
    const { name, category, new_price, image } = formProduct;
    if (name === "") {
      return alert("El título es obligatorio");
    }
    if (category === "" || category === "default") {
      return alert("La categoria es invalida");
    }
    if (new_price === "" || isNaN(new_price)) {
      return alert("El precio es invalido");
    }
    if (image === "" || !image.startsWith("http")) {
      return alert("La URL de la imagen debe ser válida");
    }

    return true;
  };

  return (
    <>
      <Container>
        <br />
        <Button color="success" onClick={mostrarModalInsertar}>
          Crear
        </Button>
        <br />
        <br />
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Categoria</th>
              <th>Precio</th>
              <th>Imagen</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {products.map((dato) => (
              <tr key={dato._id}>
                <td>{dato._id}</td>
                <td>{dato.name}</td>
                <td>{dato.category}</td>
                <td>{dato.new_price}</td>
                <td>
                  {dato.image ? (
                    <img src={dato.image} alt="Imagen" width="50" />
                  ) : (
                    "No disponible"
                  )}
                </td>
                <td>
                  <Button
                    color="primary"
                    onClick={() => mostrarModalActualizar(dato)}
                  >
                    Editar
                  </Button>{" "}
                  <Button color="danger" onClick={() => eliminar(dato)}>
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      {/* Modal para actualizar */}
      <Modal isOpen={modalActualizar}>
        <ModalHeader>
          <div>
            <h3>Editar Registro</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          {/* Input nombre */}
          <FormGroup>
            <label>Nombre:</label>
            <input
              className="form-control"
              name="Nombre"
              type="text"
              ref={nameRef}
            />
          </FormGroup>

          {/* Input categoria */}
          <FormGroup>
            <label>Género:</label>
            <select className="form-control" name="Categoria" ref={categoryRef}>
              <option value="default">Seleccione el genero</option>
              <option value="men">Hombre</option>
              <option value="women">Mujer</option>
              <option value="kid">Niños</option>
            </select>
          </FormGroup>

          {/* Input precio */}
          <FormGroup>
            <label>Precio:</label>
            <input
              className="form-control"
              name="Precio"
              type="number"
              ref={new_priceRef}
            />
          </FormGroup>

          {/* Input imagen */}
          <FormGroup>
            <label>Imagen:</label>
            <input
              className="form-control"
              name="imagen"
              type="text"
              ref={imageRef}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={editar}>
            Editar
          </Button>
          <Button color="danger" onClick={cerrarModalActualizar}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>

      {/* Modal para insertar */}
      <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Insertar Registro</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          {/* Input nombre */}
          <FormGroup>
            <label>Nombre:</label>
            <input
              className="form-control"
              name="Nombre"
              type="text"
              ref={nameRef}
            />
          </FormGroup>

          {/* Input categoria */}
          <FormGroup>
            <label>Género:</label>
            <select className="form-control" name="Categoria" ref={categoryRef}>
              <option value="default">Seleccione el genero</option>
              <option value="men">Hombre</option>
              <option value="women">Mujer</option>
              <option value="kid">Niños</option>
            </select>
          </FormGroup>

          {/* Input precio */}
          <FormGroup>
            <label>Precio:</label>
            <input
              className="form-control"
              name="Precio"
              type="number"
              ref={new_priceRef}
            />
          </FormGroup>

          {/* Input imagen */}
          <FormGroup>
            <label>Imagen:</label>
            <input
              className="form-control"
              name="imagen"
              type="text"
              ref={imageRef}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={insertar}>
            Insertar
          </Button>
          <Button className="btn btn-danger" onClick={cerrarModalInsertar}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Crud;
