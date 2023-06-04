// 'use client';
/* 윗줄을 맨 위에 선언해주면 클라이언트 컴포넌트가 됨
클라잉언트 컴포넌트는 자바스크립트 기능 쓸 수 있음
속도가 느림 (1. 자바스크립트 많이 필요 2. hydration 필요 *hydration이란? html 유저에게 보낸 후에 자바스크립트로 html 다시 읽고 분석))
*/

/* html 상에 자바스크립트 기능 못씀 , usestate useEffect 
사용 불가 속도가 빠름 */

/* 큰 페이지는 서버 컴포넌트로 작은 기능들은 클라이언트 컴포넌트로 사용하면 좋다. */
import { age } from './data';

export default function Cart() {
  let cart = ['Tomato', 'Pasta', 'Coconut'];

  return (
    <div className="wrap">
      <h4 className="title">Cart</h4>
      <CartItem cart={cart[0]} />
      <CartItem cart={cart[1]} />
      <CartItem cart={cart[2]} />
      <Banner content={'현대카드'} />
      <Btn color={'red'} />
    </div>
  );
}

function Banner({ content }) {
  return <h5>{content} 결제 행사중</h5>;
}

function Btn({ color }) {
  return <button style={{ background: color }}>완료</button>;
}

function CartItem({ cart }) {
  return (
    <div className="cart-item">
      <p>{cart}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
