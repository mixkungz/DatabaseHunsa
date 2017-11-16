import AdminLayout from '../components/adminlayout'
import { injectGlobal } from 'styled-components'
import Card from '../components/card'

injectGlobal`
    .shadow{
        box-shadow:0px 1px 15px 1px rgba(113, 106, 202, 0.08) !important;
    }
`

class Dashboard extends React.Component{

    
    render(){
        return(
            <div>
                <AdminLayout>
                    <div className="row">
                        <div className="col-lg-2 m-b-10">
                            <Card topic="All Users" value="5" myclass="fa fa-user mx-2 mr-3" />
                        </div>
                        <div className="col-lg-3 m-b-10">
                            <Card topic="Income" value="50,000" myclass="fa fa-money mx-2 mr-3" />
                        </div>
                    </div>
                </AdminLayout>  
            </div>
        )
    }
}

export default Dashboard