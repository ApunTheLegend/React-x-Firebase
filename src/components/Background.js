import './Background.css'
import Card from './Card'

const Background = (props) => {
    const usersArray = [...props.sentUserData]
    
    return (
        <div className='center-align'>
            {usersArray.map((key, value) => (
                <Card userData={key} value={value} key={Math.random()} />
            ))}
        </div>
    )
}

export default Background