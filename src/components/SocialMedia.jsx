import React from 'react'
import {BsFacebook, BsGithub, BsTwitter} from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <BsTwitter/>
      </div>
      <div>
        <BsGithub/>
      </div>
      <div>
        <BsFacebook/>
      </div>
    </div>
  )
}

export default SocialMedia