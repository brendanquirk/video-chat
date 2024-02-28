import { useState } from 'react'
import { useMeeting } from '@videosdk.live/react-sdk'
import Controls from '../Controls/Controls'

const MeetingScreen = ({
  onMeetingLeave,
  meetingId,
  joined,
}: {
  onMeetingLeave: () => void
  meetingId: string
  joined: string
}) => {
  return (
    <>
      <div className="container">
        <h3>Meeting Id: {meetingId}</h3>
        <h4>{joined}</h4>
        <Controls />
      </div>
    </>
  )
}

export default MeetingScreen
