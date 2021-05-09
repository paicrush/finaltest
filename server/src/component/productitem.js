import React,{Component} from 'react';
import './productiten.css'
class Productitem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {productname, price, img} = this.props.product;
        return(
            <div>
                    <div className="col">
                            <div className="card shadow-sm">
                            <img className="bd-placeholder-img card-img-top" src={img} />
                                <div className="card-body">
                                    <p className="card-text">{productname}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-dark">Add to card</button>
                                        </div>
                                        <small className="text-muted">ราคา {price} bath</small>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
        )
    }
}
export default Productitem;