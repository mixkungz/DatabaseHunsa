import AdminLayout from '../../components/adminlayout'
import Portlet from '../../components/portlet'
import Card from '../../components/card'
import styled , { injectGlobal } from 'styled-components'
import Link from 'next/link'
import Axios from 'axios'
import Router from 'next/router'

injectGlobal`
    .img-thumbnail-table{
        max-width:100px;
    }
    /* The switch - the box around the slider */
    .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
    }
    
    /* Hide default HTML checkbox */
    .switch input {display:none;}
    
    /* The slider */
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: .4s;
      transition: .4s;
    }
    
    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s;
    }
    
    input:checked + .slider {
      background-color: #2196F3;
    }
    
    input:focus + .slider {
      box-shadow: 0 0 1px #2196F3;
    }
    
    input:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
    
    /* Rounded sliders */
    .slider.round {
      border-radius: 34px;
    }
    
    .slider.round:before {
      border-radius: 50%;
    }
`
class ProductManagement extends React.Component {
    state={
        allproduct:[]
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
    goEditProd = async(pid) =>{
        await Router.push({
            pathname: '/admin/productedit',
            query: { productID: pid }
        })
    }
    del = async(pid) =>{
        await Axios({
            method:'post',
            url:`http://localhost:3001/admin/product/del/${pid}`,
        })
        .then(async function(res) {
            console.log(res)
            await location.reload()
        });
    }
    updateStatus = async(pid,statusID) =>{
        await Axios({
            method:'post',
            url:`http://localhost:3001/admin/product/updatestatus/${pid}${statusID}`,
        })
        .then(async function(res) {
            if(res.data.status == true){
                await location.reload()
            }
            else if(res.data.status == false){
                alert(response.data.msg)
            }
        });
        
    }
    render(){
        return(
            <div>
            <AdminLayout>
                <div className="row">
                    <div className="col-12">
                        <Portlet>
                            <div className="d-flex">
                                <div className="mr-auto">
                                    <h3 className="">Product Management</h3>
                                </div>
                                <div className="align-self-center">
                                    <Link href="productedit">
                                        <button className="btn btn-info">เพิ่มสินค้า</button>
                                    </Link>
                                </div>
                            </div> 
                            <hr  />
                            <table className="table table-hover table-responsive-block" id="tableWithSearch">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Thumbnail</th>
                                            <th>Category</th>
                                            <th>Product name</th>
                                            <th>Stock</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.allproduct.map((data)=> 
                                            <tr>
                                                <td className="v-align-middle semi-bold">
                                                    <p>{data.ProductID}</p>
                                                </td>
                                                <td className="v-align-middle">
                                                    <img src={data.ProductImg} className="img-thumbnail img-thumbnail-table" />
                                                </td>
                                                <td className="v-align-middle">
                                                    <p>{data.CategoryName}</p>
                                                </td>
                                                <td className="v-align-middle">
                                                    <p>{data.ProductName}</p>
                                                </td>
                                                <td className="v-align-middle">
                                                    <p>{data.Quantity}</p>
                                                </td>
                                                <td className="v-align-middle">
                                                {data.StatusID==1 ? (
                                                    <label className="switch">
                                                        <input type="checkbox" onChange={() => this.updateStatus(data.ProductID,0)} checked/>
                                                        <span className="slider round"></span>
                                                    </label>) : 
                                                    (<label className="switch">
                                                        <input type="checkbox" onChange={() => this.updateStatus(data.ProductID,1)} />
                                                        <span className="slider round"></span>
                                                    </label>)
                                                }   
                                                </td>
                                                <td className="v-align-middle">
                                                    <button className="btn btn-primary m-b-10" type="button" onClick={()=>this.goEditProd(data.ProductID)}><i className="pg-form"></i></button>
                                                    <button className="btn btn-danger m-b-10 mx-1" type="button" onClick={()=>this.del(data.ProductID)}><i className="pg-trash"></i></button>
                                                </td>
                                            </tr>
                                            )
                                        } 
                                        
                                        
                                    </tbody>
                                </table>
                        </Portlet>
                    </div>
                </div>
            </AdminLayout>
        </div>
        )
    }
    
}

export default ProductManagement