import styled , {injectGlobal} from 'styled-components'
import Axios from 'axios'
import Head from '../../components/adminhead'

const Box = styled.div`
height:100vh;
weight:100vw;
`

class Login extends React.Component{
    state={
        inputusername:null,
        inputpassword:null
    }
    login = async() =>{
        await Axios({
            method: 'post',
            url: 'http://localhost:3001/user/login',
            data: {
              username: this.state.inputusername,
              password: this.state.inputpassword,
            }
        }).then(async function (response) {
            if(response.data == false){
                alert('username / password ผิด')
            }
            else{
                let userData = response.data[0]
                if(userData.RoleID == 0){
                    alert('คุณไม่ใช่แอดมิน')
                }
                else{
                    alert('login')
                    
                }
                // window.localStorage.setItem('userdetail',JSON.stringify(response.data[0]));
                // await location.reload()
            }
          })
          .catch(function (error) {
            
          });
    }
    render(){
        return(
            <div>
                <Head />
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Email address</label>
                                            <input type="email" class="form-control" onChange={(e)=>this.setState({inputusername:e.target.value})}  />
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">Password</label>
                                            <input type="password" class="form-control" onChange={(e)=>this.setState({inputpassword:e.target.value})} />
                                        </div>
                                        <button type="submit" class="btn btn-primary" onClick={this.login}>Submit</button>
                            </div>
                        </div>
                    </div>
                
            </div>
        )
    }
}
export default Login