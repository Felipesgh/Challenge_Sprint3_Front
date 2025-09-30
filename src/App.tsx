
import React from "react"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import Integrantes from "./pages/Integrantes"
import IntegranteDetail from "./pages/IntegrantesDetail"


export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/integrante/:id" element={<IntegranteDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
