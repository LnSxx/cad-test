const boxIndexes = [
    [0, 1, 2],
    [0, 2, 3],
    [2, 1, 5],
    [2, 5, 6],
    [3, 2, 6],
    [3, 6, 7],
    [0, 3, 7],
    [0, 7, 4],
    [1, 0, 4],
    [1, 4, 5],
    [6, 5, 4],
    [6, 4, 7]
]

class Box {
    constructor(l, w, h) {
        this.length = l;
        this.width = w;
        this.height = h;
    }
    getCoodinates(index) {
        switch (index) {
            case 0:
                return [0, 0, this.height]
            case 1:
                return [0, this.width, this.height]
            case 2:
                return [0, this.width, 0]
            case 3:
                return [0, 0, 0]
            case 4:
                return [this.length, 0, this.height]
            case 5:
                return [this.length, this.width, this.height]
            case 6:
                return [this.length, this.width, 0]
            case 7:
                return [this.length, 0, 0]
        }
    }
    getTriangles() {
        let triangles = boxIndexes.map((triangle) => {
            let triangleCoor = triangle.map((point) => {
                return this.getCoodinates(point)
            })
            return triangleCoor
        })
        return triangles
    }
}

module.exports = { boxIndexes, Box }