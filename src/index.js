import app from "./app";
import http from 'http';
import { Server } from "socket.io";
import { connectDB } from "./database"
import socket from "./socket";

// io es la conexion establecida con los clientes y debe estar conectada al servidor (app) de la siguiente manera.
const server = http.createServer(app)
const httpServer = server.listen(3000)
const io = new Server(httpServer)
socket(io)
connectDB()

//Con estas tres lineas anteriores conectamos el server y el server web socket.
console.log('Server is running on port 3000')

