var url = "http://localhost:5005/products_varied?qtd=3";
var xhr = new XMLHttpRequest();
xhr.open('GET', url, true); // false for synchronous request
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(null);

xhr.onreadystatechange = function () {
    var response = xhr.responseText;
    try {
        var obj = JSON.parse(response);
    }
    catch (e) {
        console.log(e);
    }
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        for (var i = 0; i < 3; i++) {
            createSingleBanner(i)
            document.querySelector(`.products-intro${i}.content`).innerHTML = '';
            var p = document.createElement("p");
            var h3 = document.createElement("h3");
            var aLink = document.createElement("a");

            var pValue = document.createTextNode(obj[i]["name"]);
            var h3Value = document.createTextNode(obj[i]["category"]);
            var aLinkValue = document.createTextNode("Compre Agora Funcionando");

            p.appendChild(pValue);
            h3.appendChild(h3Value);
            aLink.appendChild(aLinkValue);

            document.querySelector(`.products-intro${i} .content`).appendChild(p);
            document.querySelector(`.products-intro${i} .content`).appendChild(h3);
            document.querySelector(`.products-intro${i} .content`).appendChild(aLink);

            var image = document.querySelector(`.products-intro${i} img`);
            image.src = `http://localhost:5005/product_image/${obj[i]["_id"]}`;

            console.log(obj[i]);

        }
    }
}


function createSingleBanner(count) {
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    div1.className = `col-lg-4 col-md-6 col-12 products-intro${count}`;
    div2.className = "single-banner";
    div3.className = "content";
    var img = document.createElement("img");
    div2.appendChild(img);
    div2.appendChild(div3);
    div1.appendChild(div2);
    document.querySelector(`.init-home`).appendChild(div1);
}