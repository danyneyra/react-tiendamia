import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import Hero from "../components/Hero";

function NotFound(){
    return (
        <>
        <NavBar/>
        <Hero first="página" second="no encontrada"/>
        <main className="w-full flex justify-center items-center p-5 flex-grow-1">
        </main>
        <Footer/>
        </>
    )
}

export default NotFound