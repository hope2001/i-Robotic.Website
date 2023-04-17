import React from 'react'
import SecondaryPagesLayout from '@/Components/Layout/SecondaryPagesLayout.jsx'
import SecondaryPagesBanner from '@/Components/Content/SecondaryPagesBanner'
import Layout from '@/Components/Layout/Layout'

export default function AboutPage() {
  return (
    // <SecondaryPagesLayout>
    //   <SecondaryPagesBanner></SecondaryPagesBanner>
    // </SecondaryPagesLayout>
    <Layout pageTarget="A Propos">
      <h1>About</h1>
    </Layout>
  )
}
