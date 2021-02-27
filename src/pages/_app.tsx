import '../styles/global.css';


/*
  Aqui vai ficar todo conteúdo que fará composição de todas as telas, ex: menu, header, footer, etc...

  ChallengeProvider, compartilha informação entre todos os componentes dentro dele.
*/

function MyApp({ Component, pageProps }) {


  return (

    <Component {...pageProps} />


  )
}

export default MyApp

