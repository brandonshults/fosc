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
      </head>
      <body>
      <Header />
      <main>
        {this.props.children}
      </main>
      <Footer />
      </body>
      </html>
    );
  }
}
