import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';
import CompossedLineBarArea from './CompossedLineBarArea';
import StrippedTable from '../Table/StrippedTable';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function BasicTable() {
  const title = brand.name + ' - Dashboard';
  const description = brand.desc;
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} xl={6}>
a
        </Grid>
        <Grid item xs={12} sm={12} xl={6}>
b
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} xl={4}>
          <PapperBlock  icon="ios-menu-outline" whiteBg overflowY overflowX>
            <div>
              <StrippedTable />
            </div>
          </PapperBlock>
        </Grid>
        <Grid item xs={12} sm={12} xl={8}>
          <PapperBlock icon="ios-stats-outline" whiteBg overflowY overflowX>
            <div>
              <CompossedLineBarArea />
            </div>
          </PapperBlock>
        </Grid>
      </Grid>
    </div>
  );
}

export default BasicTable;
