import React from 'react'
import PropTypes from 'prop-types'
import Img from 'components/image'
import Link from 'gatsby-link'

export default class HtmlAst extends React.Component {

  static propTypes = {
    ast: PropTypes.array,
    images: PropTypes.array
  }

  static defaultProps = {
    ast: [],
    images: []
  }

  process = (child, index) => {
    switch (child.type) {
      case 'text':
        const { value = '' } = child
        const _value = value.trim()
        if (!_value.length) return undefined
        return _value
        break
      case 'element':
        let Element = child.tagName
        let { children = [], properties = {} } = child
        switch (child.tagName) {
          case 'img':
            const { images } = this.props
            const image = images.find(i => i.relativePath === properties.src)
            if (image && image.childImageSharp) {
              const { sizes, dimensions, colours = {} } = image.childImageSharp
              return (
                <Img
                  Tag='span'
                  style={{backgroundColor: colours.dominant || 'white'}}
                  key={index}
                  sizes={sizes}
                  dimensions={dimensions}
                  alt={properties.alt} />
              )
            }
            break
          case 'a':
            const { location } = window
            const localRegex = new RegExp('^(\/|' + location.protocol + '\/\/' + location.host + '\/?)', 'i')
            const { href = '' } = properties
            if (localRegex.test(href)) {
              return (
                <Link key={index} to={href.replace(localRegex, '/')}>
                {children.map(this.process)}
                </Link>
              )
            } else {
              properties.target = '_blank'
            }
            break
        }

        return children.length
          ? (
          <Element key={index} {...properties}>
            {children.map(this.process)}
          </Element>
          )
          : <Element key={index} {...properties}/>
        break
    }
    return undefined
  }

  render () {
    const { ast, images, ...props } = this.props
    return (
      <div {...props}>
        {ast.map(this.process)}
      </div>
    )
  }

}
