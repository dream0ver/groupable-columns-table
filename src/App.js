import "./App.css"
import { useState } from "react"
import { list } from "./data"
import GroupableTable from "./GroupableTable"
function App() {
  const [groupby, setGroupby] = useState("")
  const COLUMNS = [
    {
      header: "Server Name",
      keyName: "serverName",
      groupable: false,
    },
    {
      header: "Location",
      keyName: "location",
      groupable: true,
    },
    {
      header: "Environment",
      keyName: "environment",
      groupable: true,
    },
  ]
  return (
    <section>
      <button onClick={() => setGroupby("")}>Clear Grouping</button>
      <GroupableTable
        COLUMNS={COLUMNS}
        DATA={list}
        groupby={groupby}
        setGroupby={setGroupby}
      />
    </section>
  )
}
export default App
