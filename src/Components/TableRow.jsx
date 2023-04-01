import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  calculateCtr,
  calculateFillRate,
  formatDate,
  getAppName,
} from "../Utility/utility";
import { fetchApp } from "../Redux/actions/fethApps";
import AppIcon from "../assets/appIcon.png";

export const TableRow = ({ rowData }) => {
  const tableCols = useSelector((state) => state);
  const appState = useSelector((state) => state);

  const dispatch = useDispatch();

  const columnDataMap = {
    date: formatDate(rowData.date),
    app_id: (
      <>
        {" "}
        <img id="app_icon" src={AppIcon} alt="app-icon" />{" "}
        {getAppName(appState.apps.apps, rowData.app_id)}
      </>
    ),
    requests: rowData.requests,
    responses: rowData.responses,
    impressions: rowData.impressions,
    clicks: rowData.clicks,
    revenue: "$" + Math.round(rowData.revenue),
    fillrate:
      Math.floor(calculateFillRate(rowData.requests, rowData.responses)) + "%",
    ctr: Math.round(calculateCtr(rowData.clicks, rowData.impressions)) + "%",
  };

  useEffect(() => {
    dispatch(fetchApp());
  }, []);

  return (
    <tr className="row">
      {tableCols.tableCols.selectedColumns.map((col) => {
        if (col.isVisible) {
          return (
            <td key={col.id}>
              <img />
              {columnDataMap[col.id]}
            </td>
          );
        }
      })}
    </tr>
  );
};
