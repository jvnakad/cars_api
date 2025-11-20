function track(request, response) {
  response.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");
  response.status(200).json({
    tracks: [
      {
        id: 1,
        name: "Radiator Springs Speedway",
        location: "Radiator Springs",
        lengthInMiles: 2.5,
        type: "asphalt oval",
        recordTime: "1:22.5",
        recordHolderId: 1,
      },
      {
        id: 2,
        name: "Los Angeles Grand Prix",
        location: "Los Angeles",
        lengthInMiles: 3.1,
        type: "street circuit",
        recordTime: "1:45.3",
        recordHolderId: 2,
      },
      {
        id: 3,
        name: "Tokyo Drift Circuit",
        location: "Tokyo",
        lengthInMiles: 2.8,
        type: "technical track",
        recordTime: "1:36.9",
        recordHolderId: 1,
      },
      {
        id: 4,
        name: "Florida International Speedway",
        location: "Florida",
        lengthInMiles: 2.7,
        type: "high-speed oval",
        recordTime: "1:20.2",
        recordHolderId: 3,
      },
    ],
  });
}

export default track;
