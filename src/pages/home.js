import Sidebar from "../component/sidebar";
import ProductCard from "../component/Card";
import { products } from "../data/prod";

function home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 p-0">
          <Sidebar />
        </div>

        <div className="col-md-10 p-4">
          <div className="row g-4">
            {products.map(product => (
              <div key={product.id} className="col-md-3">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>  
  );
}

export default home;