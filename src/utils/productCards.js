import { loadJson, cartLocalStorage, checkOnline } from "./functions.js"
import { updateMenuCart, checkCartMenu, checkoutPay } from "./menuCart.js"
const productsJson = await loadJson('./products.json')

function ChangeMini(event) {
  //Obtener Url de imagen
  const srcImage = event.target.src;
  //obtener elemento de img principal
  const divImageMain = document.querySelector(".image-principal img");
  //Asignando a la imagen principarl la nueva url de la imagen
  divImageMain.src = srcImage;
}

function createCard(product) {
  return `<article class="product-card">
      <a href="./details.html?product=${product.id}"
        ><img 
        src="${product.images[0]}" 
        alt="${product.name}"
        class="product-img"
      /></a>
      <div class="product-info">
        <span class="product-title">${product.name}</span>
        <span class="product-description">${product.colors[0]}</span>
        <div class="product-price-block">
          <span class="price">S/${product.price}</span>
          <span class="discount">50% Off</span>
        </div>
        <div class="product-tax-policy">
          Incluye impuesto País y percepción AFIP
        </div>
      </div>
    </article>`;
}

export function printCards() {
  //Obtener elemento
  const productsSelector = document.getElementById('products')
  //Comprobar si el elemento existe
  if (productsSelector){
    let productsTemplate = "";
    for (const element of productsJson) {
      productsTemplate = productsTemplate + createCard(element)
    }
    
    productsSelector.innerHTML = productsTemplate;
  }
}

function saveProduct(productID) {
  const isOnline = checkOnline()
  if (isOnline == true){
    var cartProducts = ""

    const found = productsJson.find((each) => each.id === productID);
    const product = {
      id: productID,
      name: found.name,
      brand: found.brand,
      price: found.price,
      image: found.images[0],
      color: document.getElementById('color').value,
      quantity: document.getElementById('count-cart').value,
    };

    //Obteniendo Json de carrito
    var jsonCart = JSON.parse(localStorage.getItem('cart'))
    //Comprobar si jsonCart es nulo
    if (!jsonCart){
      cartProducts = [product]
    }else{
      //Si el carrito no está vacio
      //Buscar su producto ha agregar está en carrito o no
      var indexProduct = jsonCart.findIndex(searchProduct => searchProduct.id === productID)
      if (indexProduct > -1){
        //Si está solamente se aumentará el stock
        jsonCart[indexProduct].quantity = Number(jsonCart[indexProduct].quantity) + Number(product.quantity)
      }else{
        //Si no está se agregará en el Json
        jsonCart.push(product)
      }
      cartProducts = jsonCart
    }
    localStorage.setItem("cart", JSON.stringify(cartProducts))

    updateMenuCart()
    checkCartMenu()
  }else{
    Swal.fire({
      title: 'Sesión no iniciada', 
      text: 'Inicia sesión para agregar productos al carrito', 
      icon: 'error',
      confirmButtonText: 'Ok'
    }).then((result) => {
        window.location.href = `./login.html?redirect=${window.location.href}`
    });
  }
  
}

