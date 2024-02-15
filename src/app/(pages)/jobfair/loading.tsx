export default function Loading() {
  return [...new Array(10)].map((pr, index) => (
    <div
      key={index}
      className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <div className="w-full p-6 mb-4 cursor-pointer  hover:border hover:border-teal-400  bg-white border border-gray-200 rounded-xl shadow-xs">
        <div className="w-full h-5 bg-gray-200 rounded-xl" />

        <div className=" pt-4">
          <div className="w-3/4 h-3 bg-gray-200 rounded-xl" />
        </div>
      </div>
    </div>
  ));
}
