
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useContext, useEffect } from "react";
import Slider from "react-slick";

import { HomeContext } from "../../contexts/client/HomeContext";
import currencyFormat from "currency-formatter";
import { loadScript } from "../../utils/fn";


const Home = props => {
  const {
    flashSale, 
    suggestSale, 
    findProductByIdValue_SuggestSale, 
    findProductByIdValue_FlashSale,
    loadProduct_SuggestSale,
  } = useContext(HomeContext);

  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1   
  };

  useEffect(() => {
    loadScript("../../assets/vendor/bootstrap-5.1.0-dist/js/bootstrap.min.js");
    loadScript("../../assets/vendor/fontawesome-free-5.15.4-web/js/all.min.js");
    loadScript("../../assets/vendor/jquery/jquery-3.6.0.min.js");
    loadScript("../../assets/js/homeScript.js");
  }, []);

  return(
  <div className="bg-gray home">
    <main>
    <div className="container">
      <section className="banner bd-radius-5 mb-3">
        <div className="row py-2 mx-0">
          <div className="col-8 p-0">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active banner-item ht-20">
                  <img src="../assets/images/banner_1.jpg" className="d-block s-full" alt="Not found" />
                </div>
                <div className="carousel-item banner-item ht-20">
                  <img src="../assets/images/banner_2.jpg" className="d-block s-full" alt="Not found" />
                </div>
                <div className="carousel-item banner-item ht-20">
                  <img src="../assets/images/banner_3.jpg" className="d-block s-full" alt="Not found" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>            
          </div>
          <div className="col-4 ps-2 pe-0">
            <div className="banner-item ht-20">
              <img src="../assets/images/banner_4.jpg" className="d-block s-full" alt="Not found" />
            </div>
          </div>
        </div>
      </section>
      <section className="flash-deal bg-white p-3 my-3 bd-radius-5">
        <div className="title d-flex justify-content-between align-items-center">
          <h3>Flash <span><i className="fas fa-bolt"></i></span> deal</h3>
          <div className="count-time">1:30:59</div>
        </div>
        <Slider className="flash-product" {...settings}>
        {
          flashSale.product_values.map((item, index) => {
            const product = findProductByIdValue_FlashSale(item._id);
            return (
            <a key={index} href={`/sanpham/${product._id}`} className="product-item p-2 d-flex flex-column m-1">
              <img src={item.avatar} />
              <h5 className="text-center p-2">{currencyFormat.format(item.opt_sale_price, {locale: "vi-VN"})}</h5>
              <div className="sold-process"></div>
            </a>
            )
          })
        }
        </Slider>
      </section>
      <section className="option-categories my-3 d-flex bg-white justify-content-around p-3 bd-radius-5">
        <a href="#" className="option-category d-flex align-items-center flex-column justify-content-center">
          <div className="img-option-category ht-3">
            <img className="d-block s-hfull" src="../assets/images/option_category_1.png" alt="Not found" />
          </div>
          <p className="mt-2 mb-0">Thịt, rau củ</p>
        </a>
        <a href="#" className="option-category d-flex align-items-center flex-column justify-content-center">
          <div className="img-option-category ht-3">
            <img className="d-block s-hfull" src="../assets/images/option_category_2.png" alt="Not found" />
          </div>
          <p className="mt-2 mb-0">Thịt, rau củ</p>
        </a>
        <a href="#" className="option-category d-flex align-items-center flex-column justify-content-center">
          <div className="img-option-category ht-3">
            <img className="d-block s-hfull" src="../assets/images/option_category_3.png" alt="Not found" />
          </div>
          <p className="mt-2 mb-0">Thịt, rau củ</p>
        </a>
        <a href="#" className="option-category d-flex align-items-center flex-column justify-content-center">
          <div className="img-option-category ht-3">
            <img className="d-block s-hfull" src="../assets/images/option_category_4.png" alt="Not found" />
          </div>
          <p className="mt-2 mb-0">Thịt, rau củ</p>
        </a>
        <a href="#" className="option-category d-flex align-items-center flex-column justify-content-center">
          <div className="img-option-category ht-3">
            <img className="d-block s-hfull" src="../assets/images/option_category_5.png" alt="Not found" />
          </div>
          <p className="mt-2 mb-0">Thịt, rau củ</p>
        </a>
        <a href="#" className="option-category d-flex align-items-center flex-column justify-content-center">
          <div className="img-option-category ht-3">
            <img className="d-block s-hfull" src="../assets/images/option_category_6.png" alt="Not found" />
          </div>
          <p className="mt-2 mb-0">Thịt, rau củ</p>
        </a>
        <a href="#" className="option-category d-flex align-items-center flex-column justify-content-center">
          <div className="img-option-category ht-3">
            <img className="d-block s-hfull" src="../assets/images/option_category_7.png" alt="Not found" />
          </div>
          <p className="mt-2 mb-0">Thịt, rau củ</p>
        </a>
        <a href="#" className="option-category d-flex align-items-center flex-column justify-content-center">
          <div className="img-option-category ht-3">
            <img className="d-block s-hfull" src="../assets/images/option_category_8.png" alt="Not found" />
          </div>
          <p className="mt-2 mb-0">Thịt, rau củ</p>
        </a>
      </section>
      <section className="banner d-flex justify-content-between my-3">
        <a href="#" className="ht-10">
          <img className="bd-radius-10 s-hfull" src="../assets/images/banner_8.png" alt="Not found" />
        </a>
        <a href="#" className="ht-10">
          <img className="bd-radius-10 s-hfull" src="../assets/images/banner_9.png" alt="Not found" />
        </a>
        <a href="#" className="ht-10">
          <img className="bd-radius-10 s-hfull" src="../assets/images/banner_10.png" alt="Not found" />
        </a>
        <a href="#" className="ht-10">
          <img className="bd-radius-10 s-hfull" src="../assets/images/banner_11.png" alt="Not found" />
        </a>
      </section>
      <section className="my-3 bd-radius-5 bg-white p-3">
        <h4>Danh mục nổi bật</h4>
        <div className="hightlight-categories d-flex bg-white justify-content-around mt-4">
          <a href="#" className="hightlight-category d-flex align-items-center flex-column justify-content-center">
            <div className="img-hightlight-category ht-3">
              <img className="d-block s-hfull" src="../assets/images/option_category_1.png" alt="Not found" />
            </div>
            <p className="mt-2 mb-0">Thịt, rau củ</p>
          </a>
          <a href="#" className="hightlight-category d-flex align-items-center flex-column justify-content-center">
            <div className="img-hightlight-category ht-3">
              <img className="d-block s-hfull" src="../assets/images/option_category_2.png" alt="Not found" />
            </div>
            <p className="mt-2 mb-0">Thịt, rau củ</p>
          </a>
          <a href="#" className="hightlight-category d-flex align-items-center flex-column justify-content-center">
            <div className="img-hightlight-category ht-3">
              <img className="d-block s-hfull" src="../assets/images/option_category_3.png" alt="Not found" />
            </div>
            <p className="mt-2 mb-0">Thịt, rau củ</p>
          </a>
          <a href="#" className="hightlight-category d-flex align-items-center flex-column justify-content-center">
            <div className="img-hightlight-category ht-3">
              <img className="d-block s-hfull" src="../assets/images/option_category_4.png" alt="Not found" />
            </div>
            <p className="mt-2 mb-0">Thịt, rau củ</p>
          </a>
          <a href="#" className="option-category d-flex align-items-center flex-column justify-content-center">
            <div className="img-hightlight-category ht-3">
              <img className="d-block s-hfull" src="../assets/images/option_category_5.png" alt="Not found" />
            </div>
            <p className="mt-2 mb-0">Thịt, rau củ</p>
          </a>
          <a href="#" className="hightlight-category d-flex align-items-center flex-column justify-content-center">
            <div className="img-hightlight-category ht-3">
              <img className="d-block s-hfull" src="../assets/images/option_category_6.png" alt="Not found" />
            </div>
            <p className="mt-2 mb-0">Thịt, rau củ</p>
          </a>
          <a href="#" className="hightlight-category d-flex align-items-center flex-column justify-content-center">
            <div className="img-hightlight-category ht-3">
              <img className="d-block s-hfull" src="../assets/images/option_category_7.png" alt="Not found" />
            </div>
            <p className="mt-2 mb-0">Thịt, rau củ</p>
          </a>
          <a href="#" className="hightlight-category d-flex align-items-center flex-column justify-content-center">
            <div className="img-hightlight-category ht-3">
              <img className="d-block s-hfull" src="../assets/images/option_category_8.png" alt="Not found" />
            </div>
            <p className="mt-2 mb-0">Thịt, rau củ</p>
          </a>   
        </div>
        <div className="hightlight-categories d-flex bg-white justify-content-around mt-5">
          <a href="#" className="hightlight-category d-flex align-items-center flex-column justify-content-center">
            <div className="img-hightlight-category ht-3">
              <img className="d-block s-hfull" src="../assets/images/option_category_1.png" alt="Not found" />
            </div>
            <p className="mt-2 mb-0">Thịt, rau củ</p>
          </a>
          <a href="#" className="hightlight-category d-flex align-items-center flex-column justify-content-center">
            <div className="img-hightlight-category ht-3">
              <img className="d-block s-hfull" src="../assets/images/option_category_2.png" alt="Not found" />
            </div>
            <p className="mt-2 mb-0">Thịt, rau củ</p>
          </a>
          <a href="#" className="hightlight-category d-flex align-items-center flex-column justify-content-center">
            <div className="img-hightlight-category ht-3">
              <img className="d-block s-hfull" src="../assets/images/option_category_3.png" alt="Not found" />
            </div>
            <p className="mt-2 mb-0">Thịt, rau củ</p>
          </a>
          <a href="#" className="hightlight-category d-flex align-items-center flex-column justify-content-center">
            <div className="img-hightlight-category ht-3">
              <img className="d-block s-hfull" src="../assets/images/option_category_4.png" alt="Not found" />
            </div>
            <p className="mt-2 mb-0">Thịt, rau củ</p>
          </a>
          <a href="#" className="option-category d-flex align-items-center flex-column justify-content-center">
            <div className="img-hightlight-category ht-3">
              <img className="d-block s-hfull" src="../assets/images/option_category_5.png" alt="Not found" />
            </div>
            <p className="mt-2 mb-0">Thịt, rau củ</p>
          </a>
          <a href="#" className="hightlight-category d-flex align-items-center flex-column justify-content-center">
            <div className="img-hightlight-category ht-3">
              <img className="d-block s-hfull" src="../assets/images/option_category_6.png" alt="Not found" />
            </div>
            <p className="mt-2 mb-0">Thịt, rau củ</p>
          </a>
          <a href="#" className="hightlight-category d-flex align-items-center flex-column justify-content-center">
            <div className="img-hightlight-category ht-3">
              <img className="d-block s-hfull" src="../assets/images/option_category_7.png" alt="Not found" />
            </div>
            <p className="mt-2 mb-0">Thịt, rau củ</p>
          </a>
          <a href="#" className="hightlight-category d-flex align-items-center flex-column justify-content-center">
            <div className="img-hightlight-category ht-3">
              <img className="d-block s-hfull" src="../assets/images/option_category_8.png" alt="Not found" />
            </div>
            <p className="mt-2 mb-0">Thịt, rau củ</p>
          </a>   
        </div>
      </section>
      <section className="banner d-flex justify-content-between my-3">
        <a href="#" className="ht-10">
          <img className="bd-radius-10 s-hfull" src="../assets/images/banner_12.png" alt="Not found" />
        </a>
        <a href="#" className="ht-10">
          <img className="bd-radius-10 s-hfull" src="../assets/images/banner_13.png" alt="Not found" />
        </a>
        <a href="#" className="ht-10">
          <img className="bd-radius-10 s-hfull" src="../assets/images/banner_14.png" alt="Not found" />
        </a>
      </section>
      <section className="product-types my-3">
        <div className="container px-0 pb-1" id="product-types-header">
          <h4 className="p-3 bg-white bd-radius-5">Gợi ý hôm nay</h4>
          <div className="product-types d-flex mt-3">
            <a href="#" className="product-type bg-white px-4 py-2 bd-radius-10 me-2 d-flex align-items-center flex-column justify-content-center">
              <div className="img-product-type ht-3">
                <img className="d-block s-hfull" src="../assets/images/product_type_1.png" alt="Not found" />
              </div>
              <p className="mt-2 mb-0">Dành cho bạn</p>
            </a>
            <a href="#" className="product-type bg-white px-4 py-2 bd-radius-10 me-2 d-flex align-items-center flex-column justify-content-center">
              <div className="img-product-type ht-3">
                <img className="d-block s-hfull" src="../assets/images/product_type_2.png" alt="Not found" />
              </div>
              <p className="mt-2 mb-0">Rẻ vô đối</p>
            </a>
            <a href="#" className="product-type bg-white px-4 py-2 bd-radius-10 me-2 d-flex align-items-center flex-column justify-content-center">
              <div className="img-product-type ht-3">
                <img className="d-block s-hfull" src="../assets/images/product_type_3.png" alt="Not found" />
              </div>
              <p className="mt-2 mb-0">Đi chợ siêu Sale</p>
            </a>
            <a href="#" className="product-type bg-white px-4 py-2 bd-radius-10 me-2 d-flex align-items-center flex-column justify-content-center">
              <div className="img-product-type ht-3">
                <img className="d-block s-hfull" src="../assets/images/product_type_4.jpg" alt="Not found" />
              </div>
              <p className="mt-2 mb-0">Deal Siêu Hot</p>
            </a>
            <a href="#" className="product-type bg-white px-4 py-2 bd-radius-10 me-2 d-flex align-items-center flex-column justify-content-center">
              <div className="img-product-type ht-3">
                <img className="d-block s-hfull" src="../assets/images/product_type_5.png" alt="Not found" />
              </div>
              <p className="mt-2 mb-0">Hàng mới</p>
            </a>
            <a href="#" className="product-type bg-white px-4 py-2 bd-radius-10 me-2 d-flex align-items-center flex-column justify-content-center">
              <div className="img-product-type ht-3">
                <img className="d-block s-hfull" src="../assets/images/product_type_6.png" alt="Not found" />
              </div>
              <p className="mt-2 mb-0">Không giới hạn</p>
            </a>
            <a href="#" className="product-type bg-white px-4 py-2 bd-radius-10 me-0 d-flex align-items-center flex-column justify-content-center">
              <div className="img-product-type ht-3">
                <img className="d-block s-hfull" src="../assets/images/product_type_7.png" alt="Not found" />
              </div>
              <p className="mt-2 mb-0">Thời trang nữ</p>
            </a>          
          </div>  
        </div>
        <div id="temp-element"></div>
      </section>
      <section className="bg-white my-3 pb-3">
        <div className="products row m-0">
        {
          suggestSale.product_values.map((item, index) => {
            const product = findProductByIdValue_SuggestSale(item._id);
            const discount = (item.opt_real_price - item.opt_sale_price) * 100 / item.opt_real_price;
            return (
              <a key={index} href="#" className="product col-2 d-flex flex-column p-4">
                <div className="ht-10 mb-2">
                  <img src={item.avatar} className="s-hfull" alt="Not found" />
                </div>
                <p className="title-product mb-2">{product.title.length > 60 ? product.title.substring(0, 50) + "..." : product.title}</p>
                <p className="mb-2">
                  <span>
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                  </span> 
                  <span> | </span>
                  <span className="s-small">Còn {item.quantity} sp</span>
                </p>
                <h6 className="price-product"><span>{currencyFormat.format(item.opt_sale_price, {locale: "vi-VN"})}</span> <span>{discount === 0 ? "" : `-${parseInt(discount)}%`}</span></h6>
              </a>
            )}
          )       
        }
        </div>
        <button onClick={loadProduct_SuggestSale} className="more-product">Xem thêm</button>
      </section>
    </div>
  </main>
  </div>
);
}

export default Home;