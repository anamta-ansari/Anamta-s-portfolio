import Link from "next/link";


export  default function Navbar ()  {
    return(
        <nav className="bg-[#A0D8F1] text-white p-4 h-[80px]">
  <div className="flex justify-between items-center">
    <a href="#" className="text-[30px] font-bold">My Portfolio</a>
    <ul className="list-none flex gap-5">
      <li>
        <Link href="/">HOME</Link>
      </li>
      <li>
        <Link href="/about">ABOUT</Link>
      </li>
      <li>
        <Link href="/skills">SKILLS</Link>
      </li>
      <li>
        <Link href="./Components/Services">SERVICES</Link>
      </li>
      <li>
        <Link href="/contact">CONTACT</Link>
      </li>
    </ul>
  </div>
  
</nav>

    );
};

