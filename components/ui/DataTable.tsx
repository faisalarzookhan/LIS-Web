import React from 'react';

interface DataTableProps {
  columns: { key: string; label: string }[];
  data: Record<string, any>[];
  actions?: (item: Record<string, any>) => React.ReactNode;
}

const DataTable: React.FC<DataTableProps> = ({ columns, data, actions }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-gray-800 border">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="p-3 border-b text-left">{col.label}</th>
            ))}
            {actions && <th className="p-3 border-b text-left">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-700">
              {columns.map((col) => (
                <td key={col.key} className="p-3 border-b">{item[col.key]}</td>
              ))}
              {actions && (
                <td className="p-3 border-b">
                  {actions(item)}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
