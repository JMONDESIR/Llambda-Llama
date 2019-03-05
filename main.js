const llamaNamer = function () {
        const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
        const randomizer = Math.floor(Math.random() * 7)
        console.log(randomizer)
        const namer = function () {
                const suffix = " the Llama"
                let name = possibleNames[randomizer]
                return name + suffix
        }

}

llamaNamer()
console.log(namer())