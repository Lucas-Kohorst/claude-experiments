// components/Navbar.tsx
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          Ethereum Validator App
        </Link>
        <div>
          <Link href="/about" className="text-white ml-4">
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar