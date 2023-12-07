import Link from "next/link";
import Image from "next/image";
const AppLogo = () => {
return <div>
<Link href="/">
    <Image src="logo.svg" width={54} height={54} priority alt="logo" />
</Link>
</div>
}

export default AppLogo