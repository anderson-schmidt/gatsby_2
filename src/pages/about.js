import * as React from "react"
//import Teste from "../components/teste"
import Layout from "../components/layout"

//Isso é um componente React
export default function IndexPage () {
  return (
    <Layout titulo="About">
      <h1>
       Sobre
      </h1>
      <p>
        Estamos estudando o Gatsby
      </p>
    </Layout>
  )
}

export const Head = () => <title>Sobre</title>

/*//Sintaxe 1
function funcao1(){
}

//Sintaxe 2
const funcao2 = () => {
}

//sintaxe 3
const funcao3 = function () {
}*/