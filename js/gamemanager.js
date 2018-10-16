let gameManager = {
  setGameStart: function(classType){
    this.resetPlayer(classType);
    this.setPreFight(classType);
  },
  resetPlayer: function(classType){
    switch (classType) {
      case "Ghanima":
        bus = new bus(classType, 7, "awesome", 60, 50);

        break;
      case "Nymeria":
        bus = new bus(classType, 9, "beautiful", 58, 65);

        break;
        case "Genny":
          bus = new bus(classType, 5, "stellar", 52, 50);

        break;
        case "Ygritte":
          bus = new bus(classType, 8, "amazing", 48, 60);

        break;
        case "Janet":
          bus = new bus(classType, 6, "wonderful", 50, 75);

              break;

    }
      let getInterface = document.querySelector(".interface");
      getInterface.innerHTML = '<img src="images/' +
      classType.toLowerCase() + '.jpg" class="img-avatar"><div><h3>' + classType +
      '</h3><p>Miles Per Gallon: ' + bus.mpg +
      '</p><p>Style: ' + bus.style +
      '</p><p>Capacity: ' + bus.capacity +
      '</p><p>Speed: ' + bus.speed +
      '</p></div>';
  },

}
