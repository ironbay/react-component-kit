import * as React from 'react'
import * as ReactDOM from 'react-dom'

class TestComponent extends React.Component<any, any> {
	constructor() {
		super()
	}
	render() {
		return (
			<div>
				Hellu
			</div>
		)
	}

}

ReactDOM.render(<TestComponent />, document.getElementById('react-root'))
