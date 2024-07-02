import ValidatorSearch from '@/components/ValidatorSearch'

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Welcome to Ethereum Validator App</h1>
      <ValidatorSearch />
    </div>
  )
}