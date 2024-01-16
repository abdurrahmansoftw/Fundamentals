import { useState } from 'react'

interface ExpandableTextProps {
	children: string
	maxChars?: number
}

const ExpandableText = ({ children, maxChars = 100 }: ExpandableTextProps) => {
	const [isExpanded, setIsExpanded] = useState(false)

	if (children.length <= maxChars) return <p>{children}</p>
	const text = isExpanded ? children : children.substring(0, maxChars)

	return (
		<div>
			<h2>
				{text}...{' '}
				<button
					className='btn btn-secondary'
					onClick={() => setIsExpanded(!isExpanded)}
				>
					{isExpanded ? 'Less' : 'More'}
				</button>
			</h2>
		</div>
	)
}

export default ExpandableText
