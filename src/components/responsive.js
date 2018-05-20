import React from 'react'
import PropTypes from 'prop-types'

export default class Responsive extends React.Component {

  static propTypes = {
    children: PropTypes.func.isRequired
  }

  state = {
    size: null
  }

  onResize = () => {
    const { container } = this
    const { size } = this.state
    if (container) {
      const width = container.offsetWidth
      const height = container.offsetHeight
      if (!size || size.width !== width || size.height !== height)
        this.setState({size: {width, height}})
    }
  }

  componentDidMount () {
    window.addEventListener('resize', this.onResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onResize)
  }

  componentDidUpdate () {
    this.onResize()
  }

  onContainerRef = ref => {
    this.container = ref
    this.onResize()
  }

  render () {
    const { size } = this.state
    return (
      <div ref={this.onContainerRef} {...this.props}>
        {size && this.props.children(size) || undefined}
      </div>
    )
  }

}
