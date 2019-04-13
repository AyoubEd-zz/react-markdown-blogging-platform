import React from "react";
import PropTypes from "prop-types";
import SyntaxHighlighter from "react-syntax-highlighter";
import { solarizedDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default class CodeBlock extends React.PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string
  };

  static defaultProps = {
    language: null
  };

  render() {
    const { language, value } = this.props;
    
    return <SyntaxHighlighter language={language} style={solarizedDark}>{value}</SyntaxHighlighter>;
  }
}

// import React, { PureComponent } from "react";
// import PropTypes from "prop-types";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { coy } from "react-syntax-highlighter/dist/styles/prism";

// class CodeBlock extends PureComponent {
//   static propTypes = {
//     value: PropTypes.string.isRequired,
//     language: PropTypes.string
//   };

//   static defaultProps = {
//     language: null
//   };

//   render() {
//     const { language, value } = this.props;
//     return (
//       <SyntaxHighlighter language={language} style={coy}>
//         {value}
//       </SyntaxHighlighter>
//     );
//   }
// }

// export default CodeBlock;