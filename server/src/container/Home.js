
import Header from '../component/Header'
import Footer  from '../component/Footer'
import Productlist from '../component/productlist'
import React,{ Component } from 'react';
import axios from 'axios';
class Home extends Component {
  constructor(props){
    super(props);
    this.state ={product: ""}
  }
  componentDidMount(){
    axios.get("http://localhost:3001/product").then(res=>{
      console.log(res)
      {this.setState({product: res.data})}
    })
  }
  render(){
  return (
    <div >
        <Header/>
        <Productlist  product={this.state.product}/>
        <Footer/>
    </div>
  );
  }
}

export default Home;
