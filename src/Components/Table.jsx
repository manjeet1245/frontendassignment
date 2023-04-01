import { TableRow } from "./TableRow";
import { FunnelIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";

export const Table = () => {
  const reportsState = useSelector((state) => state);

  const { reports} = reportsState;


  
  const tableColState = useSelector((state) => state.tableCols);
  const { selectedColumns } = tableColState;

  return (
    <table className="table">
      <thead>
        <tr>
          {selectedColumns.map(
            (th) =>
              th.isVisible && (
                <th key={th.id}>
                  <FunnelIcon
                    color="#707070"
                    width={18}
                    height={18}
                    id="funnel-icon"
                  />
                  {th.title}
                </th>
              )
          )}
        </tr>
      </thead>
      <tbody>
        {reports?.reports?.data?.map((rowData, index) => (
          <TableRow key={index} rowData={rowData} />
        ))}
      </tbody>
    </table>
  );
};
