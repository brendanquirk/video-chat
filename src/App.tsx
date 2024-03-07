import { useState } from 'react'
import { useMeeting } from '@videosdk.live/react-sdk'
import { authToken, createMeeting } from './API'
import JoinScreen from './components/JoinScreen/JoinScreen'
import MeetingScreen from './components/MeetingScreen/MeetingScreen'
import { log } from 'console'

const App = () => {
  const [meetingId, setMeetingId] = useState<string | null>(null)
  const [joined, setJoined] = useState<string>('')

  const getMeetingAndToken = async (id?: string) => {
    const meetingId =
      id == null ? await createMeeting({ token: authToken }) : id
    setMeetingId(meetingId)
  }

  const { join, participants } = useMeeting({
    onMeetingJoined: () => {
      setJoined('JOINED')
    },
    onMeetingLeft: () => {
      onMeetingLeave()
    },
  })

  const joinMeeting = () => {
    setJoined('JOINING')
    join()
  }

  const onMeetingLeave = () => {
    setMeetingId(null)
  }
  console.log(participants)

  return (
    <>
      <h1>Video Chat App</h1>
      {meetingId ? (
        <MeetingScreen
          onMeetingLeave={onMeetingLeave}
          meetingId={meetingId}
          // participants={participants}
        />
      ) : joined && joined === 'JOINING' ? (
        <p>Joining the meeting...</p>
      ) : (
        <JoinScreen
          getMeetingAndToken={getMeetingAndToken}
          joinMeeting={joinMeeting}
        />
      )}
    </>
  )
}

export default App
