import  { useEffect, useState } from "react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import { Dimensions } from "./Dimensions";
import { useDispatch } from "react-redux";
import { getData } from "../Redux/actions/getData";
import { formatDateString } from "../Utility/utility";

export const Header = () => {
  const [setttingsIsOpen, setSettingsIsOpen] = useState(false);
  const [value, onChange] = useState([new Date(), new Date()]);

  const dispatch = useDispatch();

  useEffect(() => {
    if(value){
      dispatch(getData(formatDateString(value[0]), formatDateString(value[1])));
    }
  }, [value]);

  return (
    <>
      <div className="header">
        <h3 className="title">Analytics</h3>
        <div className="cta__container">
    
          <DateRangePicker
          dayPlaceholder="08"
          monthPlaceholder="Jul"
          yearPlaceholder="2021"
            className="date-range-picker"
            onChange={onChange}
            value={value}
            clearIcon
          />
          <button onClick={() => setSettingsIsOpen(true)}>
            <AdjustmentsHorizontalIcon
              color={"#136FED"}
              width={20}
              height={20}
            />
            Settings
          </button>
        </div>
        {setttingsIsOpen && (
          <Dimensions setSettingsIsOpen={setSettingsIsOpen} />
        )}
      </div>
    </>
  );
};
