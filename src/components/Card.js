import './Card.css'
import PFPCircle from './card-interior/PFPCircle'
import NamePara from './card-interior/NamePara'
import Post from './card-interior/Post'
import Socials from './card-interior/Socials'

const Card = (props) => {
   const newArr = props.userData.map((key, value) => {
       return {
           name: key.userName,
           dept: key.userDept,
       }
   })

    return (
        <div className='card'>
            <div className='holder' id='pfp-holder'>
                <PFPCircle />
            </div>
            <div className='holder' id='info-holder'>
                <NamePara name={newArr[0].name} />
                <Post dept={newArr[0].dept} />
                <Socials />
            </div>
        </div>
    )
}

export default Card