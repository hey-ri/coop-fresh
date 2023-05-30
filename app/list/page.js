export default function List() {
  let product = ['Tomatoes', 'Pasta', 'Coconut'];
  const price = [10, 20, 50];

  return (
    <div className="wrap">
      <h4 className="title">상품목록</h4>
      {product.map((item, i) => (
        <section key={i}>
          <div>
            <img src={`/food${i}.png`} alt="음식 이미지" />
            <p>{item}</p>
            <span>$40</span>
          </div>
        </section>
      ))}
    </div>
  );
}
