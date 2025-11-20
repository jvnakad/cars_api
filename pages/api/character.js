function character(request, response) {
  response.status(200).json({ name: "mcqueen" });
}

export default character;
