# Shoppy

<a href="https://joohee-shoppy.com/" target="_blank">Shoppy 사이트</a> <br/>
간단한 UI화면을 제공하며 사용자에게 필요한 기능만을 구현한 프로젝트 입니다.
구글OAuth로 간편하게 회원가입 및 로그인이 가능합니다. Firebase 실시간 데이터베이스를 사용해 사용자 등록과 로그인 계정 확인, 제품 등록이 가능합니다.

## 기술 스택 및 도구

- React : 웹 애플리케이션 사용자 인터페이스 개발에 사용했습니다.
- React Query : React 애플리케이션의 상태정보를 캐싱, 지속적으로 동기화하고 업데이트하는데 사용했습니다.
- Firebase : 구글 로그인, 장바구니 데이터베이스 저장에 사용했습니다.
- TailwindCSS : 직관적이고 편리한 CSS 코드 작성을 위해 사용했습니다.
- Yarn : 빠른 패키지 설치와 높은 보안성을 위해 사용했습니다.

## 디렉토리 구조

<pre>
📦src
 ┣ 📂api
 ┃ ┣ 📜firebase.js
 ┃ ┗ 📜uploader.js
 ┣ 📂assets
 ┃ ┣ 📜404.jpg
 ┃ ┗ 📜404.webp
 ┣ 📂components
 ┃ ┣ 📂ui
 ┃ ┃ ┗ 📜Button.jsx
 ┃ ┣ 📜Banner.jsx
 ┃ ┣ 📜CartItem.jsx
 ┃ ┣ 📜CartStatus.jsx
 ┃ ┣ 📜Navbar.jsx
 ┃ ┣ 📜PriceCard.jsx
 ┃ ┣ 📜ProductCard.jsx
 ┃ ┣ 📜Products.jsx
 ┃ ┗ 📜User.jsx
 ┣ 📂context
 ┃ ┗ 📜AuthContext.jsx
 ┣ 📂hooks
 ┃ ┣ 📜useCart.jsx
 ┃ ┗ 📜useProducts.jsx
 ┣ 📂pages
 ┃ ┣ 📜AllProducts.jsx
 ┃ ┣ 📜Home.jsx
 ┃ ┣ 📜MyCart.jsx
 ┃ ┣ 📜NewProducts.jsx
 ┃ ┣ 📜NotFound.jsx
 ┃ ┣ 📜ProductDetail.jsx
 ┃ ┗ 📜ProtectedRoute.jsx
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜index.css
 ┗ 📜index.js
  
</pre>

## 설명

1. 로그인하지 않은 사용자의 경우

![로그인하지않은 사용자의 main page](./public/images/main_page.png)

내비게이션 영역에 Products 와 Login 버튼이 보인다.
Products와 메인 화면에서 제품 이미지, 정보가 있는 영역을 클릭하면 제품 상세페이지로 이동한다.

제품 상세페이지에서 '장바구니에 추가' 버튼을 클릭하면 '로그인후 이용해주세요'라는 알림창이 뜨며 장바구니에 추가되지 않는다.

2. 로그인한 일반 사용자의 경우

![로그인한 사용자의 main page](./public/images/user_mainpage.png)

내비게이션 영역에 Products, 장바구니, 계정사진과 이름 그리고 Logout 버튼이 보인다.
Logout버튼을 누르면 로그아웃되고 장바구니 정보, 계정 정보가 모두 보이지 않는다.

![장바구니에 추가된 화면](./public/images/product_to_cart.png)

제품 상세페이지에서 '장바구니에 추가' 버튼을 클릭하면

1. 버튼 위에 '장바구니에 추가되었습니다.'라는 창이뜬다.
2. 내비게이션에 있는 장바구니 현황버튼에 갯수가 추가된다.

![장바구니 화면](./public/images/cart.png)

장바구니 아이콘을 클릭하면 장바구니 상세페이지로 이동한다.
장바구니에 담긴 제품이 없으면 '장바구니에 담긴 상품이 없습니다.'라는 화면을 띄워준다.
장바구니에 제품이 담겨있다면 제품의 금액과 배송비가 합쳐진 총 금액이 보인다.

3. 로그인한 관리자의 경우

![관리자의 main page](./public/images/admin_mainpage.png)

![제품 등록 화면](./public/images/register_item.png)
일반 사용자가 사용하는 기능에 추가하여 제품 등록 페이지로 이동이 가능하다.
제품 등록시 제품 이미지, 제품명, 가격, 카테고리, 제품설명, 옵션이 모두 입력되어야 제품 등록이 가능하다.

## 배포 주소

[https://joohee-shoppy.com/](https://joohee-shoppy.com/)
