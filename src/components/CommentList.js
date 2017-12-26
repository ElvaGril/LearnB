import React, { Component  } from 'react';
import Comment from './Comment'
import PropTypes from 'prop-types'

class CommentList extends Component  {
	static propTypes = {
    comments: PropTypes.array,
    onDeleteComment: PropTypes.func
	}
	
	static defaultProps = {
		comments: []
	}
	
	handDeleteComment (index) {
		if(this.props.onDeleteComment) {
			this.props.onDeleteComment(index)
		}
	}
	 
//  render() {
////      const comments = [
////          {userName: 'Jerry', content: 'Hello'},
////          {userName: 'Tomy', content: 'World'},
////          {userName: 'Lucy', content: 'Good'}
////      ]
//
//      return (
//          <div>{comments.map((comment,i) => {
//              return (
//                  <div key= {i}>
//                      {this.props.comments.map((comment, i) => <Comment comment={comment} key={i} />)}
//                  </div>
//              )
//          })} 
//          </div>
//      )
//  }
     render() {
	    return (
	      <div>
	        {this.props.comments.map((comment, i) =>
						<Comment 
							comment={comment} 
							key={i}
							index={i}
							onDeleteComment={this.handDeleteComment.bind(this)} />
	        )}
	      </div>
	    )
	  }
}
 
export default CommentList