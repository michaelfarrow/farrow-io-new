webpackJsonp([0xc6c285f8fd10],{38:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var o={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(){return"undefined"==typeof g&&"undefined"!=typeof window&&window.IntersectionObserver&&(g=new window.IntersectionObserver(function(e){e.forEach(function(e){b.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(g.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),g}t.__esModule=!0,t.imageFragmentSizeBlog=t.imageFragment=void 0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},d=o(1),u=n(d),f=o(3),p=n(f),h={},y=function(e){var t=e.sizes?e.sizes.src:e.resolutions.src;return!!h[t]||(h[t]=!0,!1)},g=void 0,b=[],m=function(e,t){l().observe(e),b.push([e,t])},v=null,w=function(){if(null!==v)return v;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return v=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},E=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',o=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.title?'title="'+e.title+'" ':"",a=e.alt?'alt="'+e.alt+'" ':'alt="" ',r=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.opacity?e.opacity:"1",c=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+r+s+t+o+a+i+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+c+";opacity:"+l+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},S=function(e){function t(){var o,n,i;a(this,t);for(var s=arguments.length,l=Array(s),c=0;c<s;c++)l[c]=arguments[c];return o=n=r(this,e.call.apply(e,[this].concat(l))),n.state={},n.onRef=function(e){n.imgRef=e},n.onLoad=function(){var e=n.props.onLoad,t="undefined"!=typeof n.imgRef.currentSrc?n.imgRef.currentSrc:n.imgRef.src;n.setState({currentSrc:t}),e()},i=o,r(n,i)}return s(t,e),t.prototype.render=function(){var e=this.props,t=e.style,o=(e.onLoad,i(e,["style","onLoad"])),n=this.state.currentSrc,a={display:"block",position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%"},r=u.default.createElement("span",{style:c({backgroundImage:n&&"url("+n+")"||"none",backgroundPosition:"center",backgroundSize:"cover"},a,t)}),s=u.default.createElement("img",c({ref:this.onRef},o,{onLoad:this.onLoad,style:c({objectFit:"cover",objectPosition:"center",visbility:"hidden"},a,t)}));return u.default.createElement("span",null,s,r)},t}(u.default.Component);S.propTypes={style:p.default.object,onLoad:p.default.func};var O=function(e){function t(o){a(this,t);var n=r(this,e.call(this,o));n.onLoad=function(){n.state.IOSupported&&n.setState({imgLoaded:!0}),n.props.onLoad&&n.props.onLoad()};var i=!0,s=!0,l=!1,c=y(o);return!c&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,s=!1,l=!0),"undefined"==typeof window&&(i=!1,s=!1),n.state={isVisible:i,imgLoaded:s,IOSupported:l},n.handleRef=n.handleRef.bind(n),n}return s(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&m(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this.props,t=e.title,o=e.alt,n=e.className,i=e.outerWrapperClassName,a=e.style,r=void 0===a?{}:a,s=e.imgStyle,l=void 0===s?{}:s,d=e.sizes,f=e.resolutions,p=e.backgroundColor,h=e.Tag,y=void 0;y="boolean"==typeof p?"lightgray":p;var g=c({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},l),b=c({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},l);if(d||f){var m=d||f,v=c({display:"block",position:"relative",overflow:"hidden"},r),O={backgroundColor:y,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0},j=c({alt:o,title:t},m);return d||(v=c({position:"relative",overflow:"hidden",display:"inline-block",width:m.width,height:m.height},r),O={backgroundColor:y,width:m.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:m.height},j=c({alt:o,title:t,width:m.width,height:m.height},m),"inherit"===r.display&&delete v.display),m.srcWebp&&m.srcSetWebp&&w()&&(m.src=m.srcWebp,m.srcSet=m.srcSetWebp),u.default.createElement(h,{className:(i?i:"")+" gatsby-image-outer-wrapper",style:{display:"block",position:"absolute"===r.position?"initial":"relative"}},u.default.createElement(h,{className:(n?n:"")+" gatsby-image-wrapper",style:v,ref:this.handleRef},d&&u.default.createElement(h,{style:{display:"block",width:"100%",paddingBottom:100/m.aspectRatio+"%"}}),m.base64&&u.default.createElement(S,{alt:o,title:t,src:m.base64,style:g}),m.tracedSVG&&u.default.createElement(S,{alt:o,title:t,src:m.tracedSVG,style:g}),y&&u.default.createElement(h,{title:t,style:O}),this.state.isVisible&&u.default.createElement(S,{alt:o,title:t,srcSet:m.srcSet,src:m.src,sizes:d&&m.sizes||void 0,style:b,onLoad:this.onLoad,width:!d&&m.width||void 0,height:!d&&m.height||void 0}),u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:E(j)}})))}return null},t}(u.default.Component);O.defaultProps={fadeIn:!0,alt:"",Tag:"div"},O.propTypes={responsiveResolution:p.default.object,responsiveSizes:p.default.object,resolutions:p.default.object,sizes:p.default.object,fadeIn:p.default.bool,title:p.default.string,alt:p.default.string,className:p.default.oneOfType([p.default.string,p.default.object]),outerWrapperClassName:p.default.oneOfType([p.default.string,p.default.object]),style:p.default.object,imgStyle:p.default.object,position:p.default.string,backgroundColor:p.default.oneOfType([p.default.string,p.default.bool]),onLoad:p.default.func,Tag:p.default.string},t.default=O;t.imageFragment="** extracted graphql fragment **",t.imageFragmentSizeBlog="** extracted graphql fragment **"},298:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var s=o(1),l=n(s),c=o(32),d=n(c),u=o(38),f=n(u),p=o(55),h=function(e){function t(){return i(this,t),a(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){var e=this.props.data,t=e.headerImage,o=t.colours;return l.default.createElement("div",{style:(0,p.selectTransitionStyle)(this,p.transitions.fade)},l.default.createElement("div",null,l.default.createElement("header",{style:{height:"30em",overflow:"hidden",position:"relative"}},l.default.createElement(f.default,{title:"Header image",style:{backgroundColor:o.dominant,position:"absolute",width:"100%",height:"100%"},alt:"Greek food laid out on table",sizes:t.sizes}))),l.default.createElement("div",{className:"layout-content"},l.default.createElement("h1",null,"Hi from the second page"),l.default.createElement("p",null,"Welcome to page 2"),l.default.createElement(d.default,{to:"/"}," Go back to the homepage")))},t}(l.default.Component);h.transitionEnterDuration=300,h.transitionExitDuration=150,t.default=h;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-page-2-js-18d720c5172899672109.js.map