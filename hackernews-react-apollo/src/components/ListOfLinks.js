import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';
import Link from './Link';

class ListOfLinks extends Component {

  // When we send a mutation to the server, 
  // local data is not updated.
  // So we will call updateStore to update the data 
  // manually from the response of the upvote mutation.
  _updateStoreAfterVote = (store, createVote, linkId) => {
    // From store, read result for the query 'ALL_LINKS_QUERY'
    const data = store.readQuery({ query: ALL_LINKS_QUERY});

    // find the Link in the store, update its votes count with 
    // value received from the call to upvote
    const votedLink = data.allLinks.find(link => link.id === linkId);
    votedLink.votes = createVote.link.votes;

    // store the updated data.
    store.writeQuery({ query: ALL_LINKS_QUERY, data });

    // Store update will re-render the component so it will update the UI
  }

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
        this.props.allLinksQuery.allLinks.map((l, index) =>
          <Link key={l.id} updateStoreAfterVote={this._updateStoreAfterVote} link={l} index={index} />)
      }
    </div>
    );
  }
}

export const ALL_LINKS_QUERY = gql`
  query allLinksQuery {
    allLinks {
      id
      createdAt
      description
      url
      postedBy {
        id
        name
      }
      votes {
        id
        user {
          id
        }
      }
    }
  }
`

export default graphql(ALL_LINKS_QUERY, { name: 'allLinksQuery' } )(ListOfLinks);