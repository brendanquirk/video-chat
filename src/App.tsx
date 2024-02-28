import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useMeeting } from '@videosdk.live/react-sdk'
import { authToken, createMeeting } from './API'
import ReactPlayer from 'react-player'
import JoinScreen from './components/JoinScreen/JoinScreen'
import MeetingScreen from './components/MeetingScreen/MeetingScreen'

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
    // onMeetingLeft: () => {
    //   onMeetingLeave()
    // },
  })

  const onMeetingLeave = () => {
    setMeetingId(null)
  }

  return (
    <>
      <h1>Video Chat App</h1>
      {meetingId ? (
        <MeetingScreen
          onMeetingLeave={onMeetingLeave}
          meetingId={meetingId}
          joined={joined}
        />
      ) : (
        <JoinScreen getMeetingAndToken={getMeetingAndToken} />
      )}
    </>
  )
}

export default App
