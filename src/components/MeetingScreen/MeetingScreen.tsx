import { useState } from 'react'
import { useMeeting } from '@videosdk.live/react-sdk'
import Controls from '../Controls/Controls'
import ParticipantView from '../ParticipantView/ParticipantView'

const MeetingScreen = ({
  onMeetingLeave,
  meetingId,
}: {
  onMeetingLeave: () => void
  meetingId: string
}) => {
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
