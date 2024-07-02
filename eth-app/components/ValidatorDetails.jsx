// components/ValidatorDetails.tsx
import { getValidatorInfo } from '@/lib/api'

const ValidatorDetails = async ({ validatorId }) => {
  let validatorInfo;
  try {
    validatorInfo = await getValidatorInfo(validatorId);
  } catch (error) {
    console.error('Error fetching validator info:', error);
    return <div>Error fetching validator information</div>;
  }

  if (!validatorInfo) return <div>No validator information found</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Validator {validatorId} Details</h2>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Validator Information</h3>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Status</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{validatorInfo.status}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Balance</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{validatorInfo.balance} ETH</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Effectiveness</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{validatorInfo.effectiveness}%</dd>
            </div>
            {/* Add more fields as needed */}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default ValidatorDetails