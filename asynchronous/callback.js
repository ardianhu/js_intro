function getUsers(isOffline, callback) {
    // simulate network delay
    setTimeout(() => {
        const users = ['Jack', 'Jill', 'John'];

        if(isOffline) {
            callback(new Error('Anda sedang offline!'), null);
            return;
        }
        
        callback(null, users);
    }, 1000);
}

function usersCallback(error, users) {
    if (error) {
        console.log('proses gagal: ', error.message);
        return;
    }
    console.log('proses berhasil: ', users);
}

getUsers(true, usersCallback);
// export to promisify
export default getUsers;