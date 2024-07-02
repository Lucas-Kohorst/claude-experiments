// app/validator/[id]/page.tsx
import ValidatorDetails from '@/components/ValidatorDetails'

export default function ValidatorPage({ params }) {
  return (
    <div className="container mx-auto p-4">
      <ValidatorDetails validatorId={params.id} />
    </div>
  )
}