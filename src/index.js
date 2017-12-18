import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import CommentApp from './components/CommentApp'
import './reset.scss'
import './css/index.scss'


ReactDOM.render(
  <CommentApp />,
  document.getElementById('root')
)

// class Header extends Component {
//   render () {
//     return (
//       <div>
//         <h1>This is my frist React project !</h1>
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <Header />,
//   document.getElementById('root')
// )


// function renderContent(content) {
//   ReactDOM.render(
//     <h1>{content}</h1>,
//     document.getElementById('root')
//   )
// }

// function renderContent(content) {
  
//   class Content extends Component{
//     renderGoodWord (isGood, isNotGood){
//       const isGoodWord  = true
//       return isGoodWord ? isGood : badWord
//     }
//       render() {
//           return (
//             <div>
//                <h1>{content} React 小书
//                   {this.renderGoodWord(
//                     <strong> is good</strong>,
//                     <span> is not good</span>
//                   )}
//                 </h1>
//             </div>
             
//           )
//       }
//     }

//   ReactDOM.render(
//       <Content />,
//       document.getElementById('root')
//   )
// }

// renderContent('This is my frist React project !')


// class Title extends Component {
//   handleClickOnTitle (e, word) {
//     console.log(this, word)
//   }

//   render () {
//     return (
//       <h1 onClick={this.handleClickOnTitle.bind(this, 'Hello')}>React 小书</h1>
//     )
//   }
// }

//   ReactDOM.render(
//       <Title />,
//       document.getElementById('root')
//   )


// if (module.hot) {
//     module.hot.accept('./components/modal', () => {
//         const modal = require('./components/modal').default
//         modal(+new Date())
//     })
// }

if (module.hot) {
  module.hot.accept();
}







// const wrapper = document.querySelector('.wrapper')
// class Component {

//   constructor (props) {
//     this.props = props
//   }

//   setState (state) {
//     const oldEl = this.el
//     this.state = state
//     this.el = this._renderDOM()
//     if (this.onStateChange) this.onStateChange(oldEl, this.el)
//   } 

//   _renderDOM () {
//     this.el = createDOMFromString(this.render())
//     if (this.onClick) {
//       this.el.addEventListener('click', this.onClick.bind(this), false)
//     }
//     return this.el
//   }
// }

// const createDOMFromString = (domString) => {
//     const div = document.createElement('div')
//     div.innerHTML = domString
//     return div
//   }

// const mount = (Component,wrapper) => {
//   wrapper.appendChild(Component._renderDOM())
//   Component.onStateChange = (oldEl, newEl) => {
//     wrapper.insertBefore(newEl, oldEl)
//     wrapper.removeChild(oldEl)
//   }
// }

// class LikeButton extends Component {
//   constructor (props) {
//     super(props)
//     this.state = { isLiked: false }
//   }

//   onClick () {
//     this.setState({
//       isLiked: !this.state.isLiked
//     })
//   }

//   render () {
//     return `
//       <button class='like-btn' style="background-color: ${this.props.bgColor}">
//         <span class='like-text'>${this.state.isLiked ? '取消' : '点赞'}</span>
//         <span>👍</span>
//       </button>
//     `
//   }
// }

// mount(new LikeButton({ bgColor: 'red' }), wrapper)

// class RedBlueButton extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       color: 'red '
//     }
//   }

//   onClick () {
//     this.setState({
//       color: 'yellow'
//     })
//   }

//   render () {
//     return `
//     <div style='color: ${this.state.color};'>${this.state.color}</div>
//     `
//   }
// }

// mount(new RedBlueButton(), wrapper)


// const wrapper = document.querySelector('.wrapper')

// const createDOMFromString = (domString) => {
//   const div = document.createElement('div')
//   div.innerHTML = domString
//   return div
// } 

// class LikeButton {
//   constructor () {
//     this.state = { isLiked: false }
//     this.render()
//   }

//   setState (state) {
//     this.state = state
//     this.render()
//   }

//   changeLikeText () {
//     this.setState({
//       isLiked: !this.state.isLiked
//     })
//   }

//   render () {
//     this.el = createDOMFromString(`
//       <button class='like-btn'>
//         <span class='like-text'>${this.state.isLiked ? '取消' : '点赞'}</span>
//         <span>👍</span>
//       </button>
//     `)
//     this.el.addEventListener('click', this.changeLikeText.bind(this), false)
//     wrapper.innerHTML = ''
//     wrapper.appendChild(this.el)
//   }
// }

//   const likeButton1 = new LikeButton()

/*==========================================================================*/



    /* Component */
    // class Component {
    //   constructor (props = {}) {
    //     this.props = props
    //   }
    //   setState (state) {
    //     const oldEl = this.el
    //     this.state = state
    //     this.el = this.renderDOM()
    //     if (this.onStateChange) this.onStateChange(oldEl, this.el)
    //   }
    //   renderDOM () {
    //     this.el = createDOMFromString(this.render())
    //     if (this.onClick) {
    //       this.el.addEventListener('click', this.onClick.bind(this), false)
    //     }
    //     return this.el
    //   }
    // }
    // const createDOMFromString = (domString) => {
    //   const div = document.createElement('div')
    //   div.innerHTML = domString
    //   return div
    // }
    // const mount = (component, wrapper) => {
    //   wrapper.appendChild(component.renderDOM())
    //   component.onStateChange = (oldEl, newEl) => {
    //     wrapper.insertBefore(newEl, oldEl)
    //     wrapper.removeChild(oldEl)
    //   }
    // }
    // /* ========================================= */
    // class LikeButton extends Component {
    //   constructor (props) {
    //     super(props)
    //     this.state = { isLiked: false }
    //   }
    //   onClick () {
    //     this.setState({
    //       isLiked: !this.state.isLiked
    //     })
    //   }
    //   render () {
    //     return `
    //       <button class='like-btn' style="background-color: ${this.props.bgColor}">
    //         <span class='like-text'>
    //           ${this.state.isLiked ? '取消' : '点赞'}
    //         </span>
    //         <span>👍</span>
    //       </button>
    //     `
    //   }
    // }
    // class RedBlueButton extends Component {
    //   constructor (props) {
    //     super(props)
    //     this.state = {
    //       color: 'red'
    //     }
    //   }
    //   onClick () {
    //     this.setState({
    //       color: 'blue'
    //     })
    //   }
    //   render () {
    //     return `
    //       <div style='color: ${this.state.color};'>${this.state.color}</div>
    //     `
    //   }
    // }
    // const wrapper = document.querySelector('.wrapper')
    // mount(new LikeButton({ bgColor: 'red' }), wrapper)
    // mount(new LikeButton(), wrapper)
    // mount(new RedBlueButton(), wrapper)
