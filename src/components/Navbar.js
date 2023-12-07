import Link from "next/link";

const links = [
    {path: '/', name: 'home'},
    {path: '/project', name: 'my projects'},
    {path: '/contact', name: 'contact'},
]
const Navbar = ({containerStyles, linkStyles, underlineStyles}) => {
return <nav className={`${containerStyles}`}>
    {links.map((link, index) => {
        return <Link key={index} href={link.path} className={`capitalize ${linkStyles}`}>{link.name}</Link>
    })}
</nav>
}

export default Navbar;