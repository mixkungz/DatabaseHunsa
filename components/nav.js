import styled , {injectGlobal} from 'styled-components'
import SweetAlert from 'sweetalert2-react'
// import 'sweetalert2-react/src/sweetalert2.css';


injectGlobal`
    .awesome-border{
        border-left:1px solid white;
        border-right:1px solid white;
    }
    .social-icon{
        font-size:1.5em;
        color:white;
    }
    .menu-icon{
        color:white;
        font-size:1.3em;
    }
    .dis-inline{
        display:inline;
    }
    .dropdown-menu.show{
        min-width:320px;
    }
`



export default class extends React.Component{
    render(){
        return(
                <div>
                    <nav className="bg-secondary">
                        <div className="container">
                            <div className="row">
                                <div className="col-2 mt-3">
                                    <i className="fa fa-facebook-square social-icon mr-3" aria-hidden="true"></i>
                                    <i className="fa fa-twitter-square social-icon" aria-hidden="true"></i>
                                </div>
                                <div className="col-5 ml-auto mt-3">
                                    <ul className="list-inline text-white">
                                        <div className="dropdown dis-inline">
                                            <li className="list-inline-item px-3 dropdown-toggle" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-shopping-cart mr-2"/>ตะกร้า</li>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                            <table className="table table-hover">
                                            <tbody>
                                            <tr>
                                                <td scope="row"><img className="img-fluid" src="/static/img/product/longsleeve.jpg" /></td>
                                                <td className="w-50" scope="">Sweater Jumper Tops Knitwear</td>
                                                <td className="text-right" scope="">฿199<br/><span className="text-danger">ลบ</span></td>
                                            </tr>
                                            
                                            </tbody>
                                        </table>
                                            </div>
                                        </div>
                                        <li className="list-inline-item px-3 awesome-border" data-toggle="modal" data-target="#register">ลงทะเบียน</li>
                                        <li className="list-inline-item px-3" data-toggle="modal" data-target="#login">เข้าสู่ระบบ</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2 my-1">
                                    <img className="img-fluid" src="/static/img/Shopy-new.png" />
                                </div>
                                <div className="col-8 my-4">
                                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                                </div>
                                <div className="col-2 my-4">
                                    <button className="btn btn-outline-light" type="submit">Search</button>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <div className="modal fade" id="register" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <h3>แบบฟอร์มสมัครสมาชิก</h3>
                                    <form>
                                    <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label for="inputEmail4">Email</label>
                                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="inputPassword4">Password</label>
                                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                                    </div>
                                    </div>
                                    <div className="form-group">
                                    <label for="inputAddress">Address</label>
                                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                                    </div>
                                    <div className="form-group">
                                    <label for="inputAddress2">Address 2</label>
                                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                    </div>
                                    <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label for="inputCity">City</label>
                                        <input type="text" className="form-control" id="inputCity" />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label for="inputState">State</label>
                                        <select id="inputState" className="form-control">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label for="inputZip">Zip</label>
                                        <input type="text" className="form-control" id="inputZip" />
                                    </div>
                                    </div>
                                    <div className="form-group">
                                    <div className="form-check">
                                        <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox" /> Check me out
                                        </label>
                                    </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Register</button>
                                </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <h3 className="mb-3">เข้าสู่ระบบ</h3>
                                    <div className="form-group">
                                        <input type="text" className="form-control mb-3" id="username" placeholder="Username" />
                                        <input type="password" className="form-control mb-3" id="password" placeholder="Password" />
                                        <button type="button" class="btn btn-primary btn-block">Sign in</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }

}
