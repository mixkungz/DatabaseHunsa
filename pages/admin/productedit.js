import React from 'react';
import AdminLayout from '../../components/adminlayout'
import Portlet from '../../components/portlet'
import styled , { injectGlobal } from 'styled-components'
import Link from 'next/link'
import Axios from 'axios'
import FormData from 'form-data'

injectGlobal`
    .col-form-label{
        font-size:1em !important;
    }
`

class ProductManagement extends React.Component {
    state={
        uploadData : {
            productname : '',
            productdesc : '',
            quantity : 0,
            price : 0,
            category:0
        },
        catlist :[]

        
    }
    
    componentWillMount = async() =>{
        let catlist = await Axios({
            method:'get',
            url:'http://localhost:3001/product/productcat',
          })
            .then(function(res) {
                return res
          });
        this.setState({catlist : catlist.data})
        
    }

    handleUploadFile = (event) => {
        const data = new FormData();
        data.append('file', event.target.files[0]);
        data.append('name', 'some value user types');
        data.append('description', 'some value user types');
        
    }

    upload = async() =>{
        let { productname, productdesc , quantity , price, category } = await this.state.uploadData
        const inputFile = document.getElementById('picture')
        const userFile = new FormData()
        userFile.append('file', event.target.files[0]);
        console.log('5555')
        console.log(userFile)
        console.log('6666')
        
        if(false){
            
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
                    file:userFile
                }
            }).then(function (response) {
                if(response.data == 'success'){
                    console.log('')
                }
                else if(response.data == ''){
                    console.log('')
                }
              })
              .catch(function (error) {
                
              });
            console.log('shoot')
        }
    }
    check = () =>{
        console.log(this.state.uploadData.productname)
        console.log(this.state.uploadData.productdesc)
        console.log(this.state.uploadData.quantity)
        console.log(this.state.uploadData.price)
        console.log(this.state.uploadData.category)
    }
    render(){
        return(
        <div>
            <AdminLayout>
                <div className="row">
                    <div className="col-12">
                        <Portlet>
                                <div className="form-group row">
                                    <label for="staticEmail" className="col-sm-2 col-form-label text-right mr-3">ชื่อสินค้า</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" id="productname" onChange={(e)=>this.setState({uploadData:{...this.state.uploadData,productname:e.target.value}})} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="inputPassword" className="col-sm-2 col-form-label text-right mr-3">หมวดหมู่</label>
                                    <div className="col-sm-9">
                                        <select className="form-control" id="category" data-init-plugin="select2"  onChange={(e)=>this.setState({uploadData:{...this.state.uploadData,category:e.target.value}})}>
                                            {
                                                this.state.catlist.map((x,index)=> 
                                                <option value={index}>{x}</option> )
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="staticEmail" className="col-sm-2 col-form-label text-right mr-3">รายละเอียดสินค้า</label>
                                    <div className="col-sm-9">
                                        <textarea className="form-control" id="productdesc" rows="5" onChange={(e)=>this.setState({uploadData:{...this.state.uploadData,productdesc:e.target.value}})}></textarea>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="staticEmail" className="col-sm-2 col-form-label text-right mr-3">ราคาสินค้า (บาท)</label>
                                    <div className="col-sm-9">
                                        <input type="number" className="form-control" id="price" onChange={(e)=>this.setState({uploadData:{...this.state.uploadData,price:e.target.value}})} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="staticEmail" className="col-sm-2 col-form-label text-right mr-3">จำนวนสินค้า</label>
                                    <div className="col-sm-9">
                                        <input type="number" className="form-control" id="quantity" onChange={(e)=>this.setState({uploadData:{...this.state.uploadData,quantity:e.target.value}})} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="staticEmail" className="col-sm-2 col-form-label text-right mr-3">รูปสินค้าหลัก</label>
                                    <div className="col-sm-9">
                                        <input type="file" className="form-control-file" id="picture"  />
                                    </div>
                                </div>
                            <hr />
                            <div className="row">
                                <div className="col-11">
                                    <button className="btn btn-success pull-right" onClick={this.upload}>Save</button>
                                    <Link href="productmanagement">
                                        <button className="btn btn-danger pull-right mr-2">Cancel</button>
                                    </Link>
                                </div>
                            </div>
                            
                        </Portlet>
                    </div>
                </div>
            </AdminLayout>
        </div>
        )
    }
    
}

export default ProductManagement