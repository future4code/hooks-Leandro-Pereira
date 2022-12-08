import app from "./App"
import { purchaseRouter } from "./routes/purchasesRouter"
import { stockRouter } from "./routes/stockRouter"


app.use("/stock", stockRouter)

app.use("/purchase", purchaseRouter)