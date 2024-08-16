(() => {
  const mostrarDatos = async () => {
    try {
      const response = await fetch("");
      const data = await response.json();
      data.results.forEach((element) => {
        document.querySelector(
          "#user-data"
        ).innerHTML += `<img src="${element.picture.large}">
                        <p>${element.name.first} ${element.name.last}</p>
                        <p>${element.email}</p>
                        <p>${element.cell}</p>`;
      });
    } catch (error) {
      console.log(error.name);
      console.log(error.message);
      document.querySelector(
        "#user-data"
      ).innerHTML = `<p>Ups! Error al cargar los datos</p>`;
    }
  };
  mostrarDatos();
})();