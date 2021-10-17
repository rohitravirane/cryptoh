import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic, Card } from 'antd';
import { RightCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import Loader from './Loader';

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />;

  const myStyle = {
    borderRadius: '20px',
    margin: '6px',
  };

  return (
    <>
      <Title level={3} className="heading">
        Global Crypto Stats
      </Title>

      <Row gutter={[2, 12]}>
        <div className="xl:flex justify-center items-center grid grid-cols-2">
          <Card style={myStyle} hoverable>
            <Col span={12}>
              <Statistic
                title="Total Cryptocurrencies"
                value={globalStats.total}
              />
            </Col>
          </Card>
          <Card style={myStyle} hoverable>
            <Col span={12}>
              <Statistic
                title="Total Exchanges"
                value={millify(globalStats.totalExchanges)}
              />
            </Col>
          </Card>
          <Card style={myStyle} hoverable>
            <Col span={12}>
              <Statistic
                title="Total Market Cap:"
                value={`$${millify(globalStats.totalMarketCap)}`}
              />
            </Col>
          </Card>
          <Card style={myStyle} hoverable>
            <Col span={12}>
              <Statistic
                title="Total 24h Volume"
                value={`$${millify(globalStats.total24hVolume)}`}
              />
            </Col>
          </Card>
          <Card style={myStyle} hoverable>
            <Col span={12}>
              <Statistic
                title="Total Cryptocurrencies"
                value={globalStats.total}
              />
            </Col>
          </Card>
          <Card style={myStyle} hoverable>
            <Col span={12}>
              <Statistic
                title="Total Markets"
                value={millify(globalStats.totalMarkets)}
              />
            </Col>
          </Card>
        </div>
      </Row>

      <div className="home-heading-container">
        <Title level={3} className="home-title">
          Top 10 Cryptos In The World
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies" title="More Cryptocurrencies">
            <RightCircleOutlined />
          </Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={3} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news" title="More News">
            <RightCircleOutlined />
          </Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
