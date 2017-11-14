// import Document, {Main, NextScript } from 'next/document'
// import flush from 'styled-jsx/server'
// import MyHead from '../components/adminhead'

// export default class MyDocument extends Document {
//   static getInitialProps({ renderPage }) {
//     const { html, head, errorHtml, chunks } = renderPage()
//     const styles = flush()
//     return { html, head, errorHtml, chunks, styles }
//   }

//   render() {
//     return (
//       <html>
//         <MyHead />
//         <body className="fixed-header dashboard menu-pin menu-behind">
            
//           <Main />
//           <NextScript />
//         </body>
//       </html>
//     )
//   }
// }