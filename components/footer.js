import styled,{ injectGlobal } from 'styled-components';

injectGlobal`
    .bg-cream{
        background-color:#fcfcf2;
    }
    .col-border{
        border : 1px solid #e8e8e8;
    }
    .footer-icon{
        margin:0;
    }
`

export default () =>
<div>
    <div className="container">
        © 2017 Cos'mate. All Rights Reserved
    </div>
    <div className="container-fluid">
        <div className="row">
            <div className="col-6 col-border bg-cream">
                <p className="text-center footer-icon mt-2"><i className="fa fa-dollar" /></p>
                <p className="text-center">เก็บเงินปลายทาง</p>
            </div>
            <div className="col-2 col-border bg-cream">
                <p className="text-center footer-icon mt-2"><i className="fa fa-truck" /></p>
                <p className="text-center">บริการส่งสินค้าฟรี</p>
            </div>
            <div className="col-4 col-border bg-cream">
                <p className="text-center footer-icon mt-2"><i className="fa fa-exchange" /></p>
                <p className="text-center">คืนสินค้าฟรี</p>
            </div>
        </div>
    </div>
</div>