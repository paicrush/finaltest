
import React,{ Component } from 'react';
import Productitem from './productitem';

class Productlist extends Component {
    showProducts() {
        return (
          this.props.product &&
          this.props.product.map(product => (
            <Productitem key={product._id} product={product} />
          ))
        );
      }
  render(){
  return (
      
    <div className="album py-5 bg-light">
    <div className="container">

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {this.showProducts()} 
    </div>
  </div>
  </div>
  );
  }
}

export default Productlist;
