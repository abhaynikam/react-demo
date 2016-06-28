var CommentForm = React.createClass({
  handleSubmit: function(event) {
    var author = this.refs.author.value.trim();
    var comment = this.refs.comment.value.trim();
    this.props.onCommentSubmit({author: author, comment: comment});
    this.refs.author.value = '';
    this.refs.comment.value = '';
    return false;
  },
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label for="name">Name:</label>
          <input type="text" placeholder="Your name" ref="author" id="name" className="form-control"/>
        </div>
        <div className="form-group">
          <label for="comment">Comment:</label>
          <input type="text" placeholder="Say something..." ref="comment" id="comment" className="form-control" />
        </div>
        <div className="form-group">
          <input type="submit" value="Post" className="btn btn-primary" />
        </div>
      </form>
    );
  }
});