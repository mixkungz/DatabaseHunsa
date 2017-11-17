import Head from './adminhead'
import styled , { injectGlobal } from 'styled-components'
import Link from 'next/link'

const TopicFont = styled.p`
    color: white;
    margin-left: 1.2em;
    font-size: 1.1em;
`
injectGlobal`
    .full-height-100vh{
        min-height:100vh !important;
    }
`

const AdminLayout = (props) =>(
    <div>
        <Head />
        <body className="fixed-header dashboard menu-pin menu-behind">
            <nav className="page-sidebar" data-pages="sidebar">
                

                <div className="sidebar-header">
                    <img src="/static/admin/assets/img/logo_white.png" alt="logo" className="brand" data-src="/static/admin/assets/img/logo_white.png" data-src-retina="/static/admin/assets/img/logo_white_2x.png"
                        width="78" height="22" />
                    <div className="sidebar-header-controls">
                        <button type="button" className="btn btn-xs sidebar-slide-toggle btn-link m-l-20 hidden-md-down" data-pages-toggle="#appMenu">
                            <i className="fa fa-angle-down fs-16"></i>
                        </button>
                        <button type="button" className="btn btn-link hidden-md-down" data-toggle-pin="sidebar">
                            <i className="fa fs-12"></i>
                        </button>
                    </div>
                </div>
            
                <div className="sidebar-menu">

                    <ul className="menu-items">
                        <li className="m-t-30 ">
                            <Link href="dashboard" passHref>
                                <a href="" className="w-100">
                                    <span className="title w-100"><i className="pg-home mr-3" />Dashboard</span>
                                </a>
                            </Link>
                        </li>
                        <TopicFont>Store Management</TopicFont>
                        <li className="">
                            <Link href="productmanagement" passHref>
                                <a href="" className="w-100">
                                    <span className="title w-100"><i className="pg-social mr-3" />Product Management</span>
                                </a>
                            </Link>
                        </li>
                        <li className="">
                            <Link href="ordermanagement" passHref>
                                <a href="" className="w-100">
                                    <span className="title w-100"><i className="pg-social mr-3" />Order Management</span>
                                </a>
                            </Link>
                        </li>
                        <TopicFont>Account Management</TopicFont>
                        <li className="">
                            <Link href="usermanagement" passHref>
                                <a href="" className="w-100">
                                    <span className="title w-100"><i className="pg-like1 mr-3" />User Management</span>
                                </a>
                            </Link>
                        </li>
                        
                    </ul>
                    <div className="clearfix"></div>
                </div>
            </nav>
            <div className="page-container">
                <div className="header">

                    <a href="#" className="btn-link toggle-sidebar hidden-lg-up pg pg-menu" data-toggle="sidebar">
                    </a>

                    <div className="">
                        <div className="brand inline m-l-10">
                            นี่โลโก้ไง
                            {/* <img src="/static/admin/assets/img/logo.png" alt="logo" data-src="/static/admin/assets/img/logo.png" data-src-retina="/static/admin/assets/img/logo_2x.png" width="78"
                                height="22" /> */}
                        </div>

                    </div>
                    <div className="d-flex align-items-center">

                        <div className="pull-left p-r-10 fs-14 font-heading hidden-md-down">
                            <span className="semi-bold">กูเอง</span>
                            <span className="text-master">แอดมิน</span>
                        </div>
                        <div className="dropdown pull-right hidden-md-down">
                            <button className="profile-dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="thumbnail-wrapper d32 circular inline">
                                    <img src="/static/admin/assets/img/profiles/avatar.jpg" alt="" data-src="/static/admin/assets/img/profiles/avatar.jpg" data-src-retina="/static/admin/assets/img/profiles/avatar_small2x.jpg"
                                        width="32" height="32" />
                                </span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right profile-dropdown" role="menu">
                                <a href="#" className="dropdown-item">
                                    <i className="pg-power"></i> Logout
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-content-wrapper full-height-100vh">
                    <div className="content sm-gutter">
                        <div className="container-fluid padding-25 sm-padding-10">
                            {props.children}
                        </div>
                    </div>
                    <div className=" container-fluid  container-fixed-lg footer">
                        <div className="copyright sm-text-center">
                            <p className="small no-margin pull-left sm-pull-reset">
                                <span className="hint-text">Copyright &copy; 2017 </span>
                                <span className="font-montserrat">DatabaseHunsa Group</span>.
                                <span className="hint-text">All rights reserved. </span>
                                
                            </p>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
        
    </div>
)

export default AdminLayout