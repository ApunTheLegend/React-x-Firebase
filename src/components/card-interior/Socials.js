import './Socials.css'

const Socials = () => {
    return (
        <div className='social-icons'>
            <img src={require('../../icons/icons8-github-24.png')} alt='Github' />
            <img src={require('../../icons/icons8-linkedin-24.png')} alt='Linkedin' />
            <img src={require('../../icons/icons8-instagram-24.png')} alt='Instagram' />
            <img src={require('../../icons/icons8-website-24.png')} alt='Website' />
        </div>
    )
}

export default Socials