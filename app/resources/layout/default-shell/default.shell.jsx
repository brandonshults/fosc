/**
 * A simple Shell that wraps a page.
 */
'use strict';
import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';

export default class DefaultShell extends React.Component {
  static get propTypes() {
    return {
      children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node,
      ]),
      metaTags: React.PropTypes.array,
      title: React.PropTypes.string,
      pageCssUrl: React.PropTypes.string,
    };
  }

  constructor(props) {
    super(props);
  }

  render() {
    let metaTags = this.props.metaTags || [];
    return (
      <html>
      <head>
        <meta
          content='text/html; charset=UTF-8'
          httpEquiv='Content-Type'
          />
        {metaTags.map(function (metaTag, index) {
          return (
            <meta
              key={index}
              {...metaTag}
              />
          )
        })}
        <title>{this.props.title}</title>
        <link rel="stylesheet" type="text/css" href="/public/resources/layout/default-shell/default.css" />
        {this.props.pageCssUrl !== undefined ? <link rel="stylesheet" type="text/css" href={this.props.pageCssUrl} /> : null}
        <script type="text/json" id="initial-react-props" dangerouslySetInnerHTML={{__html: JSON.stringify(this.props)}} />
      </head>
      <body>
      <Header />
      <main></main>
      <Footer />
      <script type="text/javascript" src="/public/shared.js" />
      <script type="text/javascript" src="/public/resources/layout/default-shell/default.js" />
      <script type="text/javascript" src={this.props.pageJsUrl} />
      </body>
      </html>
    );
  }
}
