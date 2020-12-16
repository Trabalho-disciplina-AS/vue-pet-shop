var xhrRemedios = new XMLHttpRequest();
xhrRemedios.open('GET', `http://localhost:5005/products_varied?qtd=3`, true); // false for synchronous request
xhrRemedios.setRequestHeader('Content-Type', 'application/json');
xhrRemedios.send(null);

xhrRemedios.onreadystatechange = function () {
    var response = xhrRemedios.responseText;
    try {
        var obj = JSON.parse(response);
    }
    catch (e) {
        console.log(e);
    }

    if (xhrRemedios.readyState === XMLHttpRequest.DONE && xhrRemedios.status === 200) {
        for (var i = 0; i < 3; i++) {
            createProductRemedios(i, obj[i]);
            console.log(obj[i]);

        }
    }
}


function createProductRemedios(count, obj) {
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");
    var div6 = document.createElement("div");
    var div7 = document.createElement("div");
    var div8 = document.createElement("div");

    div1.className = `col-xl-3 col-lg-4 col-md-4 col-12 remedios-${count}`;
    div2.className = "single-product";
    div3.className = "product-img";
    div4.className = `button-head`;
    div5.className = "product-action";
    div6.className = "product-action-2";
    div7.className = `product-content`;
    div8.className = `product-price`;

    var imageDefault = document.createElement("img");
    var imageHover = document.createElement("img");
    imageDefault.className = "default-img";
    imageHover.className = "hover-img";
    imageDefault.src = `http://localhost:5005/product_image/${obj["_id"]}`;
    imageHover.src = `http://localhost:5005/product_image/${obj["_id"]}`;

    var aView = document.createElement("a");
    var iView = document.createElement("i");
    aView.dataToggle = "modal";
    aView.dataTarget = "#exampleModal";
    aView.title = "Quick View";
    aView.href = "#";
    iView.className = "ti-eye";

    aView.appendChild(iView)
    div5.appendChild(aView)

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
    div7.appendChild(h3);
    div8.appendChild(span)
    div7.appendChild(div8);
    div1.appendChild(div2);
    div2.appendChild(div3);
    div2.appendChild(div7);
    div3.appendChild(aImage);
    div3.appendChild(div4);
    div4.appendChild(div6);
    div4.appendChild(aAddCart);
    div4.appendChild(div5);

    document.querySelector(`.products-remedios`).appendChild(div1);
}