import React from "react";

export default ({ data }) => (
  <div>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
      We're the only site running on your computer dedicated to showing some random images that are about nothing in particular.
    </p>
  </div>
);

export const query = graphql`
query AboutQuery {
  site {
    siteMetadata {
      title
    }
  }
}
`