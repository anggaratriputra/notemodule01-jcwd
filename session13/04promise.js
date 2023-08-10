let isSuccess = true;

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (isSuccess) {
            resolve("berhasil");
        } else {
            reject(new Error("gaboleh"));
        }
    }, 3000);
});

const runPromise = async () => {
    console.log("satu");
    await myPromise
        .then((message) => {
            return Promise.resolve(`messagenya adalah : ${message}`);
        })
        .then((msg) => {
            console.log(msg);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            console.log("promise selesai")
        });
    console.log("dua")
};
// runPromise();


const newRunPromise = async () => {
    console.log("satu")
    try {
        const message = await myPromise;
        const msg = await Promise.resolve(`message nya adalah: ${message}`)
        console.log(msg);
        checkMessage(msg);
    } catch (error) {
        console.log(error);
    }
    console.log("promise selesai")
    console.log("dua")
};

newRunPromise();

function checkMessage(msg) {
    throw new Error("checkMessage gagal")
}