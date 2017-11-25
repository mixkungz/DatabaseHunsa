import React from 'react';
import AdminLayout from '../../components/adminlayout'
import Portlet from '../../components/portlet'
import styled , { injectGlobal } from 'styled-components'
import Link from 'next/link'
import Axios from 'axios'
import Router from 'next/router'

injectGlobal`
    .col-form-label{
        font-size:1em !important;
    }
`

class ProductManagement extends React.Component {
    state={
        uploadData : {
            productname : null,
            productdesc : null,
            quantity : null,
            price : null,
            category:0,
            img:null
        },
        catlist :[],
        query:-1,
        userDetail:null
        
    }
    
    componentWillMount = async() =>{
        if(!Router.query.productID){
            console.log('no query')
        }
        else{
            await this.setState({query:Router.query.productID})
            let ProductData =await Axios({
                method:'get',
                url:`http://localhost:3001/product/${this.state.query}`,
              })
                .then(function(res) {
                    return res
              });
            await this.setState({uploadData:{
                productname : ProductData.data[0].ProductName,
                productdesc : ProductData.data[0].ProductDesc,
                quantity : ProductData.data[0].Quantity,
                price : ProductData.data[0].ProductPrice,
                category : ProductData.data[0].CategoryID,
                img : ProductData.data[0].ProductImg
            }})
        }
        let catlist =await Axios({
            method:'get',
            url:'http://localhost:3001/product/productcat',
          })
            .then(function(res) {
                return res
          });
        this.setState({catlist : catlist.data})
    }
    componentDidMount = async () =>{
        await this.setState({
            userDetail:JSON.parse(window.localStorage.getItem("userdetail"))
        })
    }

    upload = async() =>{
        let { productname, productdesc , quantity , price, category , img } = await this.state.uploadData
        
        if(productname == null){
            const productnameform = document.getElementById('productname')
            productnameform.classList.add('is-invalid');
            alert('Please input productname')
        }
        if(productdesc == null){
            const productdescform = document.getElementById('productdesc')
            productdescform.classList.add('is-invalid');
            alert('Please input productdesc')
        }
        if(quantity == null){
            const quantityform = document.getElementById('quantity')
            quantityform.classList.add('is-invalid');
            alert('Please input quantity')
        }
        if(quantity < 0){
            const quantityform = document.getElementById('quantity')
            quantityform.classList.add('is-invalid');
            alert('Please check quantity')
        }
        if(price == null){
            const priceform = document.getElementById('price')
            priceform.classList.add('is-invalid');
            alert('Please input price')
        }
        else{
            await Axios({
                method: 'post',
                url: 'http://localhost:3001/admin/product/add',
                data: {
                    productname: productname,
                    productdesc: productdesc,
                    quantity: quantity,
                    price: price,
                    category: category,
                    img:img
                }
            }).then(async function (response) {
                console.log(response.data)
                if(response.data.status == true){
                    alert('แอดเรียบร้อย')
                    await Router.push({
                        pathname: '/admin/productmanagement'
                    })
                }
                else if(response.data.status == false){
                    alert(response.data.msg)
                }
              })
              .catch(function (error) {
                
              });
            console.log('shoot')
        }
    }
    update = async() =>{
        let { productname, productdesc , quantity , price, category , img } = await this.state.uploadData
        
        if(productname == null){
            const productnameform = document.getElementById('productname')
            productnameform.classList.add('is-invalid');
            alert('Please input productname')
        }
        if(productdesc == null){
            const productdescform = document.getElementById('productdesc')
            productdescform.classList.add('is-invalid');
            alert('Please input productdesc')
        }
        if(quantity == null){
            const quantityform = document.getElementById('quantity')
            quantityform.classList.add('is-invalid');
            alert('Please input quantity')
        }
        if(quantity < 0){
            const quantityform = document.getElementById('quantity')
            quantityform.classList.add('is-invalid');
            alert('Please check quantity')
        }
        if(price == null){
            const priceform = document.getElementById('price')
            priceform.classList.add('is-invalid');
            alert('Please input price')
        }
        else{
            await Axios({
                method: 'post',
                url: `http://localhost:3001/admin/product/update/${this.state.query}`,
                data: {
                    productname: productname,
                    productdesc: productdesc,
                    quantity: quantity,
                    price: price,
                    category: category,
                    img:img
                }
            }).then(async function (response) {
                console.log(response.data)
                if(response.data.status == true){
                    alert('อัพเดทเรียบร้อย')
                    await Router.push({
                        pathname: '/admin/productmanagement',
                    })
                }
                else if(response.data.status == false){
                    alert(response.data.msg)
                }
              })
              .catch(function (error) {
                
              });
            console.log('shoot')
        }
    }
    
