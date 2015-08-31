/**
 * A simple Shell that wraps a page.
 */
'use strict';
import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';
import StyleSheetLink from '../../components/style-sheet-link.jsx';
import * as url from '../../../fosc_modules/project-utils/url';
import safeStringify from 'json-stringify-safe';

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
      shellJsUrl: url.getRelativeJsUrl((__filename)),
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
        <link rel="stylesheet" type="text/css" href={this.state.shellCssUrl} />
        <link rel="stylesheet" type="text/css" href={this.props.pageCssUrl} />
        <script type="text/json" id="initial-react-props" dangerouslySetInnerHTML={{__html: JSON.stringify(this.props)}} />
      </head>
      <body>
      <Header />
      <main></main>
      <Footer />
      <script type="text/javascript" src="/public/shared.js" />
      <script type="text/javascript" src={this.state.shellJsUrl} />
      <script type="text/javascript" src={this.props.pageJsUrl} />
      </body>
      </html>
    );
  }
}
