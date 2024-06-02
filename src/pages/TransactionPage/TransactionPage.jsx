import React, { useEffect, useState } from "react";
import { Table, Select, Spin } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import AppCard from "../../components/AppCard/AppCard";
import classes from "./TransactionPage.module.scss";

const { Option } = Select;

export default function TransactionPage() {
  const [data, setData] = useState([]);
  const [totalSum, setTotalSum] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [sort, setSort] = useState("week"); // Default sort by week
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState(null);

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

  const apps = [
    {
      title: "Магазин Парфюмерии",
      income: 10000,
    },
    {
      title: "Магазин Электроники",
      income: 15000,
    },
    {
      title: "Магазин Одежды",
      income: 20000,
    },
    {
      title: "Магазин Бытовой Техники",
      income: 18000,
    },
    {
      title: "Магазин Спорттоваров",
      income: 12000,
    },
    {
      title: "Магазин Игрушек",
      income: 9000,
    },
  ];

  useEffect(() => {
    fetchTransactions();
    fetchChartData();
  }, [sort]);

  const fetchTransactions = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(
        `http://localhost:8087/transactions/getCompanies?sort=${sort}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      setData(result.transactions);
      setTotalSum(result.totalSum);
      setTotalCount(result.totalCount);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
    setLoading(false);
  };

  const fetchChartData = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(
        `http://localhost:8087/transactions/earningsChart?sort=${sort}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("image/png")) {
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          setChartData(url);
        } else {
          const result = await response.json();
          setChartData(result.chartData);
        }
      } else {
        console.error("Error fetching chart data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching chart data:", error);
    }
    setLoading(false);
  };

  return (
    <div className={classes.TransactionPage}>
      <div className={classes.header}>
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
        <div>
          <p>Total Transactions: {totalCount}</p>
          <p>Total Sum: {totalSum}</p>
        </div>
      </div>
      {loading ? (
        <Spin size="large" />
      ) : (
        <>
          {chartData && <img src={chartData} alt="Earnings Chart" />}
          <Table
            dataSource={data.map((item, index) => ({
              ...item,
              key: item.id,
              index,
            }))}
            columns={columns}
            loading={loading}
            pagination={{ pageSize: 10 }}
          />
        </>
      )}
    </div>
  );
}
