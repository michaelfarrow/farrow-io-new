import React from 'react'
import Html from 'components/html'
import HtmlAst from 'components/html-ast'
import { find } from 'lodash'

export default class WorkPage extends React.Component {

  render () {
    const { data } = this.props
    const { markdownRemark } = data
    const { frontmatter, fields, htmlAst = {}, images = [] } = markdownRemark
    const { structure = [] } = frontmatter
    const { children = [] } = htmlAst

    const _children = children.filter(c => c.type === 'element')

    const _structure = structure.map(r => {
      return r.map(c => {
        const elements = []
        let done = false
        let found = false
        let i = 0
        while(!done && i < _children.length) {
          const child = _children[i]
          if (child.tagName === 'h1') {
            if (child.children && child.children.length && child.children[0].type === 'text') {
              if (child.children[0].value === c.key) {
                found = true
              } else if (found) {
                done = true
              }
            }
          } else if (found) {
            elements.push(child)
          }
          i++
        }
        return elements
      }).filter(c => c.length)
    }).filter(r => r.length)

    return (
      <div className='container container-full'>
        <h1>{frontmatter.title}</h1>
        {_structure.map((r, index) => (
           <div className='row' key={index}>
             {r.map((c, index) => (
                <HtmlAst
                  className='column'
                  key={index}
                  ast={c}
                  images={images} />
              ))}
           </div>
         ))}
      </div>
    )
  }

}

export const pageQuery = graphql`
  query WorkByPath($slug: String!) {
    markdownRemark(fields: { type: { eq: "work" }, slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        structure {
          type
          key
        }
      }
      images {
        relativePath
        childImageSharp {
          ...Image_sizeBlog
        }
      }
    }
  }
`
