$.get(
  "https://swapi-api.alx-tools.com/api/films/?format=json",
  (res, textStatus) => {
    if (textStatus === "success") {
      res.results.forEach((element) => {
        $("#list_movies").append(`<li>${element.title}</li>`);
      });
    }
  }
);
