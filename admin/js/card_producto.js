const cardProduct = ({ imagen, nombre, precio, id_product }) => {
  const card = document.createElement("div");
  card.classList.add("product");
  card.dataset.name = `p-${id_product}`;
  card.innerHTML = `<img src="${imagen}" alt="Profile">
    <h3>
        ${nombre}
    </h3>
    <div class="price">$
       ${precio}
    </div>`;
  return card;
};

const cardModal = ({
  imagen,
  nombre,
  descripcion,
  marca,
  precio,
  id_product,
  id_usuario
}) => {
  const modal = document.createElement("div");
  modal.classList.add("preview");
  modal.dataset.target = `p-${id_product}`;
  modal.innerHTML = `<i class="fas fa-times"></i>
    <img src="${imagen}" alt="Profile">
    <h3>
    ${nombre}
    </h3>
    <div class="stars">
    </div>
    <p>
        <b>Descripcion:</b>
        ${descripcion}
        <br>
        <b>Marca:</b>
        ${marca}
    </p>
    <div class="price">$
        ${precio}
    </div>
    <div class="button-wrapper">
        <a href="#">
            <button class="btn outline" onclick="carritoU({id_usuario:${id_usuario}, id_producto:${id_product}})">Agregar al carrito</button>
        </a>
    </div>`;
    
  return modal;
};


export { cardProduct };
export { cardModal };
/*
        <div class="preview" data-target="p-1">
            <i class="fas fa-times"></i>
            <img src="images/logo_bueno2.png" alt="Profile">
            <h3>
                Producto1
            </h3>
            <div class="stars">
            </div>
            <p>
                <b>Descripcion:</b>
                Descripcion producto1
                <br>
                <b>Marca:</b>
                Crayola
            </p>
            <div class="price">$
                5.00
            </div>
            <div class="button-wrapper">
                <a href="#">
                    <button class="btn outline">Comprar</button>
                </a>

            </div>
        </div>

*/
