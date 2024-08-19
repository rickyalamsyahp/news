'use client'

import { useRef, useState } from 'react'
import CustomTabs from './CustomTabs/CustomTabs'
import ContentTab from './ContentTabs/ContentTab'

function TabsJourney({ journey }) {
  const [activeTab, setActiveTab] = useState(0)
  const [transition, setTransition] = useState(false)
  const scrollRef = useRef(null)
  const activeRef = useRef(null)

  const tabs = journey?.map(data => ({
    eventKey: data.attributes.title,
    title: data.attributes.year,
    content: `${process.env.NEXT_PUBLIC_HOST_IMAGE}${data.attributes.image.data.attributes.url}`,
    text: data.attributes.highlight,
    width: data.attributes.image.data.attributes.width,
    height: data.attributes.image.data.attributes.height,
  }))

  return (
    <div className='tabs-container d-flex flex-column align-item-center pb-5'>
      <CustomTabs
        scrollRef={scrollRef}
        activeTab={activeTab}
        activeRef={activeRef}
        tabs={tabs}
        setTransition={setTransition}
        setActiveTab={setActiveTab}
      />
      <ContentTab transition={transition} activeTab={activeTab} tabs={tabs} />
    </div>
  )
}

export default TabsJourney
