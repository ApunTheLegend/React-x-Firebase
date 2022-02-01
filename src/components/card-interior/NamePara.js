import './NamePara.css'

const NamePara = (props) => {
    return (
        <div className='name-paragraph'>
            <p>{props.name}</p>
        </div>
    )
}

export default NamePara