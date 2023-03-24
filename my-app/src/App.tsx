import * as React from "react";
import "./App.css";
import TinhThanh from "./tinh_tp.json";
import QuanHuyen from "./quan_huyen.json";
import ListPost from "./components/ListPost";
import CandlestickChart from "./components/CandlestickChart";
function App() {
  const provinces = TinhThanh;
  const district = QuanHuyen;
  const [selectedProvinceCode, setSelectedProvinceCode] = React.useState("");
  const [selectedProvince, setSelectedProvince] = React.useState("");
  const [selectedDistrict, setSelectedDistrict] = React.useState("");
  const [selectedPrice, setSelectedPrice] = React.useState("");
  const [selectedArea, setSelectedArea] = React.useState("");

  const handleProvinceChange = (event: any) => {
    setSelectedProvince(event.target.value);
  };

  const handleDistrictChange = (event: any) => {
    setSelectedDistrict(event.target.value);
  };

  const handlePriceChange = (event: any) => {
    setSelectedPrice(event.target.value);
  };

  const handleAreaChange = (event: any) => {
    setSelectedArea(event.target.value);
  };

  const handleReset = () => {
    setSelectedProvince("");
    setSelectedDistrict("");
    setSelectedPrice("");
    setSelectedArea("");
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  const filteredDistricts = Object.values(district).filter(
    (district) => district.parent_code === selectedProvinceCode
  );
  const prices = [
    {
      _id: 0,
      name: "Chọn mức giá",
      array: [],
    },
    {
      _id: 1,
      name: "Dưới 1 triệu",
      array: [0, 1000000],
    },
    {
      _id: 2,
      name: "1 triệu - 2 triệu",
      array: [1000000, 2000000],
    },
    {
      _id: 3,
      name: "2 triệu - 3 triệu",
      array: [2000000, 3000000],
    },
    {
      _id: 4,
      name: "3 triệu - 4 triệu",
      array: [3000000, 4000000],
    },
    {
      _id: 5,
      name: "4 triệu - 5 triệu",
      array: [4000000, 5000000],
    },
    {
      _id: 6,
      name: "5 triệu - 6 triệu",
      array: [5000000, 6000000],
    },
    {
      _id: 7,
      name: "7 triệu - 8 triệu",
      array: [7000000, 8000000],
    },
    {
      _id: 8,
      name: "trên 10 triêu",
      array: [10000000, 100000000],
    },
  ];
  const area = [
    {
      _id: 0,
      name: "Chọn diện tích",
      value: [0],
    },
    {
      _id: 1,
      name: "dưới 20m2",
      value: [0, 20],
    },
    {
      _id: 2,
      name: "từ 20m2 - 30m2",
      value: [20, 30],
    },
    {
      _id: 3,
      name: "từ 30m2 - 40m2",
      value: [30, 40],
    },
    {
      _id: 4,
      name: "từ 40m2 - 50m2",
      value: [40, 50],
    },
    {
      _id: 5,
      name: "từ 50m2 trở lên",
      value: [50, 500],
    },
  ];

  const data = [
    { date: "2022-01-01", open: 10, high: 15, low: 5, close: 12 },
    { date: "2022-01-02", open: 12, high: 18, low: 10, close: 14 },
    { date: "2022-01-03", open: 14, high: 20, low: 12, close: 16 },
    { date: "2022-01-04", open: 16, high: 22, low: 14, close: 18 },
    { date: "2022-01-05", open: 18, high: 24, low: 16, close: 20 },
    { date: "2022-01-06", open: 20, high: 26, low: 18, close: 22 },
  ];
  return (
    <div className="App">
      <header className="App-header mb-20">
        <div className="flex flex-col">
          <form className="bg-white p-6 rounded-xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20">
              <div className="flex flex-col">
                <label
                  htmlFor="status"
                  className="font-medium text-sm text-stone-600"
                >
                  Tỉnh thành
                </label>
                <select
                  id="province"
                  onChange={handleProvinceChange}
                  className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                >
                  {Object.values(provinces).map((province: any, index: any) => (
                    <option
                      key={index.code}
                      value={province.code}
                      data-parent={province.parent_code}
                    >
                      {province.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="status"
                  className="font-medium text-sm text-stone-600"
                >
                  Quận huyện
                </label>
                <select
                  id="district"
                  className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                >
                  {filteredDistricts.map((district: any, index: any) => (
                    <option key={index} value={district.name}>
                      {district.name_with_type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="status"
                  className="font-medium text-sm text-stone-600"
                >
                  Khoảng giá
                </label>
                <select
                  id="status"
                  className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                >
                  {prices.map((el) => (
                    <option key={el._id} value={el.name}>
                      {el.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="status"
                  className="font-medium text-sm text-stone-600"
                >
                  Diện tích
                </label>
                <select
                  id="status"
                  className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                >
                  {area.map((item) => (
                    <option key={item._id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid md:flex grid-cols-2 justify-end space-x-4 w-full mt-6">
              <button className="px-4 py-2 rounded-lg text-stone-50 bg-stone-400 hover:bg-stone-500 font-bold text-white shadow-lg shadow-stone-200 transition ease-in-out duration-200 translate-10">
                Reset
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-lg text-orange-50 bg-orange-400 hover:bg-orange-500 font-bold text-white shadow-lg shadow-orange-200 transition ease-in-out duration-200 translate-10"
              >
                Lọc tin
              </button>
            </div>
          </form>
        </div>
      </header>
      <ListPost />
      <CandlestickChart data={data} />
    </div>
  );
}

export default App;
