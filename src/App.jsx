import { useState } from 'react'
import './App.css'
import Card from './components/Card'



const App = () => {

  const [cards, setCards] = useState(CARDS)
  const [count, setCount] = useState(1);
  const plusCount = () => 
  {if(count == cards.length - 1){
    setCount(0);
  } else {
    setCount(count + 1);
  }
}

  const minusCount = () => 
  {if(count == 0){
    setCount(cards.length - 1);
  } else {
    setCount(count - 1);
  }
}

  const shuffleCards = () => {
    const shuffled = [...cards]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setCards(shuffled)
  }
  

  return (
    <div className="App">
      <div>
        <h1>Favorite Songs By Favorite Artists</h1>
        <h2>What are the following artists best songs?</h2>
        <h4>Number of Cards: {cards.length} </h4>
        <div>
          <Card flashcard={cards[count]}/>
        </div>
        <div className='buttons'>
          <button type="back" class="prevCard" onClick={minusCount}>←</button>
          <button type="shuffle" class="shuffle" onClick={shuffleCards}>Shuffle</button>
          <button type="next" class="nextCard" onClick={plusCount}>→</button>
        </div>
        
      </div>
    </div>
  )
}

const CARDS = [
  {
    id: 1,
    artist: "Gunna",
    face: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Gunna_in_2021.png/220px-Gunna_in_2021.png",
    song: "Met Gala",
    cover: "https://images.genius.com/9f28dbb3539fdcd04e34dcf92cab955b.1000x1000x1.png"
  },
  {
    id: 2,
    artist: "Baky Keem",
    face: "https://i.scdn.co/image/ab6761610000e5ebd6f2323c1971fd5a70cd0255",
    song: "HONEST",
    cover: "https://images.genius.com/da2aef34fb77f2bec20e259576b69f98.1000x1000x1.png"
  },
  {
    id: 3,
    artist: "Bad Bunny",
    face: "https://m.media-amazon.com/images/M/MV5BODJkMzcwODktZGIyZi00NmE3LWFkYzAtMzkxNWYwMjhmZWE5XkEyXkFqcGdeQXVyMTEzNjc3MDQ5._V1_.jpg",
    song: "Otro Atardecer",
    cover: "https://images.genius.com/8e4fa2ecabe8d6b9791c4fc0cf0d5245.1000x1000x1.jpg"
  },
  {
    id: 4,
    artist: "Drake",
    face: "https://www.rollingstone.com/wp-content/uploads/2021/09/drake-clb-review.jpg?w=1581&h=1054&crop=1",
    song: "Feel No Ways",
    cover: "https://media.pitchfork.com/photos/5929f7b6c0084474cd0c5c47/1:1/w_450%2Cc_limit/5f3c8267.jpg"
  },
  {
    id: 5,
    artist: "SZA",
    face: "https://people.com/thmb/xUqH8stLAg6peLW6ZSwlCpiPPj4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(734x349:736x351)/sza-met-gala-121322-37108b028e7a43f29e7504af9dbf86ab.jpg",
    song: "2 AM",
    cover: "https://upload.wikimedia.org/wikipedia/en/b/bf/SZA_-_Ctrl_cover.png"
  },
  {
    id: 6,
    artist: "A Boogie",
    face: "https://media.stubhubstatic.com/stubhub-catalog/d_defaultLogo.jpg/t_f-fs-0fv,q_auto:low,f_auto,c_fill,$w_280_mul_3,$h_180_mul_3/performer/1513026/yhobpdc18bouf1puwqb2",
    song: "Jungle",
    cover: "https://i1.sndcdn.com/artworks-zD0cdjRrzaDT-0-t500x500.jpg"
  },
  {
    id: 7,
    artist: "Frank Ocean",
    face: "https://i.scdn.co/image/ab6761610000e5ebfbc3faec4a370d8393bee7f1",
    song: "Nights",
    cover: "https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg"
  },
  {
    id: 8,
    artist: "LUCKI",
    face: "https://i1.sndcdn.com/artworks-ZTCBzzxg1HZq0Ao9-xevFtw-t500x500.jpg",
    song: "Super Urus",
    cover: "https://i.scdn.co/image/ab67616d0000b273ba1e08a3179fdf5a5125fe63"
  },
  {
    id: 9,
    artist: "Future",
    face: "https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/hyfzmsyr5x9jvqep8m4s/future?fimg-ssr-default",
    song: "Throw Away",
    cover: "https://i.scdn.co/image/ab67616d0000b273e2528d35865f3114cfe9a16e"
  },
  {
    id: 10,
    artist: "PinkPantheress",
    face: "https://i1.sndcdn.com/avatars-oTtGExRdohv0E1s5-G86HYA-t500x500.jpg",
    song: "Break it Off",
    cover: "https://upload.wikimedia.org/wikipedia/en/6/6c/PinkPantheress_-_To_Hell_with_It.png"
  },
]

export default App