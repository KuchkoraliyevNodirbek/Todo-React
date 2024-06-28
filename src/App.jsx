import { Form } from "./components/form";
import { Card } from "./components/card";
import React from "react";

function App() {
  const [data, setData] = React.useState([]);

  return (
    <div>
      <Form setData={setData} />
      {data.map((item) => {
        return <Card setData={setData} key={item.id} {...item} />;
      })}
    </div>
  );
}

export default App;
