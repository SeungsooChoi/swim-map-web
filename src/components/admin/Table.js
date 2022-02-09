import React from 'react';
import { formatDate } from '../../lib/util';

const Table = ({ swimpool }) => {
  return (
    <table className="min-w-full">
      <thead className="bg-gray-400/40">
        <tr>
          {Object.keys(swimpool[0]).map((item, i) => {
            if (i !== 0) {
              return (
                <th
                  key={i}
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase border-r border-solid border-r-slate-400/50"
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
          <tr
            key={i}
            className="bg-white hover:bg-gray-100 border-b border-solid border-b-slate-400/50"
          >
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap border-r border-solid border-r-slate-400/50">
              {item.id}
            </td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap border-r border-solid border-r-slate-400/50">
              {item.sigunguName}
            </td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap border-r border-solid border-r-slate-400/50">
              {item.name}
            </td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap border-r border-solid border-r-slate-400/50">
              {item.inOutDoorDivName}
            </td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap border-r border-solid border-r-slate-400/50">
              {item.manageMainName}
            </td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap border-r border-solid border-r-slate-400/50">
              {item.contactNo}
            </td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap border-r border-solid border-r-slate-400/50">
              {item.homepageAddr}
            </td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap border-r border-solid border-r-slate-400/50">
              {item.divingLength}
            </td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap border-r border-solid border-r-slate-400/50">
              {item.divingWidth}
            </td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap border-r border-solid border-r-slate-400/50">
              {item.divingDepth}
            </td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap border-r border-solid border-r-slate-400/50">
              {item.regPoolLength}
            </td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap border-r border-solid border-r-slate-400/50">
              {item.regPoolWidth}
            </td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap border-r border-solid border-r-slate-400/50">
              {item.regPoolLaneCnt}
            </td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap border-r border-solid border-r-slate-400/50">
              {item.irregPoolLength}
            </td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap border-r border-solid border-r-slate-400/50">
              {item.irregPoolWidth}
            </td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap border-r border-solid border-r-slate-400/50">
              {item.irregPoolLaneCnt}
            </td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap border-r border-solid border-r-slate-400/50">
              {item.seatCnt}
            </td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap border-r border-solid border-r-slate-400/50">
              {item.personCnt}
            </td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap border-r border-solid border-r-slate-400/50">
              {item.latitude}
            </td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap border-r border-solid border-r-slate-400/50">
              {item.longitude}
            </td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap border-r border-solid border-r-slate-400/50">
              {item.lotNoAddr}
            </td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap border-r border-solid border-r-slate-400/50">
              {item.roadNmAddr}
            </td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap border-r border-solid border-r-slate-400/50">
              {item.remarks}
            </td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap border-r border-solid border-r-slate-400/50">
              {item.registeredUser}
            </td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap border-r border-solid border-r-slate-400/50">
              {formatDate(Number(item.updatedAt))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
