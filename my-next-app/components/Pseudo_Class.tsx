export default function Pseudo() {
  return (
    <div>
      <ul className="space-y-4">
        <li className="rounded-lg border p-4 first:bg-blue-100 first:font-bold last:bg-green-100 last:italic">
          첫번째
        </li>
        <li className="rounded-lg border p-4">두번째</li>
        <li className="rounded-lg border p-4 first:bg-blue-100 first:font-bold last:bg-green-100 last:italic">
          마지막
        </li>
      </ul>
      <button className="bg-sky-200 hover:bg-sky-400 p-2 rounded-lg mt-5">
        Save changes
      </button>
    </div>
  );
}
