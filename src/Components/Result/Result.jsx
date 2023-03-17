import { useSelector } from "react-redux"
import './styles.css'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import confetti from 'canvas-confetti'

export const Result = () => {
    const navigate = useNavigate()
    const [ characters, setCharacters ] = useState([])
    const [ finish, setFinish ] = useState(false)
    const word = useSelector(state => state.word)
    const set = new Set(characters).size
    
    useEffect(()=>{
        if(set > 0 ){
            if(set === characters.length){
                setFinish(true)
                confetti({
                    particleCount:300,
                    spread:200
                })
            }
                }    
    },[characters])
        
   
    
    
   useEffect(()=>{
    setCharacters(word.replace(/\s/g ,'').toUpperCase().split(''))
   },[]) 

const handleDelete = (word, index)=>{
    const newArray = characters.map((el, i) =>{
        if( i < index  && el !== word|| i > index && el !== word){
            return  el
        } else if( i === index){
            return el
        }
    })
 setCharacters(newArray.filter(el => el !== undefined)) 
}
const closeModal = () => {
    setFinish(false)
}
const backPage = () => {
    navigate('/')
}

    return(
        <><section className='container-characters-cards'>
            <h1 className='title-container-form'>Duplicate Character <span className='span-form-word'>Remover</span></h1>
            <div className ='container-cards'>
            {characters.map((el, i) => {
                return (
                    <div className='cards' key={i}>
                        <button className='button-delete-cards' onClick={()=>handleDelete(el, i)}>x</button>
                        <p className={`${el} character-card`}>{el.toUpperCase()}</p>
                    </div>
                )
            })}
            </div>
            { finish 
            ? <div className='modal-cards'>
                <div className='modal-cards-finish'>
                    <h1>Congratulations</h1>
                   <p>You finish the game!!</p>
                   <button className='button-close-modal' onClick={closeModal}>Close</button>
                    </div>
                </div> : ''}
        </section><div className='container-label-initial-word'>
             <div className='container-title-label'>
                <p> Initial word</p>
                <label className='label-initial-word'>{word.toUpperCase()}</label>
                </div>
                <div className='container-title-label'>
                <p>Final word</p>
                <label className='label-final-word'>{characters}</label>
                </div>
            </div>
            <button className='button-cards-back' onClick={backPage}>Back</button></>
    )
}