// AXIOS
let http = axios.create({
  baseURL: "https://shop.cyberlearn.vn/",
  timeout: 30000, // thời gian setup, nếu quá thời gian sẽ tự động báo lỗi
});

window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("productid");
  console.log("params", myParam);

  getDataShoe(myParam);
};
// Hàm async để lấy dữ liệu giày
async function getDataShoe(myParam) {
  let result = await http.get(`api/Product/getbyid?id=${myParam}`);
  console.log(result.data.content);
  console.log(result.data.content.relatedProducts);
  renderShoe(result.data.content);
  renderArrShoe(result.data.content.relatedProducts);
}

function renderShoe(shoe) {
  let { image, name, price, quantity, size, shortDescription } = shoe;
  let content = `
      <div class="product_left">
        <img src=${image} alt="">
        <div class="product_img">
          <div class="product_item"><img src=${image} alt=""></div>
          <div class="product_item"><img src=${image} alt=""></div>
          <div class="product_item"><img src=${image} alt=""></div>
          <div class="product_item"><img src=${image} alt=""></div>
          <div class="product_item"><img src=${image} alt=""></div>
          <div class="product_item"><img src=${image} alt=""></div>
          <div class="product_item"><img src=${image} alt=""></div>
        </div>
      </div>
      <div class="product_right">
        <h2 class="product_right_title">${name}</h2>
        <p class="describe">${shortDescription}</p>
        <p class="price">Price: ${price}</p>
        <p class="vendor">Vendor: Ally</p>
        <p class="product_type">Product type: Casual Shoe</p>
        <p class="stock">${quantity} in stock</p>
        <p class="color">Color: Black</p>
        <div class="select_color">
          <button id="black" title="black" class="btn-color btn-black"></button>
          <button id="green" title="green" class="btn-color btn-green"></button>
          <button id="blue" title="blue" class="btn-color btn-blue"></button>
          <button id="red" title="red" class="btn-color btn-red"></button>
          <button id="gray" title="gray" class="btn-color btn-gray"></button>
        </div>
        <p class="material">Outer Material: Rubber</p>
        <div class="outer_material">
          <div class="material active" id="rubber">Rubber</div>
          <div class="material" id="wedge">Wedge</div>
          <div class="material" id="leather">Leather</div>
          <div class="material" id="synthetic">Synthetic</div>
        </div>
        <p class="size mt-1">Size: ${size[0]}</p>
        <div class="select_size">
          <div class="size_item active" id="32">${size[0]}</div>
          <div class="size_item" id="33">${size[1]}</div>
          <div class="size_item" id="34">${size[2]}</div>
          <div class="size_item" id="35">${size[3]}</div>
        </div>
        <div class="btnSelect">
          <div class="btn_quantity">
            <button class="btnTru" title="btnTru"> - </button>
            <span>1</span>
            <button class="btnCong" title="btnCong"> + </button>
          </div>
          <div class="addToCart">
            <button class="btnAddToCart">Add to cart</button>
          </div>
        </div>
        <div class="btn_Buy">
          <button class="btnBuy">Buy it now</button>
        </div>
      </div>
    `;

  document.getElementById("detail_shoe").innerHTML = content;
}

function renderArrShoe(arr) {
  let content = "";
  for (let itemShoe of arr) {
    let { image, name, price, id } = itemShoe;
    content += `
        <div class="swiper-slide">
                          <div class="swiper-slide-img ">
                              <img src=${image} alt="">
                          </div>
                          <div class="swiper-slide-text">
                              <div class="swiper_title align-items-center">
                                  <h5>${name}</h5>
                                  <a href="./detail.html?productid=${id}"><i class="fa-solid fa-cart-shopping"></i></a>
                              </div>
                              <p class="mb-1">Price: ${price}</p>
                              <div class="star">
                                  <i class="fa-solid fa-star"></i>
                                  <i class="fa-solid fa-star"></i>
                                  <i class="fa-solid fa-star"></i>
                                  <i class="fa-solid fa-star"></i>
                                  <i class="fa-solid fa-star"></i>
                              </div>
                          </div>
                      </div>
      <div class="swiper-slide">
                          <div class="swiper-slide-img">
                              <img src="./image/img030.jpg" alt="">
                          </div>
                          <div class="swiper-slide-text">
                              <div class="swiper_title">
                                  <h5>sunlight men jogger sneakers</h5>
                                  <a href="./detail.html?productid=4"><i class="fa-solid fa-cart-shopping"></i></a>
                              </div>
                              <p class="mb-0">Rs. 53.00</p>
                              <div class="star">
                                  <i class="fa-solid fa-star"></i>
                                  <i class="fa-solid fa-star"></i>
                                  <i class="fa-solid fa-star"></i>
                                  <i class="fa-solid fa-star"></i>
                                  <i class="fa-solid fa-star"></i>
                              </div>
                          </div>
                      </div>
                      <div class="swiper-slide">
                          <div class="swiper-slide-img">
                              <img src="./image/img040.jpg" alt="">
                          </div>
                          <div class="swiper-slide-text">
                              <div class="swiper_title">
                                  <h5>sunlight men jogger sneakers</h5>
                                  <a href="./detail.html?productid=5"><i class="fa-solid fa-cart-shopping"></i></a>
                              </div>
                              <p class="mb-0">Rs. 53.00</p>
                              <div class="star">
                                  <i class="fa-solid fa-star"></i>
                                  <i class="fa-solid fa-star"></i>
                                  <i class="fa-solid fa-star"></i>
                                  <i class="fa-solid fa-star"></i>
                                  <i class="fa-solid fa-star"></i>
                              </div>
                          </div>
                      </div>
                      <div class="swiper-slide">
                          <div class="swiper-slide-img">
                              <img src="./image/img050.jpg" alt="">
                          </div>
                          <div class="swiper-slide-text">
                              <div class="swiper_title">
                                  <h5>sunlight men jogger sneakers</h5>
                                  <a href="./detail.html?productid=6"><i class="fa-solid fa-cart-shopping"></i></a>
                              </div>
                              <p class="mb-0">Rs. 53.00</p>
                              <div class="star">
                                  <i class="fa-solid fa-star"></i>
                                  <i class="fa-solid fa-star"></i>
                                  <i class="fa-solid fa-star"></i>
                                  <i class="fa-solid fa-star"></i>
                                  <i class="fa-solid fa-star"></i>
                              </div>
                          </div>
                      </div>
                      <div class="swiper-slide">
                          <div class="swiper-slide-img">
                              <img src="./image/img060.jpg" alt="">
                          </div>
                          <div class="swiper-slide-text">
                              <div class="swiper_title">
                                  <h5>sunlight men jogger sneakers</h5>
                                  <a href="./detail.html?productid=7"><i class="fa-solid fa-cart-shopping"></i></a>
                              </div>
                              <p class="mb-0">Rs. 53.00</p>
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
  document.getElementById("shoe_slide").innerHTML = content;
}
