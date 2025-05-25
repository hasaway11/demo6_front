import React from 'react'
import { Button } from 'react-bootstrap'

function CommentList({loginId, comments, onDeleteComment}) {
  return (
		<>
		{
			comments.map(comment=>{
				return (
					<div key={comment.cno}>
						<div className='upper'style={{display:"flex", justifyContent: "space-between"}}>
							<div>
								<strong>{comment.writer}</strong>&nbsp;&nbsp;
								{
									(comment.writer===loginId) && <Button variant="outline-danger" size="sm" onClick={()=>onDeleteComment(comment.cno)} >삭제</Button>
								}			
							</div>
							<div>{comment.writeTime}</div>
						</div>
						<div className='lower'>{comment.content}</div>
						<hr />
					</div>	
				)			
			})
		}
		</>

  )
}

export default CommentList