export default function OddEven() {
  return (
    <div className="space-y-2 my-3">
      <h1>pseudo class : odd, even</h1>
      <ul className="space-y-2">
        <li className="odd:bg-blue-50 even:bg-green-50 rounded-lg p-4">
          Item 1
        </li>
        <li className="odd:bg-blue-50 even:bg-green-50 rounded-lg p-4">
          Item 2
        </li>
        <li className="odd:bg-blue-50 even:bg-green-50 rounded-lg p-4">
          Item 3
        </li>
        <li className="odd:bg-blue-50 even:bg-green-50 rounded-lg p-4">
          Item 4
        </li>
      </ul>
    </div>
  );
}
