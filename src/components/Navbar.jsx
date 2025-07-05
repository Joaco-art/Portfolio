

function Navbar(navbarProps) {
    return (
        <nav className="bg-gradient-to-r from-[#172444]  to-[#2d3f58] border-r-4 shadow-2xl w-screen h-32 p-8  flex justify-between items-center">
            <ul className="flex w-screen gap-5 text-xl">
                <li className="mr-auto ml-10">{navbarProps.name}</li>
                <li>{navbarProps.atr}</li>
                <li>{navbarProps.atrr}</li>
                <li>{navbarProps.atrrr}</li>
                <li className="mr-10">{navbarProps.atrrrr}</li>
            </ul>
        </nav>
    )
}
export default Navbar;