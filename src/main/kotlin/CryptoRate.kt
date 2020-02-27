external fun require(module: String): dynamic

fun main() {
    val express = require("express")

    val app = express()
    app.listen(8080) {
        println("Listening on port 8080")
    }
    app.get("/crypto") { _, res ->
        res.send(generateCryptoRates())
    }
}

fun generateCryptoRates(): Array<CryptoCurrency> {
    return arrayOf(
        CryptoCurrency("Bitcoin", 90000F),
        CryptoCurrency("ETH", 1000F),
        CryptoCurrency("TRX", 10F)
    )
}
