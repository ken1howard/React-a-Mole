import { useEffect } from 'react'
import molehillImg from '../img/molehill.png'

function EmptySlot(props) {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}}
            src={molehillImg} alt='' />
        </div>
    )
}

export default EmptySlot