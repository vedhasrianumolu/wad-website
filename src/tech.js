import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Outlet } from "react-router-dom";
function Technologies() {
    const handleAddToCart = () => {
        // Handle "Add to Cart" button logic
        console.log('Add to Cart button clicked');
      };
  return (
    <div className="text-center">
      <ul className="nav pb-3 justify-content-center mt-5">
        <li className="nav-item">
          <Link className="nav-link " to="mongo">
          catalog1
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="express">
          catalog2
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="react">
          catalog3
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="node">
            catalog4
          </Link>
        </li>
      </ul>
      <Outlet />
     
      <button type="button" className="btn btn-secondary ml-2" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default Technologies;
