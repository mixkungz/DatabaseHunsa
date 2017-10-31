import Header from './header';
import Footer from './footer';
import Head from 'next/head';
import styled , {injectGlobal} from 'styled-components';





const MyLayout = (props) => (
    <div>
        <Head>
            <title>DatabaseHunsa | Layout</title>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <link rel='stylesheet' href='/static/css/bootstrap.min.css' />
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
        </Head>
        <Header />
            <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                {props.children}
            </div>
        <Footer />
    </div>
)

export default MyLayout