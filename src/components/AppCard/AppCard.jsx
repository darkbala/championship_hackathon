import React from "react";
import conf from "./conf.svg";
import classes from './AppCard.module.scss'
export default function AppCard({ data }) {
  return (
    <div className={classes.AppCard}>
      <div>
        <span>{data.title}</span>
        <img src={conf} />
      </div>
      <div>{data.income}</div>
    </div>
  );
}
