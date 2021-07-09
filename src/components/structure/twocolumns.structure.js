import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';

const twoColumnStructure = props => {
  const buckets = {
    '1': Array.isArray(props.bucket1) ? props.bucket1 : [],
    '2': Array.isArray(props.bucket2) ? props.bucket2 : []
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} key="bucket1">
        {buckets['1'].map((component, index) => (
          <Fragment>
            <div key={index}>{component}</div>
          </Fragment>
        ))}
      </Grid>
      <Grid item xs={12} md={6} key="bucket2">
        {buckets['2'].map((component, index) => (
          <Fragment>
            <div key={index}>{component}</div>
          </Fragment>
        ))}
      </Grid>
    </Grid>
  );
};

export default twoColumnStructure;
