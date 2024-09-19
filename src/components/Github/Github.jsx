import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

function Github() {

  const data = useLoaderData()

  //another way to fetch data from api and other is by using loader in route
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   fetch('https://api.github.com/users/krey-yon')
  //     .then((response) => response.json())
  //     .then((data) => setData(data))
  // }, [])


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <div>Followers : {data.followers}</div>
      <img src={data.avatar_url} alt="pic" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/krey-yon')
  return response.json()
}