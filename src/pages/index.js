import React from 'react'
import Type from 'components/type'
import YouTubeEmbed from 'components/embed/youtube'
import Responsive from 'components/responsive'
import Logo from 'components/logo'
import { shuffle } from 'lodash'

const TITLE = ' creative technologist'

const TITLES = [
  ' graphic designer',
  ' web developer',
  'n app developer',
  ' Python wrangler',
  ' Pi baker',
  ' sys admin',
  ' cat lover',
  ' perfectionist',
  ' film snob',
  ' electronics tinkerer',
  ' DIY enthusiast',
  ' maker',
  ' antique sewing machine restorer',
  ' amateur scientist',
  ' wannabe engineer',
  ' Reactionist'
]

const EMBED_PLAYER_VARS = {
  mute: 1,
  autoplay: 1,
  loop: 1,
  controls: 0,
  showinfo: 0,
  autohide: 0,
  modestbranding: 1,
  playsinline: 1,
  vq: 'hd720'
}

const styles = {
  video: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: 'hidden'
  },
  logo: {

  },
  embed: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'black'
  }
}

const VIDEOS = {
  landscape: 'YBrbVrBuZPo',
  portrait: 'yabDCV4ccQs'
}

const CHANGE_INTERVAL = 5000

export default class IndexPage extends React.Component {

  state = {
    current: 0
  }

  constructor (props) {
    super(props)
    this.titles = _.shuffle(TITLES)
    this.titles.unshift(TITLE)
  }

  change = () => {
    const { current } = this.state
    let next = current + 1
    if (next > this.titles.length - 1) next = 0
    this.setState({current: next})
  }

  componentDidMount () {
    this.changeInterval = setInterval(this.change, CHANGE_INTERVAL)
  }

  componentWillUnmount () {
    if (this.changeInterval) clearInterval(this.changeInterval)
  }

  render () {
    const { current } = this.state
    return (
      <div id='page-home'>
        <div className='container-main'>
          <div className='container-left' />
          <div className='container-right' />
          <div className='container-top'>
            <div className='home-logo'>
              <Logo id='logo' style={styles.logo} />
            </div>
          </div>
          <div className='container-bottom'>
            <div className='home-intro'>
              <div className='home-intro-inner'>
                <p>
                  <span>Hi, my name's Mike, and I'm a</span>
                  <Type>
                    {this.titles[current]}
                  </Type>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

{
  /* <div className='container-colour container-colour-secondary-1' style={styles.backgroundColor} />

  <div style={styles.intro}>
    <Responsive style={styles.video}>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      {size => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         const { width, height } = size
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         let video = VIDEOS.landscape
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         let videoRatio = 16 / 9
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         if (width / height < 16 / 9) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           videoRatio = 9 / 16
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           video = VIDEOS.portrait
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         return (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           <YouTubeEmbed
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             key={video}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             style={styles.embed}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             id={video}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             ratio={videoRatio}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             playerVars={EMBED_PLAYER_VARS}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             loop={true}>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           </YouTubeEmbed>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         )
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       }}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </Responsive>
  </div>
  <div className='container-colour container-colour-key' style={styles.content}>
    <div className='container'>
      <p>
        Suspendisse imperdiet elit nunc, ut dapibus nunc fringilla at. Sed id arcu et tortor tempor congue a et ipsum. Suspendisse varius urna purus, vitae bibendum massa
        interdum eget. Suspendisse tempor suscipit turpis, eget imperdiet lectus. Integer quis justo sed sapien mollis iaculis. Proin viverra purus tellus, vitae
        placerat urna fermentum a. Cras nec auctor lacus. Nunc eros mauris, iaculis nec pharetra vitae, lobortis eu felis. Vivamus ut tincidunt urna. Morbi venenatis
        eget libero quis placerat.
      </p>
      <p>
        Proin id accumsan neque, eget pellentesque turpis. Curabitur pulvinar nisl eu neque feugiat tincidunt. Sed lacinia elit vel metus luctus finibus. In hac habitasse
        platea dictumst. Integer vitae augue in urna fringilla venenatis sed eu elit. Nunc volutpat, quam vel convallis tempor, mi purus consectetur quam, quis iaculis
        velit turpis nec augue. Phasellus et risus eget massa finibus lacinia. Nullam imperdiet pretium dictum. Vivamus posuere tristique arcu, eget aliquam tellus
        faucibus et. Nullam placerat lorem urna, ut ultrices dui posuere ac. Duis semper iaculis augue eget egestas. Fusce posuere, dui vitae pretium ultrices, dolor
        risus malesuada magna, at gravida ligula lacus id quam. Mauris pulvinar, lectus non ultrices faucibus, lorem enim blandit enim, vel elementum nunc purus
        sed risus.
      </p>
    </div>
  </div> */
}
