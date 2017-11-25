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
    .bg-secondary{
        background-color: black !important;
    }
    #face,#eyes,#lips,#nails{
        color: white;
        padding: 4px;
        font-size: 25px;
        font-weight: bold;
        transition:2s;
    }
    #face{
        background-color:#490A3D;
    }
    #face:hover{
        background-color:#26041f;
        transition:0.5s;
        
    }
    #eyes{
        background-color:#BD1550;
    }
    #eyes:hover{
        background-color:#96103f;
        transition:0.5s;
    }
    #lips{
        background-color:#E97F02;
    }
    #lips:hover{
        background-color:#bc6600;
        transition:0.5s;
    }
    #nails{
        background-color:#F8CA00;
    }
    #nails:hover{
        background-color:#c9a402;
        transition:0.5s;
    }
    .swal2-modal .swal2-buttonswrapper{
        justify-content:center
    }
`



export default class extends React.Component{
    state = {
        show: false,
        registerdata:{
            username:null,
            password:null,
            confirmpassword:null,
            email:null,
            firstname:null,
            lastname:null
        },
        username : '',
        password :'',
        userDetail:null
    }

    register = async () => {
        let { username, password, confirmpassword, email, firstname, lastname } = await this.state.registerdata
        
        if(username == null){
            const usernameform = document.getElementById('username')
            usernameform.classList.add('is-invalid');
            alert('Please input username')
        }
        if(password == null){
            const passwordform = document.getElementById('password')
            passwordform.classList.add('is-invalid');
            alert('Please input password')
        }
        if(confirmpassword == null){
            const confirmpasswordform = document.getElementById('confirmpassword')
            confirmpasswordform.classList.add('is-invalid');
            alert('Please input confirmpassword')
        }
        if(email == null){
            const emailform = document.getElementById('email')
            emailform.classList.add('is-invalid');
            alert('Please input email')
        }
        if(firstname == null){
            const firstnameform = document.getElementById('firstname')
            firstnameform.classList.add('is-invalid');
            alert('Please input firstname')
        }
        if(lastname == null){
            const lastnameform = document.getElementById('lastname')
            lastnameform.classList.add('is-invalid');
            alert('Please input lastname')
        }
        if(password !== confirmpassword){
            const passwordform = document.getElementById('password')
            const confirmpasswordform = document.getElementById('confirmpassword')
            passwordform.classList.add('is-invalid');
            confirmpasswordform.classList.add('is-invalid');
            alert('Please check password')
        }
        else{
            console.log('send to node')
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
            }).then(async function (response) {
                if(response.data == 'success'){
                    alert('Register success!!')
                    await location.reload()
                }
                if(response.data == 'ER_DUP_ENTRY'){
                    const usernameform = document.getElementById('username')
                    username.classList.add('is-invalid');
                }
              })
              .catch(function (error) {
                
              });
            console.log('shoot')
        }
        
    }
    login= async()=>{
        await Axios({
            method: 'post',
            url: 'http://localhost:3001/user/login',
            data: {
              username: this.state.username,
              password: this.state.password,
            }
        }).then(async function (response) {
            console.log(response.data)
            console.log(response.data[0])
            if(response.data == false){
                alert('username / password ผิด')
            }
            else{
                alert('login')
                window.localStorage.setItem('userdetail',JSON.stringify(response.data[0]));
                await location.reload()
            }
          })
          .catch(function (error) {
            
          });
        console.log('shoot')
    }
    componentDidMount = async () =>{
        // console.log(JSON.parse(window.localStorage.getItem("userdetail")))
        await this.setState({
            userDetail:JSON.parse(window.localStorage.getItem("userdetail"))
        })

    }
    logout = async() =>{
        localStorage.removeItem("userdetail");
        console.log('logout')
        await location.reload()
    }
    search = async() =>{
        console.log('555555555555')
        await swal({
            title: '( ͡° ͜ʖ ͡°)',
            text: 'Future Fuction',
            timer: 2000,
            onOpen: () => {
                swal.showLoading()
            }
        })
    }
    render(){
        console.log(this.state)
        return(
                <div>
                    <nav className="bg-secondary">
                        <div className="container">
                            <div className="row">
                                <div className="col-2 mt-3">
                                    <i className="fa fa-facebook-square social-icon mr-3" aria-hidden="true"></i>
                                    <i className="fa fa-twitter-square social-icon" aria-hidden="true"></i>
                                </div>
                                <div className="col-4 ml-auto mt-3">
                                    <ul className="list-inline text-white">
                                        <div className="dropdown dis-inline">
                                            <li className="list-inline-item px-3 dropdown-toggle" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-shopping-cart mr-2"/>Cart</li>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                            <table className="table table-hover">
                                            <tbody>
                                            <tr>
                                                <td scope="row"><img className="img-fluid" src="/static/img/product/longsleeve.jpg" /></td>
                                                <td className="w-50" scope="">Sweater Jumper Tops Knitwear</td>
                                                <td className="text-right" scope="">฿199<br/><span className="text-danger">Del</span></td>
                                            </tr>
                                            
                                            </tbody>
                                        </table>
                                            </div>
                                        </div>
                                        {
                                            this.state.userDetail ? 
                                            <span>
                                                <span>
                                                    <span className="badge badge-light ">Edit Profile</span>
                                                    <span className="badge badge-danger mx-1" onClick={this.logout}>Logout</span>
                                                </span>
                                                
                                            </span>
                                            :
                                             <span>
                                                 <li className="list-inline-item px-3 awesome-border" data-toggle="modal" data-target="#register">Sign up</li>
                                                 <li className="list-inline-item px-3" data-toggle="modal" data-target="#login">Sign in</li>
                                            </span>
                                            
                                        }
                                       
                                        
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2 my-1">
                                    <img className="img-fluid" src="/static/img/Shopy-new.png" />
                                </div>
                                <div className="col-8 my-4">
                                    <input className="form-control" type="search" placeholder="Search" aria-label="Search"  />
                                </div>
                                <div className="col-2 my-4">
                                    <button className="btn btn-outline-light" type="submit" onClick={this.search}>Search</button>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className="container-fluid">
                        <div className="row text-center">
                            <div className="col" id="face">FACE</div>
                            <div className="col" id="eyes">EYES</div>
                            <div className="col" id="lips">LIPS</div>
                            <div className="col" id="nails">NAILS</div>
                        </div>
                    </div>
                    <div className="modal fade" id="register" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <h3>Sign up</h3>
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
                                    <h3 className="mb-3">Sign in</h3>
                                    <div className="form-group">
                                        <input type="text" className="form-control mb-3" value={this.state.username} onChange={(e)=> this.setState({...this.state,username:e.target.value})} id="username" placeholder="Username" />
                                        <input type="password" className="form-control mb-3" value={this.state.password} onChange={(e)=> this.setState({...this.state,password:e.target.value})} id="password" placeholder="Password" />
                                        <button type="button" className="btn btn-primary btn-block" onClick={this.login}>Sign in</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }

}
