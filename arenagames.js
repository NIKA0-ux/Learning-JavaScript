const houseMatesPoints = [
    {name: "Chimson", points: 66}, {name: "Mercedes", points: 105}, {name: "Gerard", points: 44},
    {name: "Sheba", points: 57}, {name: "Tram", points: 33}, {name: "OYin", points: 46},
    {name: "Sultex", points: 62}, {name: "Goddessa", points: 83}, {name: "Ricky", points: 8},
    {name: "Abi", points: 70}, {name: "Martins", points: 92}, {name: "Kamsy", points: 70},
    {name: "Barry", points: 61}, {name: "Bells", points: 54}, {name: "Neche", points: 84},
    {name: "Kassi", points: 84}, {name: "Temi", points: 53}, {name: "Araga", points: 76},
    {name: "Bluethopia", points: 54}, {name: "keivo", points: 95}, {name: "flora", points: 35},
    {name: "Yusuf", points: 64}, {name: "Aiku", points: 90}, {name: "Normie", points: 34},
];

const leaderBoard = [...houseMatesPoints].sort((a,b) => b.points - a.points);
console.log(leaderBoard);