import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

render() {
   return (
    <div className='wrapper'>
   	<div className='footer'>
   		<footer>
   			<p>@Copyright GameSwap 2017</p>
   		</footer>
   	 </div>
     </div>
	)
  }
};

export default Footer;