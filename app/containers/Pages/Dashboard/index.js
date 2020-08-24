import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';
import CompossedLineBarArea from './CompossedLineBarArea';
import StrippedTable from '../Table/StrippedTable';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import main_banner from 'dan-images/main_banner.png';

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
            <img src={main_banner} width="100%" height="100%"/>
        </Grid>
        <Grid item xs={12} sm={12} xl={6}>
          <a target="_blank" href="https://www.booked.net/weather/iasi-33251">
            <img width="100%" height="100%" src="https://w.bookcdn.com/weather/picture/32_33251_1_1_f1c411_250_f39c13_ffffff_ffffff_1_2071c9_ffffff_0_6.png?scode=124&domid=w209&anc_id=50405"  alt="booked.net"/>
          </a> 
       </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} xl={3}>
          <PapperBlock  icon="ios-menu-outline" whiteBg overflowY overflowX>
            <div>
              <StrippedTable />
            </div>
          </PapperBlock>
        </Grid>
        <Grid item xs={12} sm={12} xl={9}>
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
