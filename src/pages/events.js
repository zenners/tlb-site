import React from 'react'
import Link from 'gatsby-link'
import { GreyHeader } from '../components/headers'
import { LRContent } from '../components/content'
import { EventForm } from '../components/forms'
const EventsPage = () => (
  <div>
    <GreyHeader
      title="Events"
      subtitle="We provide quality services to launch your startup or grow your business"
    />
    <LRContent />
    <EventForm />
  </div>
)

export default EventsPage
