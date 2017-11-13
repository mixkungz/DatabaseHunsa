import Head from 'next/head';
import MyLayout from '../components/layout'
import styled , { injectGlobal } from 'styled-components'
import Slider from 'react-slick'
import Carousel from '../components/carousel'

injectGlobal`
.card{
    margin-left:5px;
    margin-right:5px;
}
.card-img-top{
    width:85%;
}
`
class Main extends React.Component {
    

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            adaptiveHeight:true
          };
      return (
        <div>
            <MyLayout>
                <Head>
                    <title>DatabaseHunsa | หน้าหลัก</title>
                </Head>
                <Carousel />
                <div>
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col">
                                <p>เครื่องแต่งกาย</p>
                                <Slider {...settings}>
                                    <div>
                                        <div className="card">
                                            <div className="text-center">
                                                <img className="card-img-top mx-auto d-block" src="/static/img/product/longsleeve.jpg" />
                                            </div>
                                            <div className="card-body">
                                                <h4 className="card-title">Sweater Jumper Tops Knitwear</h4>
                                                <p className="text-danger">199 บาท</p>
                                                <p className="text-center"><a href="#" className="btn btn-success btn-block">Add to cart</a></p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="card">
                                            <div className="text-center">
                                                <img className="card-img-top mx-auto d-block" src="/static/img/product/sweater.jpg" />
                                            </div>
                                            <div className="card-body">
                                                <h4 className="card-title">Slim Sweater Thin V-neck Long-sleeved</h4>
                                                <p className="text-danger">149 บาท</p>
                                                <p className="text-center"><a href="#" className="btn btn-success btn-block">Add to cart</a></p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="card">
                                            <img className="card-img-top mx-auto d-block" src="/static/img/product/yellow.jpg" />
                                            <div className="card-body">
                                                <h4 className="card-title">OMCHION Autumn 2017 O</h4>
                                                <p className="text-danger">235 บาท</p>
                                                <p className="text-center"><a href="#" className="btn btn-success btn-block">Add to cart</a></p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="card">
                                            <img className="card-img-top mx-auto d-block" src="/static/img/product/Women-Sweater-Knit-Poncho-Cotton-Irregular-Single-Button-Christmas-Sweaters-Women-Autumn-Loose-Knitted-Cardigans-C50.jpg_640x640.jpg" />
                                            <div className="card-body">
                                                <h4 className="card-title">Women Sweater Knit Poncho Cotton</h4>
                                                <p className="text-danger">315 บาท</p>
                                                <p className="text-center"><a href="#" className="btn btn-success btn-block">Add to cart</a></p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <br />
                                <p>เครื่องสำอาง</p>
                                <Slider {...settings}>
                                    <div>
                                        <div className="card">
                                            <div className="text-center">
                                                <img className="card-img-top mx-auto d-block" src="/static/img/product/foca2.jpg" />
                                            </div>
                                            <div className="card-body">
                                                <h4 className="card-title">FOCALLURE Brand Liquid Lipstick Matte Waterproof</h4>
                                                <p className="text-danger">199 บาท</p>
                                                <p className="text-center"><a href="#" className="btn btn-success btn-block">Add to cart</a></p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="card">
                                            <div className="text-center">
                                                <img className="card-img-top mx-auto d-block" src="/static/img/product/ucan.jpg" />
                                            </div>
                                            <div className="card-body">
                                                <h4 className="card-title">UCANBE Brand 8 Colors Moisturizing Smooth Lipsticks</h4>
                                                <p className="text-danger">149 บาท</p>
                                                <p className="text-center"><a href="#" className="btn btn-success btn-block">Add to cart</a></p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="card">
                                            <img className="card-img-top mx-auto d-block" src="/static/img/product/foca.jpg" />
                                            <div className="card-body">
                                                <h4 className="card-title">FOCALLURE Waterproof Matte Liquid Lipstick</h4>
                                                <p className="text-danger">235 บาท</p>
                                                <p className="text-center"><a href="#" className="btn btn-success btn-block">Add to cart</a></p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="card">
                                            <img className="card-img-top mx-auto d-block" src="/static/img/product/imagic.jpg" />
                                            <div className="card-body">
                                                <h4 className="card-title">IMAGIC 12 Colors Matte Lipstick Makeup Lips</h4>
                                                <p className="text-danger">315 บาท</p>
                                                <p className="text-center"><a href="#" className="btn btn-success btn-block">Add to cart</a></p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <br />
                                   
                                <p>สินค้าทั้งหมด</p>

                            </div>
                        </div>
                    </div>
                </div>
            </MyLayout>
        </div>
      );
    }
}

export default Main