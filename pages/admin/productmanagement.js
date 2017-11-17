import AdminLayout from '../../components/adminlayout'
import Portlet from '../../components/portlet'
import Card from '../../components/card'
import styled , { injectGlobal } from 'styled-components'
import Link from 'next/link'

injectGlobal`
    .img-thumbnail-table{
        max-width:100px;
    }
`
const ProductManagement = () => (
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
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className="v-align-middle semi-bold">
											<p>1</p>
										</td>
										<td className="v-align-middle">
                                            <img src="/static/img/product/cosmetic.jpg" className="img-thumbnail img-thumbnail-table" />
										</td>
										<td className="v-align-middle">
                                            <p>Face</p>
										</td>
										<td className="v-align-middle">
                                            <p>UCANBE Brand 8 Colors Moisturizing Smooth Lipsticks</p>
										</td>
										<td className="v-align-middle">
                                            <p>32</p>
										</td>
                                        <td className="v-align-middle">
                                            <button className="btn btn-primary m-b-10" type="button"><i className="pg-form"></i></button>
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