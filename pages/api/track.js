function track(request, response) {
  // add cache
  response.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");

  response.status(200).json({
    tracks: [
      {
        id: 1,
        name: "Radiator Springs Speedway",
        location: "Radiator Springs",
        length: "2.5 miles",
        type: "asphalt oval",
        recordTime: "1:22.5",
        recordHolderId: 1, // Lightning McQueen
      },
      {
        id: 2,
        name: "Los Angeles Grand Prix",
        location: "Los Angeles",
        length: "3.1 miles",
        type: "street circuit",
        recordTime: "1:45.3",
        recordHolderId: 2, // Chick Hicks
      },
      {
        id: 3,
        name: "Tokyo Drift Circuit",
        location: "Tokyo",
        length: "2.8 miles",
        type: "technical track",
        recordTime: "1:36.9",
        recordHolderId: 1, // Lightning McQueen
      },
      {
        id: 4,
        name: "Florida International Speedway",
        location: "Florida",
        length: "2.7 miles",
        type: "high-speed oval",
        recordTime: "1:20.2",
        recordHolderId: 3, // Strip The King
      },
    ],
  });
}

export default track;
