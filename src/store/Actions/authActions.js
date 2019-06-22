export const Login =(credential)=>{
    return(dispatch,getState,{getFirebase})=>
    {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(credential.email,credential.password).then(
            ()=>{
                dispatch({type:"LOGIN_SUCCESS"});
            }
        ).catch(
            (err)=>{
                dispatch({type:"LOGIN_FAILED"},err);
            }
        )
    }

}

export const logOut =()=>{
    return(dispatch,getState,{getFirebase})=>
    {
        const firebase = getFirebase();

        firebase.auth().signOut().then(
            ()=>{
                dispatch({type:"LOGOUT_SUCCESS"});
            }
        )
    }

}

export const signUp=(newUser)=>
{
    console.log(newUser)
    return(dispatch,getState,{getFirebase,getFirestore})=> {

        const firebase = getFirebase();
        const firestore= getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
           
               newUser.email,
               newUser.password
           
        ).then((res)=>{
        return firestore.collection('users').doc(res.user.uid).set(
            {
               FirstName:newUser.FirstName,
               LastName:newUser.LastName,
               Init: newUser.FirstName[0] + newUser.LastName[0]
            }
        )
        }
        ).then(()=>{
            dispatch({type:"SIGNUP_SUCCESS"})
        }
        ).catch((err)=>
        dispatch({type:"SIGNUP_FAILED",err}))

    }
}