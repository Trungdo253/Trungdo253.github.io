// #region modal
var registerElement = document.querySelector(".showModalFormRegister");
var loginElement = document.querySelector(".showModalFormlogin");
var modal = document.querySelector(".modal");
var modalBody = document.querySelector(".modal__body");
var modalOverlay = document.querySelector(".modal__overlay");

function clickLogin() {
  modal.style.display = "flex";
  modalBody.innerHTML = `
    <div class="auth-form">
    <div class="auth-form__container">
    <div class="auth-form__header">
    <h3 class="auth-form__heading">
    Đăng nhập
                </h3>
                <span class="auth-form__switch-btn ">
                    Đăng ký
                </span>
            </div>
            <div class="auth-form__form">
                <div class="auth-form__group">
                    <input type="mail" class="auth-form__input" placeholder="Email">
                </div>
                <div class="auth-form__group">
                    <input type="password" class="auth-form__input" placeholder="Mật khẩu">
                </div>
            </div>
            <div class="auth-form__help">
                <a href="" class="auth-form__help-link auth-form__help--pass ">Quên mật khẩu</a>
                <div class="auth-form__help-separator"></div>
                <a href="" class="auth-form__help-link auth-form__help--help">Cần trợ giúp</a>
            </div>
            <div class="auth-form__control">
                <button class="btn auth-form__control--back">TRỞ LẠI</button>
                <button class="btn btn--primary">ĐĂNG NHẬP</button>
            </div>
        </div>
        <div class="auth-form__socials">
            <div class="auth-form__socials-box auth-form__socials-box--facebook">
                <a href="" class="social--with-link social--with-link--facebook ">
                    <i class="socials__icon ti-facebook"></i>
                    Đăng nhập Facebook
                </a>
            </div>
            <div class="auth-form__socials-box auth-form__socials-box--google">
                <a href="" class="social--with-link social--with-link--google">
                    <i class="socials__icon ti-google"></i>
                    Đăng nhập Google
                </a>
            </div>
        </div>
        </div>
    `;
  var switchAuthBtn = document.querySelector(".auth-form__switch-btn ");
  switchAuthBtn.onclick = function () {
    clickRegister();
  };
  hideModal();
}
function clickRegister() {
  modal.style.display = "flex";
  modalBody.innerHTML = `
    <div class="auth-form">
    <div class="auth-form__container">
        <div class="auth-form__header">
            <h3 class="auth-form__heading">
                Đăng ký
            </h3>
            <span class="auth-form__switch-btn">
                Đăng nhập
            </span>
        </div>
        <div class="auth-form__form">
            <div class="auth-form__group" style="display:flex;justify-content:space-between">
                <input type="text" class="auth-form__input" placeholder="Họ" style="width:48%">
                <input type="text" class="auth-form__input" placeholder="Tên" style="width:48%">
            </div>
            <div class="auth-form__group">
                <input type="mail" class="auth-form__input" placeholder="Email">
            </div>
            <div class="auth-form__group">
                <input type="password" class="auth-form__input" placeholder="Mật khẩu">
                <input type="password" class="auth-form__input" placeholder="Nhập lại mật khẩu">
            </div>
        </div>
        <div class="auth-form__aside">
            <p class="auth-form__policy-text">
                Bằng việc đăng kí, bạn đã đồng ý với Shopee về
                <a href="" class="auth-form__policy-link">Điều khoản dịch vụ</a>
                &
                <a href="" class="auth-form__policy-link">
                    Chính sách bảo mật
                </a>
            </p>
        </div>
        <div class="auth-form__control">
            <button class="btn auth-form__control--back">TRỞ LẠI</button>
            <button class="btn btn--primary">ĐĂNG KÝ</button>
        </div>
    </div>
    <div class="auth-form__socials">
        <div class="auth-form__socials-box auth-form__socials-box--facebook">
            <a href="" class="social--with-link social--with-link--facebook ">
                <i class="socials__icon ti-facebook"></i>
                Kết nối với Facebook
            </a>
        </div>
        <div class="auth-form__socials-box auth-form__socials-box--google">
            <a href="" class="social--with-link social--with-link--google">
                <i class="socials__icon ti-google"></i>
                Kết nối với Google
            </a>
        </div>
    </div>
    </div>
    `;
  var switchAuthBtn = document.querySelector(".auth-form__switch-btn ");
  switchAuthBtn.onclick = function () {
    clickLogin();
  };
  hideModal();
}

registerElement.addEventListener("click", function (e) {
  clickRegister();
});
loginElement.addEventListener("click", function (e) {
  clickLogin();
});

// hide modal
function hideModal() {
  modalOverlay.addEventListener("click", function (e) {
    modal.style.display = "none";
  });
  document.addEventListener("keydown", function (e) {
    if (e.code == "Escape") {
      modal.style.display = "none";
    }
  });
  var controlBack = document.querySelector(".auth-form__control--back");
  controlBack.onclick = function () {
    modal.style.display = "none";
  };
}
//#endregion

//#region cart
var cartElement = document.querySelector(".header__cart-list");
var cartNotify = document.querySelector(".header__cart-notice");
var cartItem = document.querySelectorAll(".header__cart-item");
var cartFooterFill = document.querySelector(".header__cart-footer-label");
var cartBtnDelete = document.querySelectorAll(".header__cart-item-delete");
function checkCartEnable() {
  if (cartElement.classList.contains("enable")) {
    cartNotify.style.display = "block";
    cartNum(cartItem.length);
  } else {
    cartNotify.style.display = "none";
  }
}
function cartNum(a) {
  cartNotify.textContent = a;
  cartFooterFill.textContent = a + " Sản phẩm đã thêm";
  if (a != 0) {
    cartDelete();
  } else {
    cartElement.classList.remove("enable");
    checkCartEnable();
  }
}
function cartDelete() {
  cartBtnDelete.forEach((e) => {
    e.addEventListener("click", function () {
      e.parentElement.parentElement.parentElement.remove();
      let cartItemUpdate = document.querySelectorAll(".header__cart-item");
      cartNum(cartItemUpdate.length);
    });
  });
}

checkCartEnable();
//#endregion
