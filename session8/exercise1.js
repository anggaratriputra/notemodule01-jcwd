// done Langkah 1: Buat kelas induk bernama "Employee" dengan atribut "workingHoursPerDay"
// done Langkah 2: Tambahkan metode "tambahJamKerjaPerHari(jumlahJam)" di kelas "Employee" untuk menambahkan jumlah jam kerja per hari.
// done Langkah 3: Tambahkan metode "hitungTotalGaji()" di kelas "Employee" yang akan diimplementasikan di kelas anak. Di sini, beri nilai default 0, karena kelas induk tidak memiliki informasi tentang gaji per jam.
// done Langkah 4: Buat kelas anak bernama "FulltimeEmployee" yang merupakan turunan dari "Employee".
// done Langkah 5: Implementasikan metode "hitungTotalGaji()" di kelas "FulltimeEmployee" untuk menghitung total gaji karyawan full-time berdasarkan jam kerja per hari.
// done Langkah 6: Buat kelas anak bernama "ParttimeEmployee" yang merupakan turunan dari "Employee".
// done Langkah 7: Implementasikan metode "hitungTotalGaji()" di kelas "ParttimeEmployee" untuk menghitung total gaji karyawan part-time berdasarkan jam kerja per hari.
// Langkah 8: Buat objek dari kelas "FulltimeEmployee" dan "ParttimeEmployee".
// Langkah 9: Tambahkan jam kerja per hari untuk karyawan full-time dan part-time menggunakan metode "tambahJamKerjaPerHari(jumlahJam)".
// Langkah 10: Hitung total gaji karyawan full-time dan part-time dengan menggunakan metode "hitungTotalGaji()".
// Langkah 11: Cetak hasil perhitungan total gaji.



// parent Class Employee

class Employee {
    #baseSalary = 0
    #extendSalary = 0
    constructor(baseSalary, extendSalary) {
        this.workingHoursPerDay = []
        this.#baseSalary = baseSalary
        this.#extendSalary = extendSalary
    }

    addWorkingHoursPerDay(hour) {
        this.workingHoursPerDay.push(hour)
    }

    calculateTotalSalary() {
        const baseSalary = this.#baseSalary
        const extendSalary = this.#extendSalary
        let totalSalary = 0
        for (let workHours of this.workingHoursPerDay) {
            if (workHours <= 6) {
                totalSalary += workHours * baseSalary
            } else {
                totalSalary += (baseSalary * 6) + ((workHours - 6) * extendSalary)
            }
        }
        return totalSalary
    }
}


//  children class FulltimeEmployee based on parent class Employee
class FulltimeEmployee extends Employee {
    constructor() {
        super(100000, 75000)
    }
    // calculateTotalSalary() {
    //     const baseSalary = 100000
    //     const extendSalary = 75000
    //     let totalSalary = 0
    //     for (let workHours of this.workingHoursPerDay) {
    //         if (workHours <= 6) {
    //             totalSalary += workHours * baseSalary
    //         } else {
    //             totalSalary += (baseSalary * 6) + ((workHours - 6) * extendSalary)
    //         }
    //     }
    //     return totalSalary
    // }
}

// children class ParttimeEmployee based on parent class Employee
class ParttimeEmployee extends Employee {
    constructor() {
        super(50000, 30000)
    }
    // calculateTotalSalary() {
    //     const baseSalary = 50000
    //     const extendSalary = 30000
    //     let totalSalary = 0
    //     for (let workHours of this.workingHoursPerDay) {
    //         if (workHours <= 6) {
    //             totalSalary += workHours * baseSalary

    //         } else {
    //             totalSalary += (baseSalary * 6) + ((workHours - 6) * extendSalary)
    //         }
    //     }
    //     return totalSalary
    // }

}
// create object from FulltimeEmployee and ParttimeEmployee
const fulltimeEmployee = new FulltimeEmployee()
const parttimeEmployee = new ParttimeEmployee()

fulltimeEmployee.addWorkingHoursPerDay(6)
fulltimeEmployee.addWorkingHoursPerDay(5)
parttimeEmployee.addWorkingHoursPerDay(7)
parttimeEmployee.addWorkingHoursPerDay(10)


const formattedGajiFulltime = fulltimeEmployee.calculateTotalSalary().toLocaleString("id-ID");
const formattedGajiParttime = parttimeEmployee.calculateTotalSalary().toLocaleString("id-ID");


console.log("Total gaji Fulltime Employee adalah IDR : ", formattedGajiFulltime)
console.log("Total gaji Parttime Employee adalah IDR : ", formattedGajiParttime)





// using super

