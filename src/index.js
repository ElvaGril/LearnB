import modal from './components/modal'
import './reset.scss'
import './css/index.scss'

class LikeButton {
    render () {
      return `
        <button id='like-btn'>
          <span class='like-text'>赞</span>
          <span>👍</span>
        </button>
      `
    }
  }
  const wrapper = document.querySelector('.wrapper')
  const likeButton1 = new LikeButton()
  wrapper.innerHTML = likeButton1.render()
  
  const likeButton2 = new LikeButton()
  wrapper.innerHTML += likeButton2.render()


if (module.hot) {
    module.hot.accept('./components/modal', () => {
        const modal = require('./components/modal').default
        modal(+new Date())
    })
}
