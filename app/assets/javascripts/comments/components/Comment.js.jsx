var Comment = React.createClass({
  render: function () {
    return (
      <div className="panel panel-default">
        <div class="panel-heading">{this.props.author}</div>
        <div className="panel-body">
          {this.props.comment}
        </div>
      </div>
    );
  }
});