export function printDetails(productID) {
  /* Obteniendo Imagenes de producto y asignandolas */
  const divImages = document.querySelector(".images-thumbnails");
  const divImageMain = document.querySelector(".image-principal");

  //Buscando producto por ID
  const searchProduct = productsJson.find((product) => product.id == productID);
  console.log(searchProduct)
  //Asignando Título a página web
  document.title = `${searchProduct.name} - Tiendamia EGG Prácticas`;
  console.log("Producto Encontrado:");
  console.log(searchProduct);
  //Buscando Imagenes de producto
  const productImages = searchProduct.images;
  console.log(productImages);
  let htmlImages = "";
  if (productImages.length < 2) {
    htmlImages = `<div class="thumbnail-container active"><img
          src="${productImages[0]}"
          alt="${searchproduct.name}"
        /></div>`;
  } else {
    let firstElement = true;
    let classElement = "";
    productImages.forEach((productImage) => {
      if (firstElement) {
        classElement = "active";
        firstElement = false;
      } else {
        classElement = "";
      }
      htmlImages =
        htmlImages +
        `<div class="thumbnail-container ${classElement}"><img
        src="${productImage}"
        alt="${searchProduct.name}"
      /></div>`;
    });
  }
  divImages.innerHTML = htmlImages;
  divImageMain.innerHTML = `<img
      src="${productImages[0]}"
      alt="${searchProduct.name}"
    />`;

  /* Obteniendo nombre de producto y asignandolo*/
  const divTitle = document.querySelector(".product-title");
  divTitle.textContent = searchProduct.name;

  /* Obteniendo descripción de producto y asignandolo*/
  const divDescription = document.querySelector(".description-text");
  divDescription.textContent = searchProduct.description;

  /* Obteniendo precio de producto y asignandolo*/
  const divPrice = document.getElementById("price");
  divPrice.textContent = "S/" + searchProduct.price;

  /* Obteniendo colores de producto y asignandolo*/
  const divColor = document.getElementById("color");
  let htmlOptionColor = "";
  searchProduct.colors.forEach((color) => {
    htmlOptionColor =
      htmlOptionColor + `<option value="${color}">${color}</option>`;
  });
  divColor.innerHTML = htmlOptionColor;

  /* Obteniendo stock de producto y asignandolo*/
  const divStock = document.getElementById("count-cart");
  let htmlOptionStock = "";
  for (let i = 0; i < searchProduct.stock; i++) {
    htmlOptionStock =
      htmlOptionStock + `<option value="${i + 1}">${i + 1}</option>`;
  }
  divStock.innerHTML = htmlOptionStock;

  /*Asignando Evento clic para cada imagen miniatura*/
  const totalMiniaturas = document.querySelectorAll(".thumbnail-container");
  totalMiniaturas.forEach((divImage) => {
    divImage.addEventListener("click", function (event) {
      //Agregar función para cambiar imagen principal
      ChangeMini(event);
      //Remover clase active de todos los divs
      totalMiniaturas.forEach(function (element) {
        element.classList.remove("active");
      });
      //Asignar clase active a la miniatura seleccionada
      this.classList.add("active");
    });
  });

  /*Asignando evento clic al botón de agregar carrito*/
  const btnAddCart = document.querySelector(".btn-add-cart");
  btnAddCart.addEventListener('click', function(event){
    saveProduct(searchProduct.id)
  })
  
}

export function sortProducts(){
  //Buscar elemento de filtro
  const filter = document.getElementById('filter-sort')
  //Obtener selección de filtro
  const optionSelect = filter.value

  if (optionSelect == "ascendente"){
    //Ordenar los nombres de manera ascendente
    productsJson.sort((a, b) => a.name.localeCompare(b.name))
    printCards(productsJson, "products")
    
  }else if (optionSelect == "default"){
    //Ordernar de manera automática
    productsJson.sort((a, b) => a.id.localeCompare(b.id))
    printCards(productsJson, "products")
    filter.value = "default"
  }
  
}

export function cartproducts(){
  var cartContent = document.getElementById('cartProducts')
  
  if (cartContent){
    let jsonCart = cartLocalStorage()

    var cartTotal = document.getElementById('cartTotal')
    var strHtml = ""
    var cartSubtotal = 0

    if (jsonCart.length > 0){
      jsonCart.forEach( product =>{
        var indexProduct = productsJson.findIndex(searchProduct => searchProduct.id === product.id)
        var stockProduct = productsJson[indexProduct].stock
  
        var htmlProduct = `<div class="card-cart-product" data-productId="${product.id}">
                <div class="cart-product_image">
                <a href="./details.html?id=${product.id}"><img src="${product.image}" alt=""></a>
                </div>
                <div class="cart-product_details">
                <span class="cart-product_title">${product.name}</span>
                <span>${product.color}</span>
                <input class="inp-qty" type="number" min="1" max="${stockProduct}" placeholder="1" value="${product.quantity}" onchange="changeQuantity(event)"></input>
                </div>
                <div class="cart-product_subtotal">
                <span class="cart-product_price">S/${product.price}</span>
                </div>
            </div>`
        cartSubtotal = cartSubtotal + (product.quantity * product.price)
        strHtml = strHtml + htmlProduct
      })
    }

    if (jsonCart == null || jsonCart.length < 1){
      var htmlProduct = `<div id="cart-empty" class="cart__empty">
          <div class="icon-cart-empty">&nbsp;</div>
          <span>Tu carrito está vacío</span>
        </div>`
      strHtml = strHtml + htmlProduct
    }

    cartContent.innerHTML = strHtml
    cartTotal.innerHTML = `S/${cartSubtotal}`

    //Botón de Comprar
    const btnCheckout = document.getElementById('btnCheckout')
    btnCheckout.addEventListener('click', checkoutPay)
  }

}

