function heroClassifier(xp) {
  if (xp <= 1000) {
    return "Ferro";
  } else if (xp >= 1001 && xp <= 2000) {
    return "Bronze";
  } else if (xp >= 2001 && xp <= 5000) {
    return "Prata";
  } else if (xp >= 5001 && xp <= 7000) {
    return "Ouro";
  } else if (xp >= 7001 && xp <= 8000) {
    return "Platina";
  } else if (xp >= 8001 && xp <= 9000) {
    return "Ascendente";
  } else if (xp >= 9001 && xp <= 10000) {
    return "Imortal";
  } else {
    return "Radiante";
  }
}

const heros = [
  { name: "Artemis", xp: 800 },
  { name: "Valen", xp: 1500 },
  { name: "Kael", xp: 3500 },
  { name: "Lyra", xp: 6000 },
  { name: "Zarek", xp: 7500 },
  { name: "Elowen", xp: 8500 },
  { name: "Thorne", xp: 9500 },
  { name: "Aether", xp: 15000 },
];

heros.forEach((hero) => {
  const classification = heroClassifier(hero.xp);
  console.log(
    `O Herói de nome ${hero.name} está no nível de ${classification}`
  );
});
