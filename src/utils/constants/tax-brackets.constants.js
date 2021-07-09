const taxBrackets = {
    // Country, tax year, [ upper limit of bracket, tax rate ]
    "Australia": {
        2022: [
            [18200, 0],
            [45000, 0.19],
            [120000, 0.325],
            [180000, 0.37],
            ['andOver', 0.45]
        ],
        2021: [
            [18200, 0],
            [37000, 0.19],
            [90000, 0.325],
            [180000, 0.37],
            ['andOver', 0.45]
        ],
        2020: [
            [18200, 0],
            [37000, 0.19],
            [90000, 0.325],
            [180000, 0.37],
            ['andOver', 0.45]
        ]
    },
    "New Zealand": {
        2022: [
            [14000, 0.105],
            [48000, 0.175],
            [70000, 0.3],
            [180000, 0.33],
            ['andOver', 0.39]
        ],
        2021: [
            [14000, 0.105],
            [48000, 0.175],
            [70000, 0.3],
            ['andOver', 0.33]
        ],
        2020: [
            [14000, 0.105],
            [48000, 0.175],
            [70000, 0.3],
            ['andOver', 0.33]
        ]
    }
}