import { useState } from 'react'
import emailjs from 'emailjs-com'

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div>
      <div id='footer'>
        <div className='container text-center'>
        <div className='row dugu'>
            <div className='col-md-4'>
            </div>
            <div className='col-md-4 socials'>
              <div className='social'>
                <img src="../img/Facebook.png" alt="Facebook"/>
              </div>
              <div className='social'>
                <img src="../img/insta.png" alt="Facebook"/>
              </div>
              <div className='social'>
                <img src="../img/youtube.png" alt="Facebook"/>
              </div>
              <div className='social'>
                <img src="../img/twitter.png" alt="Facebook"/>
              </div>
              <div className='social'>
                <img src="../img/linkedin.png" alt="Facebook"/>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='social'>
                <img src="../img/arrow.png" width="auto" height="28px" alt="arrow"/>
              </div>
            </div>
          </div>
          <p>
            Aster CMI. All Rights Reserved
          </p>
        </div>
        <div className="row">
          <a href="">
            
          </a>
        </div>
      </div>
    </div>
  )
}
