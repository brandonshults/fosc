/**
 * A simple Shell that wraps a page.
 */
'use strict';
import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';
import StyleSheetLink from '../../components/style-sheet-link.jsx';
import * as url from '../../../fosc_modules/project-utils/url';

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
    this.state = {
      shellCssUrl: url.getRelativeCssUrl(__filename),
    };
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
        <StyleSheetLink href={this.state.shellCssUrl} />
        <StyleSheetLink href={this.props.pageCssUrl} />
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
