// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import {
  TimeLineCardContainer,
  HeadingContainer,
  TagListContainer,
  ListItems,
  Duration,
  Heading,
  DurationTime,
  Description,
} from './styledComponents'

const CourseTimelineCard = props => {
  const {itemData} = props
  const {courseTitle, description, duration, tagsList} = itemData

  return (
    <TimeLineCardContainer>
      <HeadingContainer>
        <Heading>{courseTitle}</Heading>
        <Duration>
          <AiFillClockCircle size={20} />
          <DurationTime>{duration}</DurationTime>
        </Duration>
      </HeadingContainer>
      <Description>{description}</Description>
      <TagListContainer>
        {tagsList.map(each => (
          <ListItems>{each.name}</ListItems>
        ))}
      </TagListContainer>
    </TimeLineCardContainer>
  )
}
export default CourseTimelineCard
