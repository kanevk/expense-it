import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAirtable } from "./AirtableContext";
import { Header } from "./Header";

const Home = () => {
  const [charts, setCharts] = useState<any[]>([]);
  const { airbase } = useAirtable();
  const chartsTable = airbase("charts");

  useEffect(() => {
    (async () => {
      const records = await chartsTable.select({ maxRecords: 10 }).all();
      const foo = [...records];
      console.log(foo);
      setCharts(foo);
    })();
  }, [setCharts, chartsTable]);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header />
      <div>
        {charts.map((chart) => (
          <div style={{ maxWidth: "50em" }}>
            <h3>{chart.fields.display_name}</h3>
            <img
              style={{ width: "100%", height: "auto" }}
              src={chart.fields.chart_url}
              alt=""
            />
            <hr style={{ borderTopWidth: "0.2em", color: "gray" }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export { Home };
