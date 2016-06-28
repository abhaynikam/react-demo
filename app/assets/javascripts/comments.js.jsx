var HelloWorld = React.createClass({
  render: function() {
    return(
      <div className="hello">
        Hello, {this.props.name}
      </div>
    );
  }
});

var MyComponent = React.createClass({
  render: function() {
    if (this.props.first) {
      return(
        <div className="first">
          <span>A Span</span>
        </div>
      );
    } else {
      return(
        <div className="second">
          <p>A Paragraph</p>
        </div>
      );
    }
  }
});

var ready =function() {
  ReactDOM.render(
    <HelloWorld name={'Abhay'}/>,
    document.getElementById('comments')
  );
};

$(document).ready(ready);

