import { useState } from 'react'
import { useMeeting } from '@videosdk.live/react-sdk'
const MeetingScreen = ({
  onMeetingLeave,
  meetingId,
}: {
  onMeetingLeave: () => void
  meetingId: string
}) => {
  const [joined, setJoined] = useState<string | null>(null)

  const join = useMeeting({
    onMeetingJoined: () => {
      setJoined('JOINED')
    },
    onMeetingLeft: () => {
      onMeetingLeave()
    },
  })

  const joinMeeting = () => {
    setJoined('JOINING')
  }

  return (
    <>
      <div className="container">
        <h3>Meeting Id: {meetingId}</h3>
      </div>
    </>
  )
}

export default MeetingScreen
