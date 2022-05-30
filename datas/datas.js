let vehicle = [
    {
        type: 'vehicle',
        folder: [
            {
                type: 'Diesel',
                folder: [
                    {
                        type: 'bus',
                        name: 'Diesel1',
                        affectation: 'line 50',
                        energyType: 'Diesel'
                    },
                    {
                        type: 'bus',
                        name: 'Diesel2',
                        affectation: 'line 2',
                        energyType: 'Diesel'
                    }
                ]
            },
            {
                type: 'Biogaz',
                folder: [
                    {
                        type: 'bus',
                        name: 'BioCar1',
                        affectation: 'line 11',
                        energyType: 'Biogaz'
                    },
                    {
                        type: 'bus',
                        name: 'Biocar2',
                        affectation: 'line 12',
                        energyType: 'Biogaz'
                    }
                ]
            }
        ]

    }
];

let line = [
    {
        type: "line",
        number: 50,
        folder: [
            {
                type: 'town',
                name: 'Parthenay',
                folder: [
                    {
                        type: 'bus stop',
                        town: 'Parthenay',
                        name: 'Le Tallud',
                        lineId: 'line 50',
                        time: '13:10',
                        passengersGetOnBus: 2,
                        passengersGetOutBus: 0,
                        passengersIn: 0
                    },
                    {
                        type: 'bus stop',
                        town: 'Parthenay',
                        name: 'Asay sur Thouet',
                        lineId: 'line 50',
                        time: '13:15',
                        passengersGetOnBus: 3,
                        passengersGetOutBus: 1,
                        passengersIn: 0
                    },
                    {
                        type: 'bus stop',
                        town: 'Parthenay',
                        name: 'St-Aubin-le-Cloud',
                        lineId: 'line 50',
                        time: '13:18',
                        passengersGetOnBus: 1,
                        passengersGetOutBus: 2,
                        passengersIn: 0
                    },
                    {
                        type: 'bus stop',
                        town: 'Parthenay',
                        name: 'Secondigny',
                        lineId: 'line 50',
                        time: '13:22',
                        passengersGetOnBus: 0,
                        passengersGetOutBus: 3,
                        passengersIn: 0
                    }
                ]
            },
        ]
    },
    {
        type: "line",
        number: 12,
        folder: [
            {
                type: 'town',
                name: 'Niort',
                folder: [
                    {
                        type: 'bus stop',
                        town: 'Niort',
                        name: 'Gare SNCF',
                        lineId: 'line 12',
                        time: '5:50',
                        passengersGetOnBus: 10,
                        passengersGetOutBus: 0,
                        passengersIn: 0
                    },
                    {
                        type: 'bus stop',
                        town: 'Niort',
                        name: 'Pl. de la Brèche',
                        lineId: 'line 12',
                        time: '5:55',
                        passengersGetOnBus: 5,
                        passengersGetOutBus: 0,
                        passengersIn: 0
                    }
                ]
            },
            {
                type: 'town',
                name: 'St-Christophe-sur-Roc',
                folder: [
                    {
                        type: 'bus stop',
                        town: 'St-Christophe-sur-Roc',
                        name: 'Montplaisir',
                        lineId: 'line 12',
                        time: '6:13',
                        passengersGetOnBus: 3,
                        passengersGetOutBus: 7,
                        passengersIn: 0
                    }
                ]
            },
            {
                type: 'town',
                name: 'Mazières-en-Gâtine',
                folder: [
                    {
                        type: 'bus stop',
                        town: 'Mazières-en-Gâtine',
                        name: 'Place des Marronniers',
                        lineId: 'line 12',
                        time: '6:22',
                        passengersGetOnBus: 0,
                        passengersGetOutBus: 5,
                        passengersIn: 0
                    }
                ]
            },
            {
                type: 'town',
                name: 'St-Pardoux-Soutiers',
                folder: [
                    {
                        type: 'bus stop',
                        town: 'St-Pardoux-Soutiers',
                        name: 'Rambaudières',
                        lineId: 'line 12',
                        time: '6:30',
                        passengersGetOnBus: 0,
                        passengersGetOutBus: 3,
                        passengersIn: 0
                    }
                ]
            },
            {
                type: 'town',
                name: 'Parthenay',
                folder: [
                    {
                        type: 'bus stop',
                        town: 'Parthenay',
                        name: 'Base de loisirs',
                        lineId: 'line 12',
                        time: '6:36',
                        passengersGetOnBus: 0,
                        passengersGetOutBus: 3,
                        passengersIn: 0
                    },
                    {
                        type: 'bus stop',
                        town: 'Parthenay',
                        name: 'Av. François Mitterrand',
                        lineId: 'line 12',
                        time: '6:38',
                        passengersGetOnBus: 2,
                        passengersGetOutBus: 0,
                        passengersIn: 0
                    },
                    {
                        type: 'bus stop',
                        town: 'Parthenay',
                        name: 'Gare routière',
                        lineId: 'line 12',
                        time: '6:40',
                        passengersGetOnBus: 0,
                        passengersGetOutBus: 1,
                        passengersIn: 0
                    }
                ]
            }
        ]
    }
]

module.exports = {
    vehicle,
    line
}
