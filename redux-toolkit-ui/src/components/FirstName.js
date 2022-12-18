import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'

const FirstName = () => {
    const name = useSelector((state) => state.user.firstName)

    useEffect(() => {
        console.log(name)
    }, [name]);
    return <div className='font-bold'>{name}</div>
}

export default FirstName
