import React from 'react';

// The base item must have an id for the key prop
interface BaseDataItem {
  id: string | number;
}

// The component is generic over a type T that extends our base item
interface DataTableProps<T extends BaseDataItem> {
  columns: { key: keyof T; label: string }[];
  data: T[];
  actions?: (item: T) => React.ReactNode;
}

const DataTable = <T extends BaseDataItem>({ columns, data, actions }: DataTableProps<T>) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-gray-800 border">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key as string} className="p-3 border-b text-left">{col.label}</th>
            ))}
            {actions && <th className="p-3 border-b text-left">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
              {columns.map((col) => (
                <td key={col.key as string} className="p-3 border-b">{String(item[col.key])}</td>
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
