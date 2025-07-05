

function Navbar(navbarProps) {
    return (
        <nav className="bg-gray-800 w-screen h-32 p-8 flex justify-between items-center">
            <ul className="flex w-screen gap-5">
                <li className="mr-auto">{navbarProps.name}</li>
                <li>{navbarProps.atr}</li>
                <li>{navbarProps.atrr}</li>
                <li>{navbarProps.atrrr}</li>
                <li>{navbarProps.atrrrr}</li>
            </ul>
        </nav>
    )
}
export default Navbar;