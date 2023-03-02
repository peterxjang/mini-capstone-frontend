export function ProductsIndex(props) {
  return (
    <div id="products-index">
      <h1>All products</h1>
      {props.products.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <img src={product.images[0].url} alt="" />
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}
