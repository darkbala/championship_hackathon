import React, { useEffect, useState } from "react";
import { Table, Select, Spin, Button } from "antd";
import classes from "./AdminPage.module.scss";

const { Option } = Select;

const AdminPage = () => {
  const [transactionData, setTransactionData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [totalSum, setTotalSum] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [sort, setSort] = useState("all");
  const [loading, setLoading] = useState(false);
  const [showTransactions, setShowTransactions] = useState(true);

  const columns = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Buyer Name",
      dataIndex: "buyerName",
      key: "buyerName",
    },
    {
      title: "Buyer Bank Account",
      dataIndex: "buyerBankAccount",
      key: "buyerBankAccount",
    },
    {
      title: "Transaction Time",
      dataIndex: "transactionTime",
      key: "transactionTime",
      render: (time) =>
        `${time[0]}-${time[1]}-${time[2]} ${time[3]}:${time[4]}:${time[5]}`,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
  ];

  const userDataColumns = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Bank Account",
      dataIndex: "bankAccount",
      key: "bankAccount",
    },
    {
      title: "App Id",
      dataIndex: "appId",
      key: "appId",
    },
  ];

  useEffect(() => {
    if (showTransactions) {
      fetchTransactions();
    } else {
      fetchUsers();
    }
  }, [sort, showTransactions]);

  const fetchTransactions = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:8087/admin/getAllTransactions?sort=${sort}`,
        {
          method: "GET",
        }
      );
      const result = await response.json();
      setTransactionData(result.transactions);
      setTotalSum(result.totalSum);
      setTotalCount(result.totalCount);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
    setLoading(false);
  };

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8087/admin/getAllUsers");
      const result = await response.json();
      setUserData(result);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
    setLoading(false);
  };

  const showTransactionsHandler = () => {
    setShowTransactions(true);
  };

  return (
    <div className={classes.TransactionPage}>
      {loading ? (
        <Spin size="large" />
      ) : (
        <div className="admin-table-body">
          <Select
            value={sort}
            onChange={(value) => setSort(value)}
            style={{ width: 120 }}
          >
            <Option value="day">Day</Option>
            <Option value="week">Week</Option>
            <Option value="month">Month</Option>
            <Option value="all">All</Option>
          </Select>
          <Button
            onClick={() => setShowTransactions(false)}
            style={{ marginLeft: 16 }}
          >
            USERS
          </Button>
          <Button onClick={showTransactionsHandler} style={{ marginLeft: 16 }}>
            Show Transactions
          </Button>
          <div>
            <p>Total Transactions: {totalCount}</p>
            <p>Total Sum: {totalSum}</p>
          </div>

          {showTransactions ? (
            <Table
              dataSource={transactionData.map((item, index) => ({
                ...item,
                key: item.id,
                index,
              }))}
              columns={columns}
              loading={loading}
              pagination={{ pageSize: 10 }}
            />
          ) : (
            <Table
              dataSource={userData.map((item, index) => ({
                ...item,
                key: index,
                index: index + 1,
              }))}
              columns={userDataColumns}
              loading={loading}
              pagination={{ pageSize: 10 }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default AdminPage;
