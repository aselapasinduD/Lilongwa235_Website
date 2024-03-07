import express, { Express, Request, Response} from "express";
const port = 8000;

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
	res.send("Server Is Runing...");
});

app.listen(port,() => {
	console.log(`Server is listening on port: ${port}`);
});
