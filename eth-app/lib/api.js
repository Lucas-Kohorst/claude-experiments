// lib/api.ts
const BASE_URL = 'https://beaconcha.in/api/v1'

export const getValidatorInfo = async (validatorId) => {
  try {
    const response = await fetch(`${BASE_URL}/validator/${validatorId}`, { next: { revalidate: 60 } })
    if (!response.ok) {
      throw new Error('Failed to fetch validator info')
    }
    const data = await response.json()
    return data.data
  } catch (error) {
    console.error('Error fetching validator info:', error)
    throw error
  }
}

export const getTopValidators = async (limit = 10) => {
  try {
    const response = await fetch(`${BASE_URL}/validator/leaderboard?limit=${limit}`, { next: { revalidate: 300 } })
    if (!response.ok) {
      throw new Error('Failed to fetch top validators')
    }
    const data = await response.json()
    return data.data
  } catch (error) {
    console.error('Error fetching top validators:', error)
    throw error
  }
}