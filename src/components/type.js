import React from 'react'
import PropTypes from 'prop-types'

const TICK_MIN = 25
const TICK_MAX = 100
const FLASH = 500

const NBSP = String.fromCharCode(0x00A0)

export default class Type extends React.Component {

  static propTypes = {
    children: PropTypes.string
  }

  static defaultProps = {
    children: ''
  }

  state = {
    current: '',
    letter: 0,
    flash: false
  }

  realChildren (props) {
    return (props || this.props).children + NBSP
  }

  constructor (props) {
    super(props)
    this.state.current = this.realChildren(props)
  }

  tick = () => {
    const { current, letter } = this.state
    const children = this.realChildren()
    if (children === current) {
      if (letter < current.length) {
        this.setState({letter: letter + 1})
      }
    } else {
      if (letter === 0) {
        this.setState({current: children})
      } else {
        this.setState({letter: letter - 1})
      }
    }
    this.nextTick()
  }

  flash = () => {
    this.setState({
      flash: !this.state.flash
    })
  }

  nextTick () {
    this.letterTimeout = setTimeout(this.tick, Math.random() * (TICK_MAX - TICK_MIN) + TICK_MIN)
  }

  componentDidMount () {
    this.nextTick()
    this.flashInterval = setInterval(this.flash, FLASH)
  }

  componentWillUnmount () {
    if (this.letterTimeout) clearTimeout(this.letterTimeout)
    if (this.flashInterval) clearInterval(this.flashInterval)
  }

  render () {
    const { current, letter, flash } = this.state
    const done = letter === current.length
    return (
      <span>{current.substr(0, letter)}{!done || flash ? '_' : NBSP}</span>
    )
  }

}
