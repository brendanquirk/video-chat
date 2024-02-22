import React, { useEffect, useMemo, useRef, useState } from 'react'
import {
  MeetingProvider,
  MeetingConsumer,
  useMeeting,
  useParticipant,
} from '@videosdk.live/react-sdk'
import { authToken, createMeeting } from './API'
import ReactPlayer from 'react-player'
import JoinScreen from './components/JoinScreen'

const App = () => {
  const [meetingId, setMeetingId] = useState<string | null>(null)

  const getMeetingAndToken = async (id?: string) => {
    console.log(authToken)
    const meetingId =
      id == null ? await createMeeting({ token: authToken }) : id
    setMeetingId(meetingId)
  }

  return (
    <>
      <h1>Video Chat App</h1>
      <h2>{meetingId}</h2>
      <JoinScreen getMeetingAndToken={getMeetingAndToken} />
    </>
  )
}

export default App
