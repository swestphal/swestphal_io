componentDidMount: function() {
  var $this = $(ReactDOM.findDOMNode(this));
  // set el height and width etc.
},

const content = document.getElementById('content');
console.log(content);
const bodyHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight,
    containerHeight = document.getElementsByClassName('inner-content')[0]
        .outerHeight,
    headerHeight = document.getElementsByTagName('header');

if (bodyHeight > containerHeight) {
  headerHeight.style.height = bodyHeight;
} else {
  headerHeight.style.height = containerHeight;
}