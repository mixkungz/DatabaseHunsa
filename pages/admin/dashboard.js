import AdminLayout from '../../components/adminlayout'
import { injectGlobal } from 'styled-components'
import Card from '../../components/card'
import Axios from 'axios'

injectGlobal`
    .shadow{
        box-shadow:0px 1px 15px 1px rgba(113, 106, 202, 0.08) !important;
    }
`

class Dashboard extends React.Component{
    state={
        useramout:0,
        userDetail:null
    }
    componentWillMount = async()=>{
        let data = await Axios({
            method:'get',
            url:'http://localhost:3001/user/useramout',
          })
            .then(function(res) {
                return res
          });
        this.setState({useramout:data.data[0].useramout})
        console.log(this.state.useramout)

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
                                <div className="col-lg-2 m-b-10">
                                    <Card topic="All Users" value={this.state.useramout} myclass="fa fa-user mx-2 mr-3" />
                                </div>
                                <div className="col-lg-3 m-b-10">
                                    <Card topic="Income" value="0" myclass="fa fa-money mx-2 mr-3" />
                                </div>
                            </div>
                        </AdminLayout>  :
                        <div> คุณไม่ใช่แอดมิน </div>
                    : <div>โปรดล็อคอินมาก่อน</div>
                }
            </div>
        )
    }
}

export default Dashboard