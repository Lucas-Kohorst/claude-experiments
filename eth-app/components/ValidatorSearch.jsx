"use client"
// components/ValidatorSearch.tsx
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const ValidatorSearch = () => {
  const [validatorId, setValidatorId] = useState('')
  const router = useRouter()

  const handleSearch = (e) => {
    e.preventDefault()
    if (validatorId) {
      router.push(`/validator/${validatorId}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="mb-4">
      <input
        type="text"
        value={validatorId}
        onChange={(e) => setValidatorId(e.target.value)}
        placeholder="Enter Validator ID"
        className="border p-2 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Search
      </button>
    </form>
  )
}

export default ValidatorSearch