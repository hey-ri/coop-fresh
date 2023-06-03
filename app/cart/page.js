// 'use client';
/* 윗줄을 맨 위에 선언해주면 클라이언트 컴포넌트가 됨
클라잉언트 컴포넌트는 자바스크립트 기능 쓸 수 있음
속도가 느림 (1. 자바스크립트 많이 필요 2. hydration 필요 *hydration이란? html 유저에게 보낸 후에 자바스크립트로 html 다시 읽고 분석))
*/

/* html 상에 자바스크립트 기능 못씀 , usestate useEffect 
사용 불가 속도가 빠름 */

/* 큰 페이지는 서버 컴포넌트로 작은 기능들은 클라이언트 컴포넌트로 사용하면 좋다. */
import age from './data';

export default function Cart() {
  return (
    <div className="wrap">
      <h4 className="title">Cart</h4>
      <div className="cart-item">
        <p>상품명</p>
        <p>$40</p>
        <p>{age}개</p>
      </div>
      <CartItem />
      <CartItem />
    </div>
  );
}

function CartItem() {
  return (
    <div className="cart-item">
      <p>상품명</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
