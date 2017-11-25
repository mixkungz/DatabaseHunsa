import AdminLayout from '../../components/adminlayout'
import Portlet from '../../components/portlet'
import Card from '../../components/card'
import styled , { injectGlobal } from 'styled-components'
import Axios from 'axios'

class ProductManagement extends React.Component{
	state={
		alluser : []
	}
	componentWillMount = async() =>{
		let x =await Axios({
            method:'get',
            url:'http://localhost:3001/admin/user/alluser',
          })
            .then(function(res) {
                return res
		  });
		  console.log(x)
		this.setState({alluser:x.data})
	}
	delUser = async(uid) =>{
		console.log(uid)
        await Axios({
            method:'post',
            url:`http://localhost:3001/admin/user/del/${uid}`,
        })
        .then(async function(res) {
            console.log(res)
            await location.reload()
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
											<h3 className="">User Management</h3>
										</div>
									</div> 
									<hr  />
									<table className="table table-hover table-responsive-block" id="tableWithSearch">
											<thead>
												<tr>
													<th>#</th>
													<th>Username</th>
													<th>Customer Name</th>
													<th>Email</th>
													<th>Order</th>
													<th>Action</th>
												</tr>
											</thead>
											<tbody>
												{
													this.state.alluser.map((data,index)=>
													<tr>
														<td className="v-align-middle semi-bold">
															<p>{data.UserID}</p>
														</td>
														<td className="v-align-middle">
															<p>{data.Username}</p>
														</td>
														<td className="v-align-middle">
															<p>{data.Firstname} {data.Lastname}</p>
														</td>
														<td className="v-align-middle">
															<p>{data.Email}</p>
														</td>
														<td className="v-align-middle">
															<button className="btn btn-primary m-b-10" type="button"><i className="pg-form"></i></button>
														</td>
														<td className="v-align-middle">
															<button className="btn btn-danger m-b-10 mx-1" onClick={()=>this.delUser(data.UserID)} type="button"><i className="pg-trash"></i></button>
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