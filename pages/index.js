import Head from 'next/head';
import withLayout from '../components/layout'
import styled , { injectGlobal } from 'styled-components'
import Slider from 'react-slick'
import Carousel from '../components/carousel'
import Axios from 'axios'
injectGlobal`
.card{
    margin-left:5px;
    margin-right:5px;
}
.card-img-top{
    width:65%;
}
`
class Main extends React.Component {
    state={
        allproduct:[],
        userDetail:null
    }
    componentWillMount = async() =>{
        let allProd =await Axios({
            method:'get',
            url:'http://localhost:3001/product/all',
          })
            .then(function(res) {
                return res
          });
          this.setState({allproduct:allProd.data})
        
    }
    componentDidMount = async () =>{
        await this.setState({
            userDetail:JSON.parse(window.localStorage.getItem("userdetail"))
        })
    }
    addToCart = (e, data) =>{
        if(this.state.userDetail == null){
            alert('กรุณาล็อคอิน')
        }
        else{
            const items = [...this.props.item, { item: data }]
            this.props.parentThis.setState({
                items
            })
        }
    }

    render() {
      return (
        <div>
                <Head>
                    <title>DatabaseHunsa | หน้าหลัก</title>
                </Head>
                <Carousel />
                <div>
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col">
                                <p>สินค้าทั้งหมด</p>
                                <div className="row mb-3">
                                    
                                        {
                                            this.state.allproduct.map((data)=>
                                                <div className="col-3">
                                                    {data.StatusID==1? 
                                                    (
                                                        <div className="">
                                                            <div className="card mx-2">
                                                                <div className="text-center">
                                                                    <img className="card-img-top mx-auto d-block" src={data.ProductImg} />
                                                                </div>
                                                                <div className="card-body">
                                                                    <h5 className="card-title">{data.ProductName}</h5>
                                                                    <p className="text-danger">{data.ProductPrice} บาท</p>
                                                                    <p className="text-center"><button className="btn btn-info btn-block" onClick={(e) => this.addToCart(e, data)}>Add to cart</button></p>
                                                                </div>
                                                            </div>
                                                        </div> 
                                                        

                                                    ):

                                                    (
                                                        <span></span>
                                                    )
                                                }
                                                </div>
                                            )
                                        }
                                        
                                    
                                    
                                </div> {/* row */}
                            </div> {/* col */} 
                        </div> {/* row */}
                    </div> {/* container */}
                </div>
        </div>
      );
    }
}

export default withLayout(Main)