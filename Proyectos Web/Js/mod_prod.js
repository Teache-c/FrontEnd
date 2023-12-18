document.addEventListener('DOMContentLoaded', getProduts)
const cartItems = document.querySelector('#modProds')
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
    modProds.innerHTML +=
      `<div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div class="card card-design my-3" id="cardModProd">
                <div class="row px-3 pt-3 border-bottom">
                  <div class="col-sm-11 col-md-11 col-lg-11 col-xl-11 col-xxl-11">
                    <!-- Nombre del Producto -->
                    <div class="product-name my-2">
                      <small>Producto</small>
                      <h6>${title}</h6>
                    </div>
                  </div>
                  <div class="col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1">
                    <!-- Boton Eliminar Articulo -->
                    <button type="button" class="trash-design" id="trash-btn1"><i class="bi bi-trash "></i></button>
                  </div>
                </div>
                <div class="row px-3 pb-3">
                  <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                    <!-- Imagen del Producto -->
                    <div class="img-product mt-3">
                      <img class="img-fluid shadow" src="${image}" alt="Just No...">
                    </div>
                  </div>
                  <!-- Valor del Producto -->
                  <div class="col-sm-4 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mt-5">
                    <div class="centy my-4 item-design">
                      <div class="add-item my-2 centy">
                        <label for="inputUser" class="form-label"><small>Valor Del producto</small></label>
                        <input type="number" min="0" class="form-control text-center input-design-mod" id="inputValue"
                          aria-describedby="InputHelp" placeholder="${price}">
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mt-5">
                    <!-- Cantidad Del Producto -->
                    <div class="centy my-4 item-design">
                      <div class="add-item my-2 centy">
                        <label for="inputUser" class="form-label"><small>Stock Disponible</small></label>
                        <input type="number" min="0" class="form-control text-center input-design-mod" id="inputStock"
                          aria-describedby="InputHelp" placeholder="11">
                      </div>
                    </div>
                    
                  </div>
                  <!-- Valor Subtotal del Producto -->
                  <div class="col-sm-4 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mt-5">
                    <div class="centy my-4 item-design">
                      <div class="add-item my-2 centy">
                        <label for="inputUser" class="form-label"><small>Descuento Aplicado</small></label>
                        <input type="number" min="0" class="form-control text-center input-design-mod" id="inputDiscount"
                          aria-describedby="InputHelp" placeholder="0%">
                      </div>
                    </div>
                    <div class="d-grid gap-2 col-6 mx-auto mt-2 ">
                      <button type="submit" class="btn btn-outline-dark aply-btn ">Aplicar</button>
                    </div>
                  </div>
                </div>
        </div>
      </div>`;
  });

}
