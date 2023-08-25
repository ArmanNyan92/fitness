import React, { useState } from 'react'
import './App.css'
import { img_fit } from './fit/Fit'
import { AiOutlineExpand, AiOutlineCompress } from 'react-icons/ai'

export default function App() {
	  const [enlargedImageId, setEnlargedImageId] = useState(null);
	  const [search, setSearch] = useState('')

  const toggleEnlarged = (id) => {
    if (enlargedImageId === id) {
      setEnlargedImageId(null);
    } else {
      setEnlargedImageId(id);
    }
  };

  const handleSearch = (e) => {
	setSearch(e.target.value)
  }
  return (
	<div>
		<div className="nav">
		<a href="/">
			<img src="./img/fitnes.png" alt="" />
		</a>
		<h1><span className='start'>F</span>itness <span className='start'>C</span>onsultant</h1>
		<div className="loading">
			<div></div>
			<div></div>
		</div>
		<input 
		value={search} 
		onChange={handleSearch} 
		className='search' 
		type="text"
		placeholder='Search...'/>
		</div>
		<div className="exampl"></div>
		<div className="container-map">
			{img_fit.filter((filt) => {
				const sea = (filt.exercise.toLowerCase().charAt(0))

				return sea.includes(search.toLowerCase())
			}).map(elem => {
				const isEnlarged = elem.id === enlargedImageId;
				return (
					<div className={`div-map ${isEnlarged ? 'enlarged' : ''}`} key={elem.id}>
						<span className='icon'>
							 {isEnlarged ? (
                  <AiOutlineCompress onClick={() => toggleEnlarged(elem.id)} />
                ) : (
                  <AiOutlineExpand onClick={() => toggleEnlarged(elem.id)} />
                )}
						</span>
						<h4>{elem.exercise}</h4>
						<img  className={`img ${isEnlarged ? 'enlarged' : ''}`} src={elem.img} alt="" />
					</div>
				)
			})}
		</div>
	</div>
  )
}
