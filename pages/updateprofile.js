import Head from '../components/head'
import Nav from '../components/nav'
import styled , {injectGlobal} from 'styled-components'
import Axios from 'axios'
injectGlobal`
.bg-secondary{
    background-color: black !important;
}`
class ProfilePage extends React.Component{
    state = {
        items: [],
        userDetail:null,
        userAddress:{
            addressdetail:null,
            postcode:null,
            provinceid:0
        },
        provincelist:[],
        userAddressFetch:null
    }
    componentWillMount = async() =>{
        let data =await Axios({
            method:'get',
            url:'http://localhost:3001/province',
          })
            .then(function(res) {
                return res
          });
        this.setState({provincelist : data.data})
    }
    componentDidMount = async () =>{
        await this.setState({
            userDetail:JSON.parse(window.localStorage.getItem("userdetail"))
        })
        // console.log(this.state.userDetail)
        // console.log(this.state.userDetail.UserID)
        let data = await Axios({
            method:'post',
            url:`http://localhost:3001/user/address/${this.state.userDetail.UserID}`
          })
            .then(function(res) {
                return res
          });
        // console.log(data.data)
        console.log(data.data.length)
        if(data.data.length!==0){
            this.setState({
                userAddressFetch : data.data[0]
            })
            console.log('eieiza')
            console.log(this.state.userAddressFetch)
        }
        
        
    }
    update = async() =>{
        await Axios({
            method: 'post',
            url: `http://localhost:3001/user/address/update/${this.state.userDetail.UserID}`,
            data: {
                addressdetail: this.state.userAddress.addressdetail,
                postcode: this.state.userAddress.postcode,
                provinceid: this.state.userAddress.provinceid            
            }
        }).then(async function (response) {
            if(response.data == 'success'){
                alert('อัพเดทเรียบร้อย')
            }
            else if(response.data == 'error'){
                alert('error')
            }
          })
          .catch(function (error) {
            
          });
    }
    render(){
        return(
            <div>
                <Head />
                <Nav items={this.state.items} parentThis={this}/>
                {
                    this.state.userDetail ?
                        <div className="container">
                            <div className="row">
                                <div className="col mt-4">
                                    <h4>อัพเดทที่อยู่</h4>
                                    <hr/>
                                    <div className="form-group">
                                        <label className="col-form-label" for="formGroupExampleInput">ที่อยู่</label>
                                        {
                                            this.state.userAddressFetch ? (<textarea className="form-control" placeholder={this.state.userAddressFetch.AddressDetail} rows="4" value={this.state.userAddress.addressdetail} onChange={(e)=>this.setState({userAddress:{...this.state.userAddress,addressdetail:e.target.value}})}></textarea>):
                                            <textarea className="form-control" rows="4" value={this.state.userAddress.addressdetail} onChange={(e)=>this.setState({userAddress:{...this.state.userAddress,addressdetail:e.target.value}})}></textarea>
                                        }
                                        
                                    </div>
                                    <div className="form-group">
                                        
                                        <label className="col-form-label" for="formGroupExampleInput2">รหัสไปรษณีย์</label>
                                        {
                                            this.state.userAddressFetch ? (<input type="text" className="form-control" placeholder={this.state.userAddressFetch.Postcode} value={this.state.userAddress.postcode} onChange={(e)=>this.setState({userAddress:{...this.state.userAddress,postcode:e.target.value}})} />):
                                            (<input type="text" className="form-control" placeholder="" value={this.state.userAddress.postcode} onChange={(e)=>this.setState({userAddress:{...this.state.userAddress,postcode:e.target.value}})} />)
                                        }
                                        
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleFormControlSelect1">จังหวัด</label>
                                        <select className="form-control" id="exampleFormControlSelect1" onChange={(e)=>this.setState({userAddress:{...this.state.userAddress,provinceid:e.target.value}})}>
                                        {
                                            this.state.provincelist.map((data,index)=> 
                                            <option value={index}>{data}</option> )
                                        }
                                        </select>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <button className="btn btn-danger pull-right mr-3">Reset</button>
                                        <button className="btn btn-success pull-right" onClick={this.update}>Save</button>
                                    </div>
                                </div>
                            </div>
                        </div> : <h1>กรุณาล็อกอิน</h1>
                }
                
            </div>
        )
    }
}
export default ProfilePage