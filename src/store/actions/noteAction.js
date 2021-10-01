export const addNote = (note) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('notes')
            .add({
                ...note,
                favorite: false,
                createdAt: new Date()
            })
            .then(() => {
                console.log('Added note successfully.');
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

export const deleteNote = (note) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('notes').doc(note.id).delete()
            .then(() => {
                console.log('Removed note successfully.');
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

export const toggleFav = (note) => {
    return (dispatch, getState, { getFirestore }) => {
        const favStatus = !note.favorite;
        const firestore = getFirestore();
        firestore.collection('notes').doc(note.id).update({
            favorite: favStatus
        }).then(() => {
            if (note.favorite) {
                console.log('Removed from favorite successfully.');
            } else {
                console.log('Added to the favorite successfully.');
            }
        })
            .catch((err) => {
                console.log(err);
            })
    }
}