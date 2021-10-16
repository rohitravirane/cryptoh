import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';

import { useGetExchangesQuery } from '../services/cryptoApi';
import Loader from './Loader';

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const exchangesList = data?.data?.exchanges;

  if (isFetching) return <Loader />;

  const myStyle = {
    textAlign: 'center',
  };

  return (
    <>
      <Row>
        <Col style={myStyle} span={5}>Exchanges</Col>
        <Col style={myStyle} span={6}>24h Trade Volume</Col>
        <Col style={myStyle} span={6}>Markets</Col>
        <Col style={myStyle} span={7}>Change</Col>
      </Row>
      <Row>
        {exchangesList.map((exchange) => (
          <Col span={24}>
            <Collapse>
              <Panel
                key={exchange.id}
                showArrow={false}
                header={(
                  <Row key={exchange.id}>
                    <Col span={5} title="Exchanges">
                      <Text><strong>{exchange.rank}.</strong></Text>
                      <Avatar className="exchange-image" src={exchange.iconUrl} />
                      <Text><strong>{exchange.name}</strong></Text>
                    </Col>
                    <Col style={myStyle} span={6} title="24h Trade Volume">${millify(exchange.volume)}</Col>
                    <Col style={myStyle} span={6} title="Markets">{millify(exchange.numberOfMarkets)}</Col>
                    <Col style={myStyle} span={7} title="Change">{millify(exchange.marketShare)}%</Col>
                  </Row>
                  )}
              >
                {HTMLReactParser(exchange.description || '')}
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;
