import { useState } from 'react'
import './styles.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setWordCharacters } from '../../app/features/wordSlice'

export const FormWord = ({imgBanner, imgForm }) => {
const [ word, setWord ] = useState('')
const [ error, setError ] = useState(false)
const message = 'You have to enter a word'
const navigate = useNavigate()
const dispatch = useDispatch()

const inputWord = (e) => {
    const newWord = e.target.value
    if (newWord.match(/^\d+$/)) {
      setError('Please, enter only character')
      return
    }
    if (newWord.startsWith(' ')) return
    setWord(e.target.name = newWord)
    word.length < 1
        ? setError(true)   
        : setError(false)
}
const submitWord = (e) => {
    e.preventDefault();
 if(word.length > 1){
    setError(false)
    dispatch(setWordCharacters(word))
    navigate('/result')
 } else{
    setError(true)
 } 
}

    return(
        <article className='container-form-word'>
            <h1 className='title-container-form'>Duplicate Character <span className='span-form-word'>Remover</span></h1>
            <div className='container-word-form'>
                <img src={imgBanner} alt='banner-form' className='img-banner' />
            <div className='container-form'>
            <img src={imgForm} alt='img-form' className='img-form' />
                <form className='form-word' onSubmit={submitWord}>
                    <input className='input-form-word' 
                    placeholder='Enter a word' 
                    name='word' 
                    type='text' 
                    value = {word}
                    onChange={inputWord}/>
                    <p className='message-error-form'>{error ? message : ''}</p>
                    <button className='button-form-word'>Sumbit</button>
                </form>
            </div>
            </div>
        </article>
    )
}