import Card from "./Card";
import Hero from "./Hero";
import Navbar from "./Navbar";

export default function App() {
    return (
        <div className="main-container">
            <Navbar />
            <Hero />
            <Card />
        </div>
    )
}