import { List } from "antd";
import React from "react";
import Counter from "./Counter";
import Father from './Father'

const data = [
  { title: "Counter", component: <Counter></Counter> },
  { title: "Counter", component: <Counter></Counter> },
  { title: "father", component: <Father></Father> },
];
export default function ReduxPractice() {
  return (
    <div>
      {data.map((item, ind) => {
        return (
          <List
            key={ind}
            header={item.title}
            bordered
            dataSource={[item]}
            renderItem={(it) => {
              return <List.Item>{it.component}</List.Item>;
            }}
          ></List>
        );
      })}
    </div>
  );
}
