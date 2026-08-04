import { useEffect, useState } from "react";
import {
  addProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../../services/productsApi";
import "./Dashboard.css";

const emptyForm = {
  name: "",
  price: "",
  category: "Man",
  image: "men1.png",
};

const productImages = [
  "men1.png",
  "men2.png",
  "men3.png",
  "men4.png",
  "woman1.png",
  "woman2.png",
  "woman3.png",
  "woman4.png",
  "boy1.png",
  "boy2.png",
  "boy3.png",
  "boy4.png",
  "girl1.png",
  "girl2.png",
  "girl3.png",
  "girl4.png",
  "nike1.png",
  "nike2.png",
  "extra1.png",
  "extra2.png",
  "extra3.png",
];

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error(error);
        window.alert("Failed to load products.");
      });
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function resetForm() {
    setFormData(emptyForm);
    setEditingId(null);
  }

  function categoryIsFull() {
    const categoryProducts = products.filter(
      (product) =>
        product.category === formData.category &&
        product.id !== editingId
    );

    return categoryProducts.length >= 6;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (categoryIsFull()) {
      window.alert(
        `${formData.category} already has 6 products.`
      );

      return;
    }

    const productData = {
      name: formData.name.trim(),
      price: Number(formData.price),
      category: formData.category,
      image: formData.image,
    };

    try {
      if (editingId) {
        const updatedProduct = await updateProduct(
          editingId,
          productData
        );

        setProducts((previousProducts) =>
          previousProducts.map((product) =>
            product.id === editingId
              ? updatedProduct
              : product
          )
        );

        window.alert("Product updated successfully.");
      } else {
        const newProduct = await addProduct(productData);

        setProducts((previousProducts) => [
          ...previousProducts,
          newProduct,
        ]);

        window.alert("Product added successfully.");
      }

      resetForm();
    } catch (error) {
      console.error(error);
      window.alert("Failed to save product.");
    }
  }

  function handleEdit(product) {
    setFormData({
      name: product.name,
      price: product.price,
      category: product.category,
      image: product.image,
    });

    setEditingId(product.id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  async function handleDelete(product) {
    const shouldDelete = window.confirm(
      `Are you sure you want to delete "${product.name}"?`
    );

    if (!shouldDelete) {
      return;
    }

    try {
      await deleteProduct(product.id);

      setProducts((previousProducts) =>
        previousProducts.filter(
          (currentProduct) =>
            currentProduct.id !== product.id
        )
      );

      if (editingId === product.id) {
        resetForm();
      }

      window.alert("Product deleted successfully.");
    } catch (error) {
      console.error(error);
      window.alert("Failed to delete product.");
    }
  }

  return (
    <main className="dashboard-page">
      <div className="container-fluid dashboard-container">
        <h1>Admin Dashboard</h1>

        <form
          className="dashboard-form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Product name"
            required
          />

          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            min="1"
            required
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="Man">Man</option>
            <option value="Woman">Woman</option>
            <option value="Boy">Boy</option>
            <option value="Girl">Girl</option>
          </select>

          <select
            name="image"
            value={formData.image}
            onChange={handleChange}
          >
            {productImages.map((image) => (
              <option key={image} value={image}>
                {image}
              </option>
            ))}
          </select>

          <button type="submit">
            {editingId
              ? "Update Product"
              : "Add Product"}
          </button>

          {editingId && (
            <button
              type="button"
              className="cancel-button"
              onClick={resetForm}
            >
              Cancel Edit
            </button>
          )}
        </form>

        <div className="dashboard-table-wrapper">
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>₹ {product.price}</td>
                  <td>{product.image}</td>

                  <td>
                    <button
                      type="button"
                      className="edit-button"
                      onClick={() => handleEdit(product)}
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      className="delete-button"
                      onClick={() =>
                        handleDelete(product)
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;