export default function Storage() {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-blue-300 flex flex-col items-center py-10">
      <div className="text-3xl font-bold text-gray-800 mb-6">코드잇 마켓</div>
      <ul className="flex gap-8">
        <li className="flex flex-col items-center p-8 rounded-xl shadow-lg bg-white hover:scale-105 transition-transform duration-300 ease-in-out">
          <span className="text-2xl font-semibold text-gray-700">사과</span>
          <button
            className="add-to-cart-btn mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 transition-all"
            data-item-name="apple"
          >
            담기
          </button>
        </li>
        <li className="flex flex-col items-center p-8 rounded-xl shadow-lg bg-white hover:scale-105 transition-transform duration-300 ease-in-out">
          <span className="text-2xl font-semibold text-gray-700">오렌지</span>
          <button
            className="add-to-cart-btn mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 transition-all"
            data-item-name="orange"
          >
            담기
          </button>
        </li>
        <li className="flex flex-col items-center p-8 rounded-xl shadow-lg bg-white hover:scale-105 transition-transform duration-300 ease-in-out">
          <span className="text-2xl font-semibold text-gray-700">바나나</span>
          <button
            className="add-to-cart-btn mt-4 bg-yellow-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 transition-all"
            data-item-name="banana"
          >
            담기
          </button>
        </li>
      </ul>
      <p className="text-xl font-semibold text-gray-800 my-[15px] bg-blue-500 rounded-xl p-2">
        장바구니: <span id="total-item-count-in-cart">0</span>개
      </p>
      <button
        id="go-to-shopping-cart"
        className="text-xl font-semibold text-gray-800  bg-blue-500 rounded-xl p-2"
      >
        장바구니로 가기
      </button>
      <script src="index.js"></script>
    </div>
  );
}
