// Write your code here
import {Chrono} from 'react-chrono'
import {AppContainer, MyJourney, CCBP} from './styledComponents'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimeline = item => {
    if (item.categoryId === 'COURSE') {
      return <CourseTimelineCard key={item.id} itemData={item} />
    }
    return <ProjectTimelineCard key={item.id} itemData={item} />
  }

  return (
    <AppContainer>
      <MyJourney>
        MY JOURNEY OF <br />
        <CCBP>MY JOURNEY OF CCBP 4.0</CCBP>
      </MyJourney>

      <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING">
        {timelineItemsList.map(eachItem => renderTimeline(eachItem))}
      </Chrono>
    </AppContainer>
  )
}
export default TimelineView
