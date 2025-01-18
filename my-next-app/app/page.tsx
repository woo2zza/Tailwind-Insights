import Pseudo from "@/components/Pseudo_Class";
import OddEven from "@/components/Odd_Even";

export default function Home() {
  return (
    <div>
      <Pseudo />
      <OddEven />
      <div className="p-6 space-y-6">
        <div className="peer relative border rounded-lg p-4">
          <input type="checkbox" id="child-checkbox" className="peer hidden" />
          <label className="block p-4 bg-gray-100 rounded-lg cursor-pointer peer-checked:bg-blue-100">
            자식 상태에 따라 배경 변경
          </label>
          <p className="absolute top-full mt-2 text-gray-500 peer-checked:text-blue-500">
            체크박스가 선택되었습니다!
          </p>
        </div>
      </div>
    </div>
  );
}
