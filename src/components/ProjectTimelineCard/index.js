// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import {
  ProjectCardContainer,
  HeadingContainer,
  Heading,
  Duration,
  DurationTime,
  Description,
  Visit,
  ImgBox,
} from './styledComponents'

const ProjectTimelineCard = props => {
  const {itemData} = props
  const {projectTitle, imageUrl, description, duration, projectUrl} = itemData

  return (
    <ProjectCardContainer>
      <ImgBox src={imageUrl} alt="project" />
      <HeadingContainer>
        <Heading>{projectTitle}</Heading>
        <Duration>
          <AiFillCalendar size={20} />
          <DurationTime>{duration}</DurationTime>
        </Duration>
      </HeadingContainer>
      <Description>{description}</Description>
      <Visit href={projectUrl}>Visit</Visit>
    </ProjectCardContainer>
  )
}
export default ProjectTimelineCard
