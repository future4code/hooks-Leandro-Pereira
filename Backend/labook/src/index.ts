import { app } from "./app"
import { userRouter } from "./routes/userRouter"
import { postRouter } from "./routes/postRouter"
import { friendRouter } from "./routes/friendsRouter"

app.use("/user", userRouter)

app.use("/post", postRouter)

app.use("/friend", friendRouter)