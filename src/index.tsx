import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { MeetingProvider } from '@videosdk.live/react-sdk'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
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
      <App />
    </MeetingProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
