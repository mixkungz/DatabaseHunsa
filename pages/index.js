// import { Layout, Menu, Breadcrumb } from 'antd';
// const { Header, Content, Footer } = Layout;
// import MyNav from '../components/nav'

import Head from 'next/head';
import MyLayout from '../components/layout';


class Main extends React.Component {
    render() {
      return (
        <div>
            <MyLayout>
                <Head>
                    <title>DatabaseHunsa | หน้าหลัก</title>
                </Head>
                <div>
                    test
                    <br/>
                    <br/>
                </div>
            </MyLayout>
        </div>
      );
    }
}

export default Main