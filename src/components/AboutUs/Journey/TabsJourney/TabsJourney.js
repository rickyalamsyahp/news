'use client'

import { useRef, useState } from 'react'
import Journey1 from '../../../../assets/images/images-journey-1.png'
import CustomTabs from './CustomTabs/CustomTabs'
import ContentTab from './ContentTabs/ContentTab'

function TabsJourney() {
  const [activeTab, setActiveTab] = useState(0)
  const [transition, setTransition] = useState(false)
  const scrollRef = useRef(null)
  const activeRef = useRef(null)

  const tabs = [
    { eventKey: '1987', title: '1987', content: Journey1 },
    { eventKey: '1988', title: '1988', content: Journey1 },
    { eventKey: '1989', title: '1989', content: Journey1 },
    { eventKey: '1990', title: '1990', content: Journey1 },
    { eventKey: '1995', title: '1995', content: Journey1 },
    { eventKey: '2005', title: '2005-2006', content: Journey1 },
  ]

  return (
    <div className='tabs-container d-flex flex-column align-item-center'>
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
