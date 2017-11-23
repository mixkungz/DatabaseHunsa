import styled , {injectGlobal} from 'styled-components'
import SweetAlert from 'sweetalert2-react'
import Axios from 'axios'

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
    state = {
        show: false,
        registerdata:{
            username:'',
            password:'',
            confirmpassword:'',
            email:'',
            firstname:'',
            lastname:''
        }
    }

    register = async () => {
        let { username, password,confirmpassword, email, firstname, lastname } = await this.state.registerdata
        if(password !== confirmpassword){
            const password = document.getElementById('password')
            const confirmpassword = document.getElementById('confirmpassword')
            password.classList.add('is-invalid');
            confirmpassword.classList.add('is-invalid');
        }
        else{
            await Axios({
                method: 'post',
                url: 'http://localhost:3001/user/newuser',
                data: {
                  username: username,
                  password: password,
                  email: email,
                  firstname: firstname,
                  lastname: lastname
                }
            }).then(function (response) {
                console.log(response);
                if(response.data == 'success'){
                    
                }
              })
              .catch(function (error) {
                console.log(error);
                if(response.data == 'ER_DUP_ENTRY'){
    
                }
              });
            console.log('shoot')
        }
        
    }

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
                    <div className="modal fade" id="register" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <h3>แบบฟอร์มสมัครสมาชิก</h3>
                                    <hr />
                                    {/* <form onSubmit={this.register}> */}
                                        <div className="form-group">
                                            <input type="text" className="form-control" value={this.state.registerdata.username} onChange={(e) => this.setState({registerdata:{...this.state.registerdata,username:e.target.value}})} id="username" placeholder="Username" required />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" value={this.state.registerdata.password} id="password" placeholder="Password" onChange={(e)=> this.setState({registerdata:{...this.state.registerdata,password:e.target.value}})} required />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" value={this.state.registerdata.confirmpassword} id="confirmpassword" placeholder="Confirm Password" onChange={(e)=> this.setState({registerdata:{...this.state.registerdata,confirmpassword:e.target.value}})} required />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" value={this.state.registerdata.email} id="email" placeholder="Email" onChange={(e)=> this.setState({registerdata:{...this.state.registerdata,email:e.target.value}})} required />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" value={this.state.registerdata.firstname} id="firstname" placeholder="Firstname" onChange={ (e) => this.setState({registerdata:{...this.state.registerdata,firstname:e.target.value}})} required />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" value={this.state.registerdata.lastname} id="lastname" placeholder="Lastname" onChange={(e)=> this.setState({registerdata:{...this.state.registerdata,lastname:e.target.value}})} required />
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button type="reset" className="btn btn-danger mx-2">Reset</button>
                                            <button type="submit" onClick={this.register} className="btn btn-success">Submit</button>
                                        </div>
                                    {/* </form> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="login" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <h3 className="mb-3">เข้าสู่ระบบ</h3>
                                    <div className="form-group">
                                        <input type="text" className="form-control mb-3" id="username" placeholder="Username" />
                                        <input type="password" className="form-control mb-3" id="password" placeholder="Password" />
                                        <button type="button" className="btn btn-primary btn-block">Sign in</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }

}
