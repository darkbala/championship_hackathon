import { Table } from "antd";
import React from "react";
import { data } from "./data";
import AppCard from "../../components/AppCard/AppCard";
import classes from './TransactionPage.module.scss'
export default function TransactionPage() {
  const columns = [
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "App",
      dataIndex: "app",
      key: "app",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Full sum",
      dataIndex: "full_sum",
      key: "full_sum",
    },
    {
      title: "Created at",
      dataIndex: "created_at",
      key: "created_at",

    
    },
  ];
  const apps = [
    {
        title: 'Магазин Парфюмерии',
        income: 10000
    },
    {
        title: 'Магазин Электроники',
        income: 15000
    },
    {
        title: 'Магазин Одежды',
        income: 20000
    },
    {
        title: 'Магазин Бытовой Техники',
        income: 18000
    },
    {
        title: 'Магазин Спорттоваров',
        income: 12000
    },
    {
        title: 'Магазин Игрушек',
        income: 9000
    }
];

  return (
    <div className={classes.TransactionPage}>
      <div className={classes.apps}>
      {apps.map((app, index)=>{
        return<AppCard key={index} data={app}/>
      })}
      </div>
      <Table
        dataSource={data.map((item) => ({ ...item, key: item.created_at }))}
        columns={columns}
      />
      ;
    </div>
  );
}
