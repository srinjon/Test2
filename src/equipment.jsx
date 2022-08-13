import "./style.css";
const equipment = [
  {
    MACHINENAME: "Auto Winding Machine",
    ID: "machine001",
    Today: "0",
    MTD: "0",
    YTD: "0",
    ActivePower: "0",
    ApparentPower: "0",
    CURRENT: "0",
    VOLTAGE: "0",
    POWERFACTOR: "0"
  },
  {
    MACHINENAME: "Boller Machine",
    ID: "machine004",
    Today: "0",
    MTD: "0",
    YTD: "0",
    ActivePower: "0",
    ApparentPower: "0",
    CURRENT: "0",
    VOLTAGE: "0",
    POWERFACTOR: "0"
  }
];
function Equipment() {
  return (
    <div className="App">
      <h2>Equipment-wise Details</h2>
      <table>
        <tr>
          <th>MACHINE NAME</th>
          <th>MACHINE ID</th>
          <th>
            ENERGY CONSUMED(kwh)
            <th className="border">today</th>
            <th className="border">mtd</th>
            <th className="border">ytd</th>
          </th>
          <th>Active Power(MW)</th>
          <th>Apparent Power(MVA)</th>
          <th>CURRENT(Amps)</th>
          <th>VOLTAGE(volts)</th>
          <th>POWER FACTOR</th>
          <th>
            IDLE TIME
            <tr>
              <th className="border">today</th>
              <th className="border">mtd</th>
              <th className="border">ytd</th>
            </tr>
          </th>
        </tr>
        {equipment.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.MACHINENAME}</td>
              <td>{val.ID}</td>
              <td>
                <td className="border">{val.Today}</td>
                <td className="border">{val.MTD}</td>
                <td className="border">{val.YTD}</td>
              </td>
              <td>{val.ActivePower}</td>
              <td>{val.ApparentPower}</td>
              <td>{val.CURRENT}</td>
              <td>{val.VOLTAGE}</td>
              <td>{val.POWERFACTOR}</td>
              <td>
                <td className="border">{val.Today}</td>
                <td className="border">{val.MTD}</td>
                <td className="border">{val.YTD}</td>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
export default Equipment;