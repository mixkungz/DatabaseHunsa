import React from 'react'
import Header from './nav';
import Footer from './footer';
import MyHead from './head'
import Carousel from './carousel';
import Axios from 'axios';
import Swal from 'sweetalert2'
export default Component => {
    return class MyLayout extends React.Component {
        state = {
            items: []
        }
        buy = () =>{
            swal({
                title: '( ͡° ͜ʖ ͡°)',
                text: 'Future Function',
                timer: 2000})
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