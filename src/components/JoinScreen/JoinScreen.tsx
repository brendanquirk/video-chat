import { useState } from 'react'
import { useMeeting } from '@videosdk.live/react-sdk'

const JoinScreen = ({
  getMeetingAndToken,
}: {
  getMeetingAndToken: (meeting?: string) => void
}) => {
  const [meetingId, setMeetingId] = useState<string | undefined>()

  const onClick = async () => {
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
      <button onClick={onClick}>Join</button>
      {' or '}
      <button onClick={onClick}>Create Meeting</button>
    </div>
  )
}

export default JoinScreen