    render(){
   
        return(
        <div>
            {
                this.state.userDetail ?
                this.state.userDetail.RoleID === 1 ?
                <AdminLayout>
                <div className="row">
                    <div className="col-12">
                    <Portlet>
                                <div className="form-group row">
                                    <label for="staticEmail" className="col-sm-2 col-form-label text-right mr-3">ชื่อสินค้า</label>
                                    <div className="col-sm-9">
                                    {
                                        this.state.query == -1 ? 
                                            (<input type="text" className="form-control" id="productname" onChange={(e)=>this.setState({uploadData:{...this.state.uploadData,productname:e.target.value}})} />) :
                                            (<input type="text" className="form-control" value={this.state.uploadData.productname} id="productname" onChange={(e)=>this.setState({uploadData:{...this.state.uploadData,productname:e.target.value}})} />)
                                    }
                                        
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="inputPassword" className="col-sm-2 col-form-label text-right mr-3">หมวดหมู่</label>
                                    <div className="col-sm-9">
                                        <select className="form-control" id="category" data-init-plugin="select2"  onChange={(e)=>this.setState({uploadData:{...this.state.uploadData,category:e.target.value}})}>
                                            {
                                                this.state.catlist.map((data,index)=> 
                                                <option value={index}>{data}</option> )
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="staticEmail" className="col-sm-2 col-form-label text-right mr-3">รายละเอียดสินค้า</label>
                                    <div className="col-sm-9">
                                    {
                                        this.state.query == -1 ? 
                                            (<textarea className="form-control" id="productdesc" rows="5" onChange={(e)=>this.setState({uploadData:{...this.state.uploadData,productdesc:e.target.value}})}></textarea>) :
                                            (<textarea className="form-control" value={this.state.uploadData.productdesc} id="productdesc" rows="5" onChange={(e)=>this.setState({uploadData:{...this.state.uploadData,productdesc:e.target.value}})}></textarea>)
                                    }
                                        
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="staticEmail" className="col-sm-2 col-form-label text-right mr-3">ราคาสินค้า (บาท)</label>
                                    <div className="col-sm-9">
                                    {
                                        this.state.query == -1 ? 
                                            (<input type="number" className="form-control" id="price" onChange={(e)=>this.setState({uploadData:{...this.state.uploadData,price:e.target.value}})} />) :
                                            (<input type="number" className="form-control" value={this.state.uploadData.price} id="price" onChange={(e)=>this.setState({uploadData:{...this.state.uploadData,price:e.target.value}})} />)
                                    }
                                        
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="staticEmail" className="col-sm-2 col-form-label text-right mr-3">จำนวนสินค้า</label>
                                    <div className="col-sm-9">
                                    {
                                        this.state.query == -1 ? 
                                            (<input type="number" className="form-control" id="quantity" onChange={(e)=>this.setState({uploadData:{...this.state.uploadData,quantity:e.target.value}})} />) :
                                            (<input type="number" className="form-control" id="quantity" value={this.state.uploadData.quantity} onChange={(e)=>this.setState({uploadData:{...this.state.uploadData,quantity:e.target.value}})} />)
                                    }
                                        
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="staticEmail" className="col-sm-2 col-form-label text-right mr-3">รูปสินค้าหลัก</label>
                                    <div className="col-sm-9">
                                    {
                                        this.state.query == -1 ? 
                                            (<input type="text" className="form-control" id="imglink" onChange={(e)=>this.setState({uploadData:{...this.state.uploadData,img:e.target.value}})} />) :
                                            (<input type="text" className="form-control" id="imglink" value={this.state.uploadData.img} onChange={(e)=>this.setState({uploadData:{...this.state.uploadData,img:e.target.value}})} />)
                                    }
                                    </div>
                                </div>
                            <hr />
                            <div className="row">
                                <div className="col-11">
                                    {
                                        this.state.query == -1 ? 
                                            (<button className="btn btn-success pull-right" onClick={this.upload}>Save</button>) :
                                            (<button className="btn btn-success pull-right" onClick={this.update}>Save</button>)
                                    }
                                    
                                    <Link href="productmanagement">
                                        <button className="btn btn-danger pull-right mr-2">Cancel</button>
                                    </Link>
                                </div>
                            </div>
                </Portlet>
                    </div>
                </div>
            </AdminLayout> :
                        <div> คุณไม่ใช่แอดมิน </div>
                    : <div>โปรดล็อคอินมาก่อน</div>
            }
            
        </div>
        )
    }
    
}

export default ProductManagement