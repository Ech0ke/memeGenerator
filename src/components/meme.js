import { useState, useEffect } from "react"

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/2hgfw.jpg",
  })

  const [allMemes, setAllMemes] = useState([])

  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes")
      const data = await res.json()
      setAllMemes(data.data.memes)
    }
    getMemes()
  }, [])

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }))
  }

  function handleChange(event) {
    const { name, value } = event.target
    setMeme((oldData) => ({
      ...oldData,
      [name]: value,
    }))
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
          placeholder="Top text"
          className="form--input"
        />
        <input
          type="text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
          placeholder="Bottom text"
          className="form--input"
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="Meme img" className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )
}

export default Meme
