import Header from './nav';
import Footer from './footer';
import MyHead from './head'
import Carousel from './carousel';





const MyLayout = (props) => (
    <div>
        <MyHead />
        <Header />
        <div style={{ background: '#fff'}}>
            {props.children}
        </div>
        
        <Footer />
        
    </div>
)

export default MyLayout