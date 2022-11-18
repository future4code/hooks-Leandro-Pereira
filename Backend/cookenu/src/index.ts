import app from './app';
import { recipesRouter } from './routes/recipesRouter';
import { userRouter } from './routes/UserRouter';

app.use('/user/', userRouter)
app.use("/recipes/", recipesRouter)

