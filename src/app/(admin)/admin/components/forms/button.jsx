import React from 'react'

export default function SubmitButton({isSubmitting}) {
  return (
    <button type="submit" className="border-2 rounded-lg px-2 py-1 mt-5 border-gray-600" disabled={isSubmitting}>
        Submit
    </button>
  )
}
