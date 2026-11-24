import React, {useState,useEffect} from "react";
//import { holdings } from "../data/data";
import axios from "axios"
import { BACKEND_URL } from "../config";

const Holdings = () => {
  const[allHoldings, setAllHoldings] = useState([])

  useEffect(() => {
  axios.get(`${BACKEND_URL}/allHoldings`).then((res)=>
  {
    console.log(res.data)
    setAllHoldings(res.data)
  })
  }, [])
  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <tr >
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>Curr. vad</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
             
          
          </tr>
          {allHoldings.map((stock,index)=>{
            const curValue= stock.price * stock.qty;
            const isProfit= curValue-stock.avg * stock.qty <= 0.0;
            const profClass= isProfit ? "profit":"loss";
            const dayClass= stock.isLoss ? "loss":"profit";

            return(
               <tr key={index} >
            <td>{stock.name}</td>
            <td>{stock.qty}</td>
            <td>{stock.avg.toFixed(2)}</td>
            <td>Stock.price.toFixed(2)</td>
            <td>curValue.toFixed(2)</td>
            <td className={profClass}>
              {(curValue-stock.avg * stock.qty.toFixed(2))}
            </td>
            <td className={profClass}>Stock.net</td>
            <td className={dayClass}>Stock.day</td>
          </tr>

            )
        })}
       
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;