import Trophy from "./models/Trophy"


export default (io) => {
    const getTrophies = async () => {
        const trophies = await Trophy.find()
        io.emit("loadTrophies", trophies)
    }

    io.on('connection', (socket) => {
        
        getTrophies()
        socket.on('saveTrophy', async (trophy) => {
            const newTrophy = await new Trophy({
                title: trophy.title,
                description: trophy.description,
                imgUrl: trophy.imgUrl,
                date: trophy.date,
                status: false
            })
            newTrophy.save()
            console.log('Trophy saved')
            socket.emit("newTrophy", newTrophy)
        })
        
        socket.on("deleteTrophy", async (id) => {
            await Trophy.findByIdAndDelete(id)
            console.log("Trophy Deleted.")
            getTrophies()
        })

        socket.on("completeTrophy", async (id) => {
            const today = new Date()
            const date = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
           const update = {dateCompleted: date, status: true}
           const trophyCompleted = await Trophy.findByIdAndUpdate(id, update, {new:true}) 
           console.log(trophyCompleted)
            getTrophies()
        })
        
        
    })
}