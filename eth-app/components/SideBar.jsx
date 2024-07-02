// components/Sidebar.tsx
import Link from 'next/link'

const Sidebar = () => {
  return (
    <aside className="bg-gray-100 w-64 min-h-screen p-4">
      <h2 className="text-xl font-semibold mb-4">Top 10 Validators</h2>
      <ul>
        {/* This would be populated dynamically */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
          <li key={id} className="mb-2">
            <Link href={`/validator/${id}`} className="text-blue-600 hover:underline">
              Validator {id}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar