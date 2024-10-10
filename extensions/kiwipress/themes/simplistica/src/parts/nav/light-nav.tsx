
// @ts-ignore 
import WPSync from 'kiwipress'
function NavLight() {
    const wp = new WPSync();
    return (
    <header className="w:70 h:10 bgc-white-100 ds:sm m:auto">
        <nav className="flex between items:center justify:center p:rel:5"> 
            <div className="homemade-apple mt:8">Simplistica</div>
            <ul className="flex gap:1">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
    )
}

export { NavLight }