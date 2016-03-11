var React = require('react');
// Note that Highcharts has to be required separately
var ReactHighcharts = require('react-highcharts');
var HighchartsMore = require('highcharts-more');
// We tell HighchartsMore to use the same Highcharts object as ReactHighcharts
HighchartsMore(ReactHighcharts.Highcharts);
var Highlight = require('react-highlight');
var ReactDOM = require('react-dom');

var config = {
  chart: {
    polar: true
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  series: [{
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
  }]
};

ReactDOM.render(
  <ReactHighcharts config={config}></ReactHighcharts>,
  document.getElementById('test')
);
ReactDOM.render(
  <Highlight className="jsx">{require("raw-loader!./more.jsx")}</Highlight>,
  document.getElementById('code-js')
);
ReactDOM.render(
  <Highlight className="html">{require("raw-loader!./more.html")}</Highlight>,
  document.getElementById('code-html')
);
