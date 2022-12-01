import {app} from "./App"
import { stockRouter } from "./routes/stockRouter"


app.use("/stock", stockRouter)