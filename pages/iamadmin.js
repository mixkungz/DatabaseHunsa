import Head from '../components/head';

class LoginAdmin extends React.Component{

    
    render(){
        return(
            <div>
                <Head />
                <div class="container py-5">
                    <div class="row">
                        <div class="col-md-12">
                            <h2 class="text-center text-white mb-4">Bootstrap 4 Login Form</h2>
                            <div class="row">
                                <div class="col-md-6 mx-auto">
                                    <span class="anchor" id="formLogin"></span>
                                    <div class="card rounded-0">
                                        <div class="card-header">
                                            <h3 class="mb-0">Login</h3>
                                        </div>
                                        <div class="card-body">
                                            <form class="form" role="form" autocomplete="off" id="formLogin">
                                                <div class="form-group">
                                                    <label for="uname1">Username</label>
                                                    <input type="text" class="form-control form-control-lg rounded-0" name="uname1" id="uname1" required="" />
                                                </div>
                                                <div class="form-group">
                                                    <label>Password</label>
                                                    <input type="password" class="form-control form-control-lg rounded-0" id="pwd1" required="" autocomplete="new-password" />
                                                </div>
                                                <div>
                                                </div>
                                                <button type="button" class="btn btn-success btn-lg btn-block">Login</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginAdmin