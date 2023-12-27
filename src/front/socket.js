const socket = io()


export const loadTrophies = (callback) => {
    socket.on("loadTrophies", callback)
}

export const saveTrophy = (title, description, imgUrl, date) => {
    socket.emit('saveTrophy', {
        title,
        description,
        imgUrl,
        date
    })
}

export const newTrophy = (callback) => {
    socket.on("newTrophy", callback)
}

export const deleteTrophy = id => {
    socket.emit("deleteTrophy", id)
}

export const completeTrophy = id => {
    socket.emit("completeTrophy", id)
}