//products-promotions

var xhrPromotionsHome = new XMLHttpRequest();
xhrPromotionsHome.open('GET', `http://localhost:5005/products_varied?qtd=3`, true); // false for synchronous request
xhrPromotionsHome.setRequestHeader('Content-Type', 'application/json');
xhrPromotionsHome.send(null);

xhrPromotionsHome.onreadystatechange = function () {
    var response = xhrPromotionsHome.responseText;
    try {
        var obj = JSON.parse(response);
    }
    catch (e) {
        console.log(e);
    }

    if (xhrPromotionsHome.readyState === XMLHttpRequest.DONE && xhrPromotionsHome.status === 200) {
        for (var i = 0; i < 3; i++) {
            createPromotionProductsHome(i, obj[i]);

        }
    }
}


function createPromotionProductsHome(count, obj) {
    document.querySelector(`.owl-carousel.popular-slider.products-promotions`).innerHTML = '';
    var div = document.createElement("div");
    var singleProduct = document.createElement("div");
    var productImg = document.createElement("div");
    var buttonHead = document.createElement("div");
    var productAction = document.createElement("div");
    var productContent = document.createElement("div");
    var productPrice = document.createElement("div");

    singleProduct.className = `single-product promotions-${count}`;
    productImg.className = "product-img";
    buttonHead.className = `button-head`;
    productAction.className = "product-action";
    productContent.className = "product-content";
    productPrice.className = `product-price`;

    var imageDefault = document.createElement("img");
    var imageHover = document.createElement("img");
    imageDefault.className = "default-img";
    imageHover.className = "hover-img";
    //imageDefault.src = `http://localhost:5005/product_image/${obj["_id"]}`;
    //imageHover.src = `http://localhost:5005/product_image/${obj["_id"]}`;

    imageDefault.src = `https://via.placeholder.com/550x750`;
    imageHover.src = `https://via.placeholder.com/550x750`;
    var aView = document.createElement("a");
    var iView = document.createElement("i");
    aView.dataToggle = "modal";
    aView.dataTarget = "#exampleModal";
    aView.title = "Quick View";
    aView.href = "#";
    iView.className = "ti-eye";

    aView.appendChild(iView)

    var aImage = document.createElement("a");
    var aBuy = document.createElement("a");
    var aAddCart = document.createElement("a");
    var h3 = document.createElement("h3");
    var span = document.createElement("span");
    var name = document.createTextNode(obj["name"]);
    var price = document.createTextNode(obj["price"]);
    var add = document.createTextNode("Adicionar ao carrinho");

    span.appendChild(price);
    aBuy.appendChild(name);
    aAddCart.appendChild(add);
    aImage.appendChild(imageDefault);
    aImage.appendChild(imageHover);
    h3.appendChild(aBuy);

    singleProduct.appendChild(productImg);
    singleProduct.appendChild(productContent);
    productImg.appendChild(aImage);
    productImg.appendChild(buttonHead);
    buttonHead.appendChild(productAction);
    productAction.appendChild(aView);
    productContent.appendChild(h3);
    productContent.appendChild(productPrice);

    //div.className = `product-promotions${count}`;
    //div.appendChild(productPrice)

    document.querySelector(`.products-promotions`).appendChild(singleProduct);
}