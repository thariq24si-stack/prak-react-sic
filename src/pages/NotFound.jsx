import React from "react"
import ErrorPage from "../components/ErrorPage"
import PageHeader from "../components/PageHeader"
import { FaSearchMinus } from "react-icons/fa"

export default function NotFound() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeader />

      <ErrorPage
        code={404}
        description="ERROR BRO, BALIK SANA!!!"
        image={<FaSearchMinus className="text-9xl text-blue-600 animate-pulse" />}
      />
    </div>
  )
}