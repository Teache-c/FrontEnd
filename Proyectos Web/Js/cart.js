document.addEventListener('DOMContentLoaded', getProduts)
const cartItems = document.querySelector('#cartItems')
async function getProduts() {
    const url = 'https://fakestoreapi.com/products'
    try {
        const resultado = await fetch(url)
        const respuesta = await resultado.json()
        printProducts(respuesta)
    } catch (error) {
        console.log(error)
    }
}
function printProducts(productos) {
    productos.forEach(prod => {
      const { title, price, image } = prod;
      cartItems.innerHTML +=
      `<div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-2 mrgn-cart">
        <div class="card card-design my-3">
            <div class="row px-1 pt-1">
                <div class="col-sm-11 col-md-11 col-lg-11 col-xl-11 col-xxl-11">
                  <!-- Nombre del Producto -->
                  <div class="product-name my-2 border-bottom">
                      <small>Producto</small>
                      <h6>${title}</h6>
                  </div>
                </div>
                <div class="col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1 p-3">
                  <!-- Boton Eliminar Articulo -->
                  <button type="button" class="trash-design" id="trash-btn1"><i class="bi bi-trash "></i></button>
                </div>
            </div>
            <div class="row px-1 pb-1">
                <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                    <!-- Imagen del Producto -->
                    <div class="img-product mt-3">
                      <img class="img-fluid shadow" src="${image}" alt="Just No...">
                    </div>
                </div>
                <!-- Valor del Producto -->
                <div class="col-sm-4 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mt-5">
                  <div class="centy item-design">
                    <small>Valor</small>
                    <p class="namy my-3">${price}</p>
                  </div>
                </div>
                <!-- Cantidad Del Producto -->
                <div class="col-sm-4 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mt-5">
                  <div class="centy item-design">
                    <small>Cantidad</small>
                    <div class="my-3">
                      <button type="button" class="btn-count">-</button>1<button type="button" class="btn-count">+</button>
                    </div>
                  </div>
                </div>
                <!-- Valor Subtotal del Producto -->
                <div class="col-sm-4 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mt-5">
                  <div class="centy item-design">
                    <small>Subtotal</small>
                    <p class="namy my-3">$${price}</p>
                  </div>
                </div>
            </div>
        </div>
      </div>`;
    });
  }