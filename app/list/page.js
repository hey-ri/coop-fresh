'use client';

import { useState } from 'react';

export default function List() {
  let product = ['Tomatoes', 'Pasta', 'Coconut'];
  const price = [10, 20, 50];

  const [like, setLike] = useState([0, 0, 0]);
  /* usestate 는 기존의 값과 같으면 state를 변경해주지 않음 그래서 기존 state를 복사해서 씀, 
  arr를 const arr = [1,2,3] 
  const arr2 = arr 라고 하면 arr는 [1,2,3]을 가르키고 있는 화살표라 arr2도 그 화살표가 복사된다. 
  [...arr]는 arr의 값을 복사하는 복사 문법이기 때문에 스프레드 문법으로 작성해야한다.({}[]두개 다 해당됨)
  */
  return (
    <div className="wrap">
      <h4 className="title">상품목록</h4>

      {product.map((item, i) => (
        <section key={i}>
          <div>
            <img src={`/food${i}.png`} alt="음식 이미지" />
            <h4>
              {item}
              <span>$40</span>
            </h4>
            <span>{like[i]}</span>
            <button
              onClick={() => {
                let copy = [...like];
                copy[i]++;
                setLike(copy);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                let copy = [...like];
                copy[i]--;
                setLike(copy);
              }}
            >
              -
            </button>
          </div>
        </section>
      ))}
    </div>
  );
}
