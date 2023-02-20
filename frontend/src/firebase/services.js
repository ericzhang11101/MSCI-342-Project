import {auth} from './firebase-config'

export const googleAuth = function(provider) {  
    return auth().signInWithPopup(provider).then((res) => {
        return res.user
    }).catch((err) =>{
        return err;
    })

}

export const logout = async function() {
        auth().signOut().then(() =>{
        console.log('signed out user')
        return true;
    }).catch(() => {
        return false
    })
}

export const googleProvider = new auth.GoogleAuthProvider();
// export const googleProvider = new auth.GoogleAuthProvider()
