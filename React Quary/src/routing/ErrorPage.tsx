import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
	const error = useRouteError()

	return (
		<>
			<h1>Oops...</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>{isRouteErrorResponse(error) ? 'Ivalid page' : 'Unexpected Error'}</p>
		</>
	)
}

export default ErrorPage
