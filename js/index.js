// AXIOS
let http = axios.create({
    baseURL: "https://shop.cyberlearn.vn/",
    timeout: 30000,
});

// Hàm async để lấy dữ liệu giày
async function getDataShoe() {
    let result = await http.get("api/Product");
    console.log(result.data.content);
    renderArrShoePick(result.data.content);
    renderArrShoeDeal(result.data.content);
    renderArrShoeSuggest(result.data.content);
}
getDataShoe();

function renderArrShoePick(arr) {
    let content = "";
    for (let shoe of arr) {
        let { image, name, price, id } = shoe;
        content += `
          <div class="swiper-slide">
                          <div class="swiper-slide-img">
                              <img src=${image.includes(".jpg") || image.includes(".png") ? image : "image/out-of-stock.png"} alt="">
                          </div>
                          <div class="swiper-slide-text">
                              <div class="swiper_title">
                                  <h5>Product: ${name}</h5>
                                  <a href="./../view/pages/detail.html?productid=${id}"><i class="fa-solid fa-cart-shopping"></i></a>
                              </div>
                              <p>Price: ${price}$</p>
                              <div class="star">
                                  <i class="fa-solid fa-star"></i>
                                  <i class="fa-solid fa-star"></i>
                                  <i class="fa-solid fa-star"></i>
                                  <i class="fa-solid fa-star"></i>
                                  <i class="fa-solid fa-star"></i>
                              </div>
                          </div>
            </div>
          `;
    }
    document.getElementById("pick_shoe").innerHTML = content;
}

function renderArrShoeDeal(arr) {
    let content = "";
    for (let shoe of arr) {
        let { image, name, price, id } = shoe;
        content += `
            <div class="swiper-slide">
                            <div class="swiper-slide-img">
                                <img src=${image.includes(".jpg") || image.includes(".png") ? image : "image/out-of-stock.png"} alt="">
                            </div>
                            <div class="swiper-slide-text">
                                <div class="swiper_title">
                                    <h5>Product: ${name}</h5>
                                    <a href="./../view/pages/detail.html?productid=${id}"><i class="fa-solid fa-cart-shopping"></i></a>
                                </div>
                                <p>Price: ${price}$</p>
                                <div class="star">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                            </div>
                        </div>
            `;
    }
    document.getElementById("deal_shoe").innerHTML = content;
}

function renderArrShoeSuggest(arr) {
    let content = "";
    for (let shoe of arr) {
        let { image, name, price, id } = shoe;
        content += `
             <div class="suggest_product">
                  <div class="suggest_item">
                      <div class="suggest_img">
                          <a href="#url">
                              <img src=${image.includes(".jpg") || image.includes(".png") ? image : "image/out-of-stock.png"} alt="img_suggest">
                              <div class="suggest_icon">
                                  <div class="suggest_icon_box">
                                      <a href="./../view/pages/detail.html?productid=${id}" class="suggest_icon_design">
                                          <i class="fa-solid fa-cart-shopping"></i>
                                      </a>
                                  </div>
                              </div>
                          </a>
                      </div>
                      <div class="suggest_text">
                          <a href="./../view/pages/detail.html?productid=${id}">
                              <h5 class="suggest_text_name">${name}</h5>
                          </a>
                          <span>Price: ${price} $</span>
                      </div>
                  </div>
              </div>
              `;
    }
    document.getElementById("suggest_shoe").innerHTML = content;
}