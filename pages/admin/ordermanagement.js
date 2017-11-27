import AdminLayout from '../../components/adminlayout'
import Portlet from '../../components/portlet'
import Card from '../../components/card'
import styled , { injectGlobal } from 'styled-components'
import Axios from 'axios'

class ProductManagement extends React.Component{
	state={
		userDetail:null,
		allProduct:[]
	}
	componentWillMount = async() =>{
		let data = await Axios({
            method:'get',
            url:'http://localhost:3001/admin/allorder',
		})
		this.setState({allProduct:data.data})
		console.log(this.state.allProduct)
        
	}
	componentDidMount = async () =>{
        await this.setState({
            userDetail:JSON.parse(window.localStorage.getItem("userdetail"))
        })
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
								<div className="d-flex">
									<div className="mr-auto">
										<h3 className="">Order Management</h3>
									</div>
								</div> 
								<hr  />
								<table className="table table-hover table-responsive-block" id="tableWithSearch">
										<thead>
											<tr>
												<th>Order Number</th>
												<th>Customer</th>
												<th>Product Name</th>
												<th>Price</th>
												<th>Amount</th>
											</tr>
										</thead>
										<tbody>
										{
													this.state.allProduct.map((data,index)=>
													<tr>
														<td className="v-align-middle semi-bold">
															<p>{data.OrderID}</p>
														</td>
														<td className="v-align-middle">
															<p>{data.Firstname} {data.Lastname}</p>
														</td>
														<td className="v-align-middle">
															<p>{data.ProductName}</p>
														</td>
														<td className="v-align-middle">
															<p>{data.Price}</p>
														</td>
														<td className="v-align-middle">
															<p>{data.QtyOfProduct}</p>
														</td>
														
													</tr>
													)
												}
											
										</tbody>
									</table>
							</Portlet>
						</div>
					</div>
				</AdminLayout> :<div> คุณไม่ใช่แอดมิน </div>
                    : <div>โปรดล็อคอินมาก่อน</div>
				}
			
		</div>
		)
	}
    
}

export default ProductManagement