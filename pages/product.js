import Head from 'next/head';
import MyLayout from '../components/layout'
import styled , { injectGlobal } from 'styled-components'

const ShowProduct = styled.div`
    min-height:75vh;
`
injectGlobal`
    .main-product-img{
        max-width:270px;
    }
    .thumbnail-img{
        max-width:80px;
    }
`
class ProductPage extends React.Component {
    render(){
        return(
            <div>
                <MyLayout>
                    <ShowProduct className="mt-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 mb-2">
                                    <nav aria-label="breadcrumb" role="navigation">
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                                            <li class="breadcrumb-item"><a href="#">All Category</a></li>
                                            <li class="breadcrumb-item active" aria-current="page">Clothing</li>
                                        </ol>
                                    </nav>
                                </div>
                                <div className="col-4">
                                    <div class="">
                                        <img className="main-product-img d-block mx-auto" src='/static/img/product/yellow.jpg' />
                                        <hr class="my-4"/>
                                        <img src='/static/img/product/yellow.jpg' alt="..." class="thumbnail-img mx-1" />
                                        <img src='/static/img/product/yellow.jpg' alt="..." class="thumbnail-img mx-1" />
                                        <img src='/static/img/product/yellow.jpg' alt="..." class="thumbnail-img mx-1" />
                                        <img src='/static/img/product/yellow.jpg' alt="..." class="thumbnail-img" />
                                    </div>
                                </div>
                                <div className="col">
                                    <h3>OMCHION Autumn 2017 O</h3>
                                    <h4 className="text-danger">235 บาท</h4>
                                    <hr class="my-4"/>
                                    <ul>
                                        <li>Style:Casual</li>
                                        <li>Material:Cotton,Polyester</li>
                                        <li>Thickness:Standard</li>
                                        <li>Model Number:CYY.2016.0830.1634</li>
                                    </ul>
                                    <button type="button" class="btn btn-info mr-3">Buy Now</button>
                                    <button type="button" class="btn btn-primary">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </ShowProduct>
                </MyLayout>
            </div>
        )
    }
}

export default ProductPage