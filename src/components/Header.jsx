import earth from '../assets/images/planet.png'

export default function Header () {
    return (
        <header>
            <img src={earth} alt="Planet Earth Icon" />
            <h3>my travel journal.</h3>
        </header>
    )
}