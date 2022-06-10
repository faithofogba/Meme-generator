import React from 'react';
import memesData from '../memesData'

export default function () {
    let url
    const [meme, setMeme] = React.useState({
        topText: "", 
        bottomText: "", 
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData);

    const getMemeImage = () => {
       const memeArray = allMemeImages.data.memes;
       const randomNumber = (Math.floor(Math.random() * memeArray.length))
       url = memeArray[randomNumber].url

       setMeme(prevMeme => ({
           ...prevMeme, 
           randomImage: url
       }))
    };

    console.log(meme)
    function handleChange(event) {
        setMeme(prevMeme => ({
            ...prevMeme,
            [event.target.name]: event.target.value
        }))
    }

  return (
    <main className='main'>
        <div className='form'>
            <input 
                type='text' 
                className="form--input" 
                placeholder='Bottom text'
                onChange={handleChange}
                name="topText"
                value={meme.topText}
            />
            <input 
                type='text' 
                className="form--input" 
                placeholder='Top text' 
                onChange={handleChange}
                name="bottomText"
                value={meme.bottomText}
            />
            <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
        </div>
        <div className="meme">
            <img src={meme.randomImage} className="meme--image" />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
    </main>
  )
}

 