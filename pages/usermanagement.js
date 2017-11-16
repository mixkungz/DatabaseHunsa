import AdminLayout from '../components/adminlayout'
import Portlet from '../components/portlet'
import Card from '../components/card'
import styled , { injectGlobal } from 'styled-components'


const ProductManagement = () => (
    <div>
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
										<th>#</th>
										<th>Order Number</th>
										<th>Customer</th>
										<th>Price</th>
										<th>Order Detail</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className="v-align-middle semi-bold">
											<p>1</p>
										</td>
										<td className="v-align-middle">
                                            <p>OR123910</p>
										</td>
										<td className="v-align-middle">
                                            <p>Monkey D Luffy</p>
										</td>
										<td className="v-align-middle">
                                            <p>23,123</p>
										</td>
										<td className="v-align-middle">
                                            <button className="btn btn-primary m-b-10" type="button"><i className="pg-form"></i></button>
										</td>
                                        <td className="v-align-middle">
                                            <button className="btn btn-danger m-b-10 mx-1" type="button"><i className="pg-trash"></i></button>
										</td>
									</tr>
									
								</tbody>
							</table>
                    </Portlet>
                </div>
            </div>
        </AdminLayout>
    </div>
)

export default ProductManagement