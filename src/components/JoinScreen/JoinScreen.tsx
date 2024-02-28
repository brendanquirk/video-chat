import { useState } from 'react'
import { useMeeting } from '@videosdk.live/react-sdk'

const JoinScreen = ({
  getMeetingAndToken,
  joinMeeting,
}: {
  getMeetingAndToken: (meeting?: string) => void
  joinMeeting: () => void
}) => {
  const [meetingId, setMeetingId] = useState<string | undefined>()

  const createMeeting = async () => {
    getMeetingAndToken(meetingId)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Meeting Id"
        onChange={(e) => {
          setMeetingId(e.target.value)
        }}
      />
      <button onClick={joinMeeting}>Join</button>
      {' or '}
      <button onClick={createMeeting}>Create Meeting</button>
    </div>
  )
}

export default JoinScreen
