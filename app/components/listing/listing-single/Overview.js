const Overview = ({carData}) => {
  // const carData = [
  //   { label: "Make", value: "Volvo" },
  //   { label: "Model", value: "XC 90" },
  //   { label: "Color", value: "white" },
  //   { label: "Drive Type", value: "4x4" },
  //   { label: "Transmission", value: "Automatic" },
  //   { label: "Condition", value: "Used" },
  //   { label: "Year", value: "2021" },
  //   { label: "Mileage", value: "280,000" },
  //   { label: "Fuel Type", value: "Diesel" },
  //   { label: "Engine Size", value: "5.2L" },
  //   { label: "Doors", value: "5" },
  //   { label: "Cylinders", value: "10" },
  //   { label: "VIN", value: "2D456THA798700213GT21" },
  // ];

  // id: 1,
  // image: "https://i.ibb.co/QprWZRv/wagnar-Resize.png",
  // slide: ["https://i.ibb.co/QprWZRv/wagnar-Resize.png"],
  // photosCount: 22,
  // videosCount: 3,
  // title: "Waygonr",
  // price: 800.0,
  // distance: 8.0,
  // rating: 4.7,
  // reviewsCount: 684,
  // mileage: "4789",
  // fuelType: "Diesel",
  // transmission: "Automatic",
  // tags: ["used"],

  return (
    <ul className="list-group">
        <li
          className="list-group-item d-flex justify-content-between align-items-start"
        >
          <div className="me-auto">
            <div className="day">Make</div>
          </div>
          <span className="schedule">{carData.title}</span>
        </li>
        <li
          className="list-group-item d-flex justify-content-between align-items-start"
        >
          <div className="me-auto">
            <div className="day">Fuel Type</div>
          </div>
          <span className="schedule">{carData.fuelType}</span>
        </li>

        <li
          className="list-group-item d-flex justify-content-between align-items-start"
        >
          <div className="me-auto">
            <div className="day">Transmission</div>
          </div>
          <span className="schedule">{carData.transmission}</span>
        </li>
        <li
          className="list-group-item d-flex justify-content-between align-items-start"
        >
          <div className="me-auto">
            <div className="day">Mileage</div>
          </div>
          <span className="schedule">{carData.mileage}</span>
        </li>
        <li
          className="list-group-item d-flex justify-content-between align-items-start"
        >
          <div className="me-auto">
            <div className="day">Color</div>
          </div>
          <span className="schedule">{carData.mileage}</span>
        </li>
    </ul>
  );
};

export default Overview;
