import React, { useEffect, useMemo, useRef, useState } from 'react'
import { MeetingProvider } from '@videosdk.live/react-sdk'
import { authToken, createMeeting } from './API'
import ReactPlayer from 'react-player'
import JoinScreen from './components/JoinScreen/JoinScreen'
import MeetingScreen from './components/MeetingScreen/MeetingScreen'

const App = () => {
  const [meetingId, setMeetingId] = useState<string | null>(null)

  const getMeetingAndToken = async (id?: string) => {
    const meetingId =
      id == null ? await createMeeting({ token: authToken }) : id
    setMeetingId(meetingId)
  }

  const onMeetingLeave = () => {
    setMeetingId(null)
  }

  return (
    <>
      <MeetingProvider
        config={{
          meetingId: 'meeting-id',
          micEnabled: true,
          webcamEnabled: true,
          name: 'Participant Name',
        }}
        token={'token'}
        joinWithoutUserInteraction // Boolean
      >
        <h1>Video Chat App</h1>
        {meetingId ? (
          <MeetingScreen
            onMeetingLeave={onMeetingLeave}
            meetingId={meetingId}
          />
        ) : (
          <JoinScreen getMeetingAndToken={getMeetingAndToken} />
        )}
      </MeetingProvider>
    </>
  )
}

export default App
