import dotenv from 'dotenv'
dotenv.config()
export const authToken = process.env.REACT_APP_API_KEY

// API call to create a meeting
export const createMeeting = async ({ token }: { token: typeof authToken }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: 'POST',
    headers: {
      authorization: `${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  })
  //Destructuring the roomId from the response
  const { roomId }: { roomId: string } = await res.json()
  return roomId
}
