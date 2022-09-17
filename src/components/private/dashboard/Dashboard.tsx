import React from "react";
import { Row, Col, Card, Table } from "antd";

const Dashboard = () => {
    const dataSource = [
        {
          key: '1',
          directIncome: 'Mike Johh',
          firstIndirect: 'Mike',
          secondIndirect: 'Mike',
        },
        {
          key: '2',
          directIncome: 'John',
          firstIndirect: 'Mike',
          secondIndirect: 'Mike',
        },
      ];

      const columns = [
        {
          title: 'Direct Income',
          dataIndex: 'directIncome',
          key: 'directIncome',
        },
        {
          title: '1st Indirect Income',
          dataIndex: 'firstIndirect',
          key: 'firstIndirect',
        },
        {
          title: '2nd Indirect Income',
          dataIndex: 'secondIndirect',
          key: 'secondIndirect',
        },
      ];


  return (
    <>
      <Card style={{boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
        <Row justify="space-between">
          <Col>
            <h1 className="dashboard-h1">Total Income: 100000</h1>
          </Col>
          <Col>
            <h1 className="dashboard-h1">Direct Income: 133300</h1>
          </Col>
        </Row>
        <Row justify="space-between">
          <Col>
            <h1 className="dashboard-h1">Withdrawable Balance: 100000</h1>
          </Col>
          <Col>
            <h1 className="dashboard-h1">1st Indirect Income: 133300</h1>
          </Col>
        </Row>
        <Row justify="end">
          <Col>
            <h1 className="dashboard-h1">2nd Indirect Income: 133300</h1>
          </Col>
        </Row>
        <br/>
        <Table dataSource={dataSource} columns={columns} />;
      </Card>
    </>
  );
};

export default Dashboard;
