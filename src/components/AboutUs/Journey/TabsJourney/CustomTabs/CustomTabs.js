import { useEffect } from 'react'
import ArrowLeftCircle from '../../../../../assets/svg/arrow-left-circle.svg'
import ArrowRightCircle from '../../../../../assets/svg/arrow-right-circle.svg'

function CustomTabs({
  scrollRef,
  activeTab,
  activeRef,
  tabs,
  setTransition,
  setActiveTab,
}) {
  const handleSelect = index => {
    setTransition(true)
    setTimeout(() => {
      setActiveTab(index)
      setTransition(false)
    }, 300) // match the transition duration in CSS
  }

  const handlePrev = () => {
    const newIndex = activeTab > 0 ? activeTab - 1 : tabs.length - 1
    handleSelect(newIndex)
  }

  const handleNext = () => {
    const newIndex = activeTab < tabs.length - 1 ? activeTab + 1 : 0
    handleSelect(newIndex)
  }

  useEffect(() => {
    centerActiveItem()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab])

  // Makes the tab scroll while active
  // thanks to: https://stackoverflow.com/questions/51402763/with-react-how-can-i-horizontally-scroll-to-the-selected-item-in-a-scrollable-d
  const centerActiveItem = () => {
    const scrollContainer = scrollRef.current
    const activeItem = activeRef.current

    if (!activeItem) return

    const scrollRect = scrollContainer.getBoundingClientRect()
    const activeRect = activeItem.getBoundingClientRect()

    const scrollLeftPosition =
      activeRect.left -
      scrollRect.left -
      scrollRect.width / 2 +
      activeRect.width / 2
    scrollContainer.scrollTo({
      left: scrollContainer.scrollLeft + scrollLeftPosition,
      behavior: 'smooth',
    })
  }
  return (
    <div className='d-flex w-100 align-items-center'>
      <div className='svg-container'>
        <ArrowLeftCircle onClick={handlePrev} alt='arrow-left-circle' />
      </div>
      <div
        className='tabs-scroll-container d-flex overflow-x-auto w-100'
        ref={scrollRef}
      >
        <div className='tabs-list d-flex flex-nowrap w-100'>
          {tabs.map((tab, index) => (
            <h4
              key={index}
              ref={activeTab === index ? activeRef : null}
              className={`tab-item ${activeTab === index ? 'active' : ''} text-warning`}
              // onClick={() => handleSelect(index)}
              id={`tab-${index}`}
            >
              {tab.title}
            </h4>
          ))}
        </div>
      </div>
      <div className='svg-container'>
        <ArrowRightCircle onClick={handleNext} alt='arrow-right-circle' />
      </div>
    </div>
  )
}

export default CustomTabs
