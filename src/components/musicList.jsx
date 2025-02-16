import { useState } from 'react'

const musicList = () => {

  const [songname, setSongName] = useState('')
  const [singer, setSinger] = useState('')
    const [album, setAlbum] = useState('')
    const [posterUrl, setPosterUrl] = useState('')

const [songsList , setSongsList] = useState([])

  const onSubmitHandler = (e) => {
    e.preventDefault()
    setSongsList([...songsList, {songname, singer,album ,posterUrl}])
    setSongName('')
    setSinger('')
    setAlbum('')
    setPosterUrl('')
  }

  const DltHandler = (index) => {
    const updatedSongs = [...songsList]
    updatedSongs.splice(index, 1)
    setSongsList(updatedSongs)
  }

  let SongData = <h2>No Song Available</h2>

  if(songsList.length > 0) {
    SongData = songsList.map((songs, index) => {
      return (
        <li key={index}>
            <img src={songs.posterUrl} alt={songs.songname} />
          <h3>{songs.songname}</h3> by 
          <p>{songs.singer}</p> to
            <p>{songs.album}</p>
          <button onClick={()=>{
            DltHandler(index)
          }} className='dlt'>Delete</button>
        </li>

      )
    })
  }

  return (
    <>
  <h1>Song Lists</h1>
  <form  onSubmit={onSubmitHandler}>
    <input type="text"
    placeholder='Song Name'
    value={songname}
    required
    onChange={(e) => setSongName(e.target.value)}
    />
    <input type="text"
    placeholder='Singer'
    value={singer}
    required
    onChange={(e) => setSinger(e.target.value)}
    />
    <input type="text"
    placeholder='Album'
    value={album}
    required
    onChange={(e) => setAlbum(e.target.value)}
    />
        <input
          type="text"
          placeholder="Poster Image URL"
          value={posterUrl}
          onChange={(e) => setPosterUrl(e.target.value)}
        />
    <button>Add Song</button>
  </form>
  <hr />
  <div className="SongsList">
<ul>
  {SongData}
</ul>
  </div>

    </>
  )
}

export default musicList
