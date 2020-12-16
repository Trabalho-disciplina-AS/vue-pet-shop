var xhrSpecialProducts = new XMLHttpRequest();
xhrSpecialProducts.open('GET', `http://localhost:5005/products_varied?qtd=2`, true); // false for synchronous request
xhrSpecialProducts.setRequestHeader('Content-Type', 'application/json');
xhrSpecialProducts.send(null);

xhrSpecialProducts.onreadystatechange = function () {
    var response = xhrSpecialProducts.responseText;
    try {
        var obj = JSON.parse(response);
        if (xhrSpecialProducts.readyState === XMLHttpRequest.DONE && xhrSpecialProducts.status === 200) {
            for (objects in obj) {
                createSpecialProducts(obj);
                console.log("Special PRODUCTS!!!!: " + obj);

            }
        }
    }
    catch (e) {
        console.log(e);
    }
}


function createSpecialProducts(obj) {
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var img = document.createElement("img");
    var div3 = document.createElement("div");
    var p = document.createElement("p");
    var h3 = document.createElement("h3");
    var aLink = document.createElement("a");

    div1.className = `col-lg-6 col-md-6 col-12`;
    div2.className = "single-banner";
    div3.className = "content";
    img.className = "default-img";
    img.src = `http://localhost:5005/product_image/${obj["_id"]}`;

    var name = document.createTextNode(obj["name"]);
    var price = document.createTextNode(obj["price"]);
    var buy = document.createTextNode("Compre agora");

    div1.appendChild(div2);
    div2.appendChild(img);
    div2.appendChild(div3);
    div3.appendChild(p);
    div3.appendChild(h3);
    div3.appendChild(aLink);
    p.appendChild(name);
    h3.appendChild(price);
    aLink.appendChild(buy);

    document.querySelector(`.special-products`).appendChild(div1);
}