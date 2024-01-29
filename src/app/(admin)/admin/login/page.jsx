import React, { Suspense } from 'react'
import AdminLogin from './AdminLogin'

export default function Page() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Suspense>
        <AdminLogin />
      </Suspense>
    </div>
  )
}
