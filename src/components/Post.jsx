import React, { Component } from 'react';
import Comment from './Comment';
import { FaHeartO, FaCommentO } from 'react-icons/lib/fa'





const PostWrapper = styled.div`
  background-color: #fff;
  border-radius: 3px;
  width: 95vw;
  max-width: 600px;
  margin: 20px auto;
  border: 1px solid #e6e6e6;
`;

const PostUser = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  img{
    height: 30px;
    width: 30px;
    border-radius: 100%;
  }
  span{
    padding-left: 5px;
    font-weight: bold;
  }
`;

const PostContent = styled.div`
  img{
    max-width: 600px;
    margin: 0 auto;
  }
`;




class Post extends Component {

  render() {
    const { post } = this.props;
    return (
      <PostWrapper>
        <PostUser>
          <img src={post.user.profile_pic} alt={post.user.username} />
          <span>{post.user.username}</span>
        </PostUser>
        <PostContent>
          <img src={post.image.url} />
        </PostContent>
        <PostInfo>
          <p>{post.caption}</p>
          <PostActions>
            <FaHeartO />
            <FaCommentO />
          </PostActions>
          <p><strong>{likes}</strong> like this</p>
          {post.comments.map((comment, i) => <Comment key={i} comment={comment} />)}
        </PostInfo>
      </PostWrapper>
    )
  }
}

export default Post;