import styled , {injectGlobal} from 'styled-components'
injectGlobal`
    .awesome-border{
        border-left:1px solid white;
        border-right:1px solid white;
    }
`



export default () =>
<div>
    <nav className="bg-secondary">
        <div className="container">
            <div className="row">
                <div className="col-5 ml-auto my-2">
                    <ul class="list-inline text-white">
                        <li class="list-inline-item px-3">ตะกร้า</li>
                        <li class="list-inline-item px-3 awesome-border">ลงทะเบียน</li>
                        <li class="list-inline-item px-3">เข้าสู่ระบบ</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-2 my-2">
                    <h1 class="navbar-brand text-white" href="#">Shopy</h1>
                </div>
                <div className="col-8 my-2">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                </div>
                <div className="col-2 my-2">
                    <button className="btn btn-outline-light" type="submit">Search</button>
                </div>
            </div>
            
        </div>
    </nav>
</div>