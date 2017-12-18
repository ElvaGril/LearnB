import React, { Component  } from 'react';
import Comment from './Comment'

class CommentList extends Component  {
	 static defaultProps = {
	    comments: []
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
	          <Comment comment={comment} key={i} />
	        )}
	      </div>
	    )
	  }
}
 
export default CommentList