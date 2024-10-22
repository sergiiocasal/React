import { Link } from "../Link.jsx"

export default function AboutPage() {
    return (
        <>
            <h1>Sobre Nosotros</h1>
            <div>
                <img src="http://unavatar.io/sergiiocasal" alt="Foto del creador" />
                <p>Hola! Soy Sergio y estoy creando un clon de React Router</p>
            </div>
            <Link to='/'>Ir a la Home</Link>
        </>

    )
}