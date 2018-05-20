import React from 'react'
import PropTypes from 'prop-types'

let apiInitiated = false
let apiLoaded = false

const PLAYER_DEFAULTS = {}

const PLAYER_VARS_DEFAULTS = {
  rel: 0,
  enablejsapi: 1
}

const CHECK_INTERVAL = 100
const PROGRESS_INTERVAL = 100

export default class YouTubeEmbed extends React.Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    options: PropTypes.object,
    playerVars: PropTypes.object,
    loop: PropTypes.bool,
    ratio: PropTypes.number
  }

  static defaultProps = {
    options: {},
    playerVars: {},
    loop: false,
    ratio: 16 / 9
  }

  state = {
    apiLoaded: false,
    initialised: false,
    playing: false
  }

  apiLoadCheck = () => {
    if (apiLoaded) {
      this.setState({apiLoaded: true})
      clearInterval(this.apiLoadInterval)
    }
  }

  componentWillMount () {
    const isBrowser = typeof document !== `undefined`
    if (!isBrowser) return
    if (!apiInitiated) {
      apiInitiated = true
      var tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/player_api'
      var firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
      window.onYouTubePlayerAPIReady = () => {
        apiLoaded = true
      }
    }
    if (!apiLoaded) {
      this.apiLoadInterval = setInterval(this.apiLoadCheck, CHECK_INTERVAL)
    } else {
      this.setState({apiLoaded: true})
    }
  }

  onProgress = () => {
    if (this.player && this.props.loop) {
      const duration = this.player.getDuration() * 1000
      const current = this.player.getCurrentTime() * 1000
      if (current >= duration - PROGRESS_INTERVAL) {
        this.player.seekTo(0)
        this.player.playVideo()
      }
    }
  }

  onPlayerReady = e => {
    const { playerVars = {} } = this.props
    if (playerVars.autoplay) this.player.playVideo()
  }

  onPlayerStateChange = e => {
    switch (e.data) {
      case YT.PlayerState.PLAYING:
        this.setState({playing: true})
        if (!this.progressInterval && this.props.loop) {
          this.progressInterval = setInterval(this.onProgress, PROGRESS_INTERVAL)
        }
        break
      case YT.PlayerState.PAUSED:
      case YT.PlayerState.ENDED:
        this.setState({playing: false})
        break
    }
  }

  loadVideo () {
    const { id, options, playerVars } = this.props
    const { initialised } = this.state
    const { videoContainer } = this
    if (!initialised && videoContainer) {
      const _options = Object.assign({}, PLAYER_DEFAULTS, options, {
        videoId: id,
        events: {
          onReady: this.onPlayerReady,
          onStateChange: this.onPlayerStateChange
        },
        playerVars: Object.assign({}, PLAYER_VARS_DEFAULTS, playerVars)
      })
      this.player = new YT.Player(videoContainer, _options)
      this.setState({initialised: true})
    }
  }

  onRef = ref => {
    this.videoContainer = ref
    this.loadVideo()
  }

  componentWillUnmount () {
    if (this.apiLoadInterval) {
      clearInterval(this.apiLoadInterval)
    }
    if (this.progressInterval) {
      clearInterval(this.progressInterval)
    }
    if (this.player) {
      this.player.destroy()
    }
  }

  render () {
    const { children, style, containerStyle, loop, ratio } = this.props
    const { apiLoaded, playing } = this.state
    let fadeStyle = {}
    if (loop) {
      fadeStyle = {
        transition: 'opacity 300ms 100ms',
        opacity: playing ? 1 : 0
      }
    }
    const _containerStyle = Object.assign({position: 'relative', paddingTop: `${1 / ratio * 100}%`}, fadeStyle, containerStyle || {})
    const _style = Object.assign({}, {backgroundColor: 'black'}, style || {})
    return (
      <div style={_style}>
        <div style={_containerStyle}>
          {apiLoaded && <div ref={this.onRef} style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} />}
          {children}
        </div>
      </div>
    )
  }

}

{
  /*
  var tv,
  		playerDefaults = {autoplay: 0, autohide: 1, modestbranding: 0, rel: 0, showinfo: 0, controls: 0, disablekb: 1, enablejsapi: 0, iv_load_policy: 3}
  var vid = [
  			{'videoId': '2b5QNj-BVhs', 'startSeconds': 515, 'endSeconds': 690, 'suggestedQuality': 'hd720'},
  			{'videoId': '9ge5PzHSS0Y', 'startSeconds': 465, 'endSeconds': 657, 'suggestedQuality': 'hd720'},
  			{'videoId': 'OWsCt7B-KWs', 'startSeconds': 0, 'endSeconds': 240, 'suggestedQuality': 'hd720'},
  			{'videoId': 'qMR-mPlyduE', 'startSeconds': 19, 'endSeconds': 241, 'suggestedQuality': 'hd720'}
  		],
  		randomVid = Math.floor(Math.random() * vid.length),
      currVid = randomVid

  $('.hi em:last-of-type').html(vid.length)

  function onYouTubePlayerAPIReady(){
    tv = new YT.Player('tv', {events: {'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange}, playerVars: playerDefaults})
  }

  function onPlayerReady(){
    tv.loadVideoById(vid[currVid])
    tv.mute()
  }

  function onPlayerStateChange(e) {
    if (e.data === 1){
      $('#tv').addClass('active')
      $('.hi em:nth-of-type(2)').html(currVid + 1)
    } else if (e.data === 2){
      $('#tv').removeClass('active')
      if(currVid === vid.length - 1){
        currVid = 0
      } else {
        currVid++
      }
      tv.loadVideoById(vid[currVid])
      tv.seekTo(vid[currVid].startSeconds)
    }
  }

  function vidRescale(){

    var w = $(window).width()+200,
      h = $(window).height()+200

    if (w/h > 16/9){
      tv.setSize(w, w/16*9)
      $('.tv .screen').css({'left': '0px'})
    } else {
      tv.setSize(h/9*16, h)
      $('.tv .screen').css({'left': -($('.tv .screen').outerWidth()-w)/2})
    }
  }

  $(window).on('load resize', function(){
    vidRescale()
  })

  $('.hi span:first-of-type').on('click', function(){
    $('#tv').toggleClass('mute')
    $('.hi em:first-of-type').toggleClass('hidden')
    if($('#tv').hasClass('mute')){
      tv.mute()
    } else {
      tv.unMute()
    }
  })

  $('.hi span:last-of-type').on('click', function(){
    $('.hi em:nth-of-type(2)').html('~')
    tv.pauseVideo()
  }); */
}
