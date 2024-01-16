import { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

interface LikeProps {
	onClick: () => void
}

const Like = ({ onClick }: LikeProps) => {
	const [status, setStatus] = useState(true)

	const toggleStatus = () => {
		setStatus(!status)
		onClick()
	}

	if (status)
		return <AiFillHeart size='200' color='#FF6b81' onClick={toggleStatus} />
	return <AiOutlineHeart size='200' onClick={toggleStatus} />
}

export default Like
