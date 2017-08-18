import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';
import Link from './Link';

class ListOfLinks extends Component {
  render() {

    if (this.props.allLinksQuery && this.props.allLinksQuery.loading) {
      return <div>Loading...</div>;
    }

    if (this.props.allLinksQuery && this.props.allLinksQuery.error) {
      return <div>Error!</div>;
    }
    
    return (
    <div>
      {
        this.props.allLinksQuery.allLinks.map(l => <Link key={l.id} link={l} />)
      }
    </div>
    );
  }
}

const ALL_LINKS_QUERY = gql`
  query allLinksQuery {
    allLinks {
      id
      createdAt
      description
      url
    }
  }
`

export default graphql(ALL_LINKS_QUERY, { name: 'allLinksQuery' } )(ListOfLinks);