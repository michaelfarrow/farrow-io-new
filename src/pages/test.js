import React from 'react'
import { transitions, selectTransitionStyle } from 'utils/transition'
import YouTubeEmbed from 'components/embed/youtube'

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
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  content: {
    position: 'absolute',
    width: '100%',
    top: '100%'
  },
  headerContent: {
    position: 'relative',
    maxHeight: '100%',
    color: 'white'
  },
  video: {
    container: {
      position: 'absolute',
      // overflow: 'hidden',
      top: 0,
      left: 0,
      width: '100%',
      minHeight: '100%',
      boxSizing: 'border-box',
      paddingTop: '10em',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    wrapper: {
      position: 'absolute',
      overflow: 'hidden',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%'
    },
    embed: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      // background: '#28384c',
      background: 'linear-gradient(#1A374A, #373A4E)'
    }
  }
}

export default class TestPage extends React.Component {

  static transitionEnterDuration = 300
  static transitionExitDuration = 150

  state = {
    headerWidth: 100
  }

  onResize = () => {
    const { videoContainer } = this
    if (videoContainer) {
      const width = videoContainer.offsetWidth
      const height = videoContainer.offsetHeight
      if (width / height < 16 / 9) {
        this.setState({headerWidth: 16 / 9 * height / width * 100})
      } else {
        this.setState({headerWidth: 100})
      }
    }
  }

  componentDidMount () {
    window.addEventListener('resize', this.onResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onResize)
  }

  onVideoContainerRef = ref => {
    this.videoContainer = ref
    this.onResize()
  }

  render () {
    const { headerWidth } = this.state
    const embedStyle = Object.assign({}, styles.video.embed, {width: `${headerWidth}%`})
    return (
      <div style={selectTransitionStyle(this, transitions.fade)}>
        <div style={styles.wrapper}>
          <div ref={this.onVideoContainerRef} style={styles.video.container}>
            <div style={styles.video.wrapper}>
              <YouTubeEmbed
                style={embedStyle}
                id='YBrbVrBuZPo'
                playerVars={EMBED_PLAYER_VARS}
                loop={true}>
                <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} />
              </YouTubeEmbed>
            </div>
            <div style={styles.headerContent}>
              <div className='container container-full'>
                <div className='work-header-half'>
                  <h1>Project Title</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra nisl in eros varius pellentesque. Nam sed neque feugiat, varius mauris eget, convallis
                    lorem. Etiam vitae venenatis dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam efficitur ipsum
                    ac varius interdum. Duis vitae odio mattis, eleifend enim eget, ultrices arcu. Pellentesque iaculis bibendum mattis. Fusce justo dolor, posuere vel
                    aliquet nec, eleifend non felis. Duis malesuada in augue quis facilisis. Maecenas faucibus turpis lacinia lectus vehicula, nec lacinia ex tristique.
                    Suspendisse facilisis leo id orci facilisis convallis. Pellentesque rutrum, arcu sed interdum auctor, sapien mi gravida sem, ac venenatis augue magna
                    sit amet libero.
                  </p>
                </div>
              </div>
            </div>
            <div style={styles.content}>
              <div className='container'>
                <p>
                  Suspendisse imperdiet elit nunc, ut dapibus nunc fringilla at. Sed id arcu et tortor tempor congue a et ipsum. Suspendisse varius urna purus, vitae bibendum massa
                  interdum eget. Suspendisse tempor suscipit turpis, eget imperdiet lectus. Integer quis justo sed sapien mollis iaculis. Proin viverra purus tellus, vitae
                  placerat urna fermentum a. Cras nec auctor lacus. Nunc eros mauris, iaculis nec pharetra vitae, lobortis eu felis. Vivamus ut tincidunt urna. Morbi venenatis
                  eget libero quis placerat.
                </p>
                <p>
                  Proin id accumsan neque, eget pellentesque turpis. Curabitur pulvinar nisl eu neque feugiat tincidunt. Sed lacinia elit vel metus luctus finibus. In hac habitasse
                  platea dictumst. Integer vitae augue in urna fringilla venenatis sed eu elit. Nunc volutpat, quam vel convallis tempor, mi purus consectetur quam, quis
                  iaculis velit turpis nec augue. Phasellus et risus eget massa finibus lacinia. Nullam imperdiet pretium dictum. Vivamus posuere tristique arcu, eget
                  aliquam tellus faucibus et. Nullam placerat lorem urna, ut ultrices dui posuere ac. Duis semper iaculis augue eget egestas. Fusce posuere, dui vitae
                  pretium ultrices, dolor risus malesuada magna, at gravida ligula lacus id quam. Mauris pulvinar, lectus non ultrices faucibus, lorem enim blandit enim,
                  vel elementum nunc purus sed risus.
                </p>
                <blockquote>
                  <q>Nunc massa lectus, blandit vitae faucibus id, vulputate ut metus. Donec vel auctor eros. Aliquam lectus lectus, varius sit amet consectetur ac, venenatis pharetra turpis. Praesent velit diam, accumsan id ex eget, convallis dapibus tellus. Aenean tincidunt nibh felis, sed tincidunt dolor consectetur quis.</q>
                  <cite>Said Someone</cite>
                </blockquote>
                <p>
                  Duis rutrum odio ac lectus viverra, vitae ornare odio varius. Cras tempus ante eget massa placerat fringilla. Ut nec scelerisque enim, eu sagittis ante. Vestibulum
                  venenatis vel ante non fermentum. Vivamus sit amet lectus orci. Nunc ligula eros, vulputate sed orci vel, maximus lacinia ex. Morbi aliquam viverra porta.
                  Aliquam quis tincidunt justo. Sed at nisl pretium, vestibulum nibh ut, eleifend odio. Suspendisse condimentum eu lacus vestibulum mattis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}
