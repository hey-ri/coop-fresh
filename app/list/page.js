'use client';

import { useState } from 'react';

export default function List() {
  let product = ['Tomatoes', 'Pasta', 'Coconut'];
  const price = [10, 20, 50];
  const [like, setLike] = useState(0);

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
            <span>{like}</span>
            <button
              onClick={() => {
                setLike(like + 1);
              }}
            >
              +
            </button>
            <button onClick={() => setLike(like - 1)}>-</button>
          </div>
        </section>
      ))}
    </div>
  );
}
