import React, { useEffect } from "react"
const GroupableTable = ({ COLUMNS, groupby, setGroupby, DATA }) => {
  useEffect(() => {
    document
      .querySelectorAll("tr")
      .forEach(element => element.classList.remove("d-none"))
  }, [groupby])
  const getBody = (column_template, list, groupBy) => {
    const unique_set = [...new Set(list.map(item => item[groupBy]))]
    return unique_set.map(item => {
      return (
        <>
          {item && (
            <tr
              onClick={e =>
                document
                  .querySelectorAll(`[name="${item}-child"]`)
                  .forEach(element => element.classList.toggle("d-none"))
              }>
              <td
                colSpan="100%"
                style={{ fontWeight: "bold", cursor: "pointer" }}>
                {`> ${item}`}
              </td>
            </tr>
          )}
          {list.map(listitem => {
            if (listitem[groupBy] == item) {
              const keys = column_template
                .map(item => item.keyName)
                .filter(keysitem => keysitem != groupBy)
              return (
                <tr name={`${item}-child`}>
                  {keys.map(key => (
                    <td>{listitem[key]}</td>
                  ))}
                </tr>
              )
            } else return
          })}
        </>
      )
    })
  }
  const getHeader = (column_template, groupBy, setGroupby) => {
    return (
      <tr>
        {column_template?.map(item => {
          if (item.keyName != groupBy) {
            return (
              <th
                className={`${item.groupable ? "cursor-p" : null}`}
                onClick={e =>
                  item.groupable ? setGroupby(item.keyName) : null
                }>
                {item.header}
              </th>
            )
          }
        })}
      </tr>
    )
  }
  return (
    <table>
      <thead>{getHeader(COLUMNS, groupby, setGroupby)}</thead>
      <tbody>{getBody(COLUMNS, DATA, groupby)}</tbody>
    </table>
  )
}
export default GroupableTable
