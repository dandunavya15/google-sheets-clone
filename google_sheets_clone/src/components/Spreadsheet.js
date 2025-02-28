import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const Spreadsheet = () => {
  const [cells, setCells] = useState(
    Array(10).fill().map(() => Array(10).fill(""))
  );

  const handleCellChange = (row, col, value) => {
    const newCells = [...cells];
    newCells[row][col] = value;
    setCells(newCells);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Google Sheets Clone</h1>
      <table className="border-collapse border w-full">
        <tbody>
          {cells.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex} className="border p-2">
                  <input
                    type="text"
                    value={cell}
                    onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
                    className="w-full border-none focus:outline-none"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Button className="mt-4">Save</Button>
    </div>
  );
};

export default Spreadsheet;

// TODO: Implement drag-and-drop, formulas, and additional features
