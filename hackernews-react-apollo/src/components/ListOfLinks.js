import React, { Component } from 'react';

import Link from './Link';

class ListOfLinks extends Component {
  render() {

    const linksToRender = [
      {
        id: 1,
        description: 'Awesome deals!',
        url: 'https://www.groupon.com/',
      },
      {
        id: 2,
        description: 'Socialize a bit',
        url: 'https://www.livingsocial.com',
      }
    ];


    return (
    <div>
      {
        linksToRender.map(l => <Link key={l.id} link={l} />)
      }
    </div>
    );
  }
}

export default ListOfLinks;