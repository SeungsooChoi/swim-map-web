import React from 'react';

const Table = ({ swimpool }) => {
  return (
    <table className="border-collapse border border-solid border-slate-400">
      <thead>
        <tr>
          {Object.keys(swimpool[0]).map((item, i) => {
            if (i !== 0) {
              return (
                <th
                  key={i}
                  className="p-2 border border-solid border-slate-300 font-medium"
                >
                  {item}
                </th>
              );
            }
          })}
        </tr>
      </thead>
      <tbody>
        {swimpool.map((item, i) => (
          <tr key={i}>
            <td className="p-2 text-center border border-solid border-slate-300">
              {item.id}
            </td>
            <td className="p-2 text-center border border-solid border-slate-300">
              {item.sigunguName}
            </td>
            <td className="p-2 text-center border border-solid border-slate-300">
              {item.name}
            </td>
            <td className="p-2 text-center border border-solid border-slate-300">
              {item.inOutDoorDivName}
            </td>
            <td className="p-2 text-center border border-solid border-slate-300">
              {item.manageMainName}
            </td>
            <td className="p-2 text-center border border-solid border-slate-300">
              {item.contactNo}
            </td>
            <td className="p-2 text-center border border-solid border-slate-300">
              {item.homepageAddr}
            </td>
            <td className="p-2 text-center border border-solid border-slate-300">
              {item.divingLength}
            </td>
            <td className="p-2 text-center border border-solid border-slate-300">
              {item.divingWidth}
            </td>
            <td className="p-2 text-center border border-solid border-slate-300">
              {item.divingDepth}
            </td>
            <td className="p-2 text-center border border-solid border-slate-300">
              {item.regPoolLength}
            </td>
            <td className="p-2 text-center border border-solid border-slate-300">
              {item.regPoolWidth}
            </td>
            <td className="p-2 text-center border border-solid border-slate-300">
              {item.regPoolLaneCnt}
            </td>
            <td className="p-2 text-center border border-solid border-slate-300">
              {item.irregPoolLength}
            </td>
            <td className="p-2 text-center border border-solid border-slate-300">
              {item.irregPoolWidth}
            </td>
            <td className="p-2 text-center border border-solid border-slate-300">
              {item.irregPoolLaneCnt}
            </td>
            <td className="p-2 text-center border border-solid border-slate-300">
              {item.seatCnt}
            </td>
            <td className="p-2 text-center border border-solid border-slate-300">
              {item.personCnt}
            </td>
            <td className="p-2 text-center border border-solid border-slate-300">
              {item.latitude}
            </td>
            <td className="p-2 text-center border border-solid border-slate-300">
              {item.longitude}
            </td>
            <td className="p-2 text-center border border-solid border-slate-300">
              {item.lotNoAddr}
            </td>
            <td className="p-2 text-center border border-solid border-slate-300">
              {item.roadNmAddr}
            </td>
            <td className="p-2 text-center border border-solid border-slate-300">
              {item.remarks}
            </td>
            <td className="p-2 text-center border border-solid border-slate-300">
              {item.updatedAt}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
