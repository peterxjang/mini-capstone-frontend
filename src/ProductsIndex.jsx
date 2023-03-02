export function ProductsIndex(props) {
  return (
    <div id="products-index">
      <h1>All products</h1>
      <div className="row">
        {props.products.map((product) => (
          <div key={product.id} className="col-sm-4 mb-4">
            <div className="card">
              <img src={product.images[0].url} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: {product.price}</p>
                <p className="card-text">{product.description}</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
