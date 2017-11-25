import React from 'react'
import Header from './nav';
import Footer from './footer';
import MyHead from './head'
import Carousel from './carousel';
import Axios from 'axios';
export default Component => {
    return class MyLayout extends React.Component {
        state = {
            items: []
        }
        buy = async() =>{
            console.log(this.state.items)
            await Axios({
                method: 'post',
                url: 'http://localhost:3001/buy/',
                data: this.state.items,
                
            }).then(async function (response) {
                if(response.data == false){
                }
                else{
                    let userData = response.data[0]
                    if(userData.RoleID == 0){
                        alert('คุณไม่ใช่แอดมิน')
                    }
                    else{
                        alert('login')
                        
                    }
                    window.localStorage.setItem('userdetail',JSON.stringify(response.data[0]));
                    await location.reload()
                }
              })
        }
        render () {
            return (
                <div>
                    <MyHead />
                    <Header items={this.state.items} parentThis={this} />
                    <div style={{ background: '#fff'}}>
                        <Component parentThis={this} item={this.state.items} />
                    </div>                    
                    <Footer />                    
                </div>
            )
        }
    }
}