import * as React from "react"
import Teste from "../components/teste"
import { Link } from "gatsby"
import Layout from "../components/layout"


//Isso é um componente React
export default function IndexPage () {
  return (
    <Layout titulo="Home">
      <h1>
        Olá Gatsby World!
      </h1>
      <p>
        Estamos estudando o Gatsby
      </p>
      <Teste nome = "Machado de Assis"/>
      <Link to = "/about">Sobre</Link>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

/*//Sintaxe 1
function funcao1(){
}

//Sintaxe 2
const funcao2 = () => {
}

//sintaxe 3
const funcao3 = function () {
}*/