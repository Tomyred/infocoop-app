// To see a full list of the available icons visit https://fonts.google.com/icons?selected=Material+Icons&icon.query=star

const navigationConfig = [
    {
        title: "Inicio",
        route: "/",
        icon: "home",
    },
    {
        title: "Estacionamiento",
        collapse: true,
        icon: "drive_eta",
        children: [
            {
                title: "Tarifas",
                route: "/rates",
                icon: "paid",
            },
        ],
    },
    {
        title: "Cop. Independencia",
        icon: "business",
        route: "/keypad",
    },
    {
        title: "MCG",
        icon: "play_arrow",
        route: "/mcg",
    },
    {
        title: "Talleres cooperativos",
        icon: "park",
        route: "/cooperative-workshops",
    },
];

export default navigationConfig;
