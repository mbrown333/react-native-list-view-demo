const BabyNameData = require('../json/data.json')

let instance = null

export default class BabyNameApi {
    constructor() {
        if (instance) {
            instance = this
        }

        return instance
    }

    getAllNames() {
        let names = []
        BabyNameData.data.map((row) => {
            if (names.indexOf(row[10].toUpperCase()) < 0) {
                names.push(row[10].toUpperCase())
            }
        })

        return names.map((name) => { return { key: name } });
    }

    getAllNamesByYears() {
        let results = {}
        let years = []

        BabyNameData.data.map((row) => {
            if (years.indexOf(row[9]) < 0) {
                years.push(row[9])
            }
        })
        years.map((year) => {
            results[year] = BabyNameData.data.filter((row) => { return row[9] === year })
            results[year] = results[year].map((row) => { return { key: row[10].toUpperCase() } })
        })

        return years.map((year) => {
            return { title: year, data: results[year] }
        })
    }
}