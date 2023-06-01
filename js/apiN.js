import { cardProduct, cardModal } from "./card_productoN.js";
const gridProductoM = document.getElementById("gridProductM");
const gridProductoP = document.getElementById("gridProductP");
const gridProductoPC = document.getElementById("gridProductPC");
const selectProductM = document.getElementById("selectProductM");
const selectProductC = document.getElementById("selectProductC");
const gridProductoC = document.getElementById("gridProductC");
document.addEventListener("DOMContentLoaded", () => {
  selectProductM.addEventListener("change", async (event) => {
    const id_select = event.target.value;
    console.log(id_select);
    const data = await getProductsbyMarca({ id: id_select });
    gridProductoM.innerHTML = "";
    gridProductoP.innerHTML = "";
    data.forEach((element) => {
      gridProductoM.appendChild(
        cardProduct({
          imagen: element.fotografia,
          nombre: element.producto,
          precio: element.precio,
          id_product: element.id_producto,
        })
      );
      gridProductoP.appendChild(
        cardModal({
          imagen: element.fotografia,
          nombre: element.producto,
          descripcion: element.especificacion,
          marca: element.marca,
          precio: element.precio,
          id_product: element.id_producto
        })
      );
    });
    let preveiwContainer = document.querySelector(".products-preview");
    let previewBox = preveiwContainer.querySelectorAll(".preview");

    document
      .querySelectorAll(".products-container .product")
      .forEach((product) => {
        product.onclick = () => {
          preveiwContainer.style.display = "flex";
          let name = product.getAttribute("data-name");
          previewBox.forEach((preview) => {
            let target = preview.getAttribute("data-target");
            if (name == target) {
              preview.classList.add("active");
            }
          });
        };
      });

    previewBox.forEach((close) => {
      close.querySelector(".fa-times").onclick = () => {
        close.classList.remove("active");
        preveiwContainer.style.display = "none";
      };
    });
  });
});
const getProductsbyMarca = async ({ id }) => {
  const data = await fetch(
    `http://localhost/papeleria_corregidora/Papaleria_Corregidora/admin/API/product_marca.php?id_marca=${id}`
  )
    .then((response) => response.json())
    .catch((error) => error);
  return data;
};

document.addEventListener("DOMContentLoaded", () => {
  selectProductC.addEventListener("change", async (event) => {
    const id_select = event.target.value;
    console.log(id_select);
    const data = await getProductsbyCategoria({ id: id_select });
    gridProductoC.innerHTML = "";
    gridProductoPC.innerHTML = "";
    data.forEach((element) => {
      gridProductoC.appendChild(
        cardProduct({
          imagen: element.fotografia,
          nombre: element.producto,
          precio: element.precio,
          id_product: element.id_producto,
        })
      );
      gridProductoPC.appendChild(
        cardModal({
          imagen: element.fotografia,
          nombre: element.producto,
          descripcion: element.especificacion,
          marca: element.marca,
          precio: element.precio,
          id_product: element.id_producto
        })
      );
    });
    let preveiwContainer = document.querySelector(".products-preview");
    let previewBox = preveiwContainer.querySelectorAll(".preview");

    document
      .querySelectorAll(".products-container .product")
      .forEach((product) => {
        product.onclick = () => {
          preveiwContainer.style.display = "flex";
          let name = product.getAttribute("data-name");
          previewBox.forEach((preview) => {
            let target = preview.getAttribute("data-target");
            if (name == target) {
              preview.classList.add("active");
            }
          });
        };
      });

    previewBox.forEach((close) => {
      close.querySelector(".fa-times").onclick = () => {
        close.classList.remove("active");
        preveiwContainer.style.display = "none";
      };
    });
  });
});
const getProductsbyCategoria = async ({ id }) => {
  const data = await fetch(
    `http://localhost/papeleria_corregidora/Papaleria_Corregidora/admin/API/product_categoria.php?id_categoria=${id}`
  )
    .then((response) => response.json())
    .catch((error) => error);
  return data;
};



const carritoU = ({ id_usuario, id_producto }) => {
  fetch(
    "http://localhost/papeleria_corregidora/Papaleria_Corregidora/admin/API/carrito_usuario.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Establece el tipo de contenido del cuerpo
      },
      body: JSON.stringify({
        id_usuario: id_usuario,
        id_producto: id_producto,
      })
        .then((response) => {
          if (response.ok) {
            console.log("La solicitud fue exitosa");
            console.log("Código de estado:", response.status);
            alert("Se ha insertado");
            // Continúa procesando la respuesta
          } else {
            console.log("La solicitud no fue exitosa");
            console.log("Código de estado:", response.status);
            alert("No se ha insertado");
            // Maneja el caso de error
          }
        })
        .catch((error) => {
          console.error("Error en la solicitud:", error);
          alert("Error");
          // Maneja el error de la solicitud
        }), // Convierte el objeto en una cadena JSON
    }
  );
};
