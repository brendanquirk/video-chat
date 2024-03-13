import { useState } from 'react'
import { useMeeting } from '@videosdk.live/react-sdk'
import Controls from '../Controls/Controls'
import ParticipantView from '../ParticipantView/ParticipantView'

const MeetingScreen = ({
  onMeetingLeave,
  meetingId,
  participants,
  localParticipant,
}: {
  onMeetingLeave: () => void
  meetingId: string
  participants: object
  localParticipant: object
}) => {
  setTimeout(() => {
    console.log(localParticipant)
  }, 100)
  // console.log(localParticipant)

  return (
    <>
      <div className="container">
        <h3>Meeting Id: {meetingId}</h3>
        {/* <ParticipantView /> */}
        <Controls />
      </div>
    </>
  )
}

export default MeetingScreen
