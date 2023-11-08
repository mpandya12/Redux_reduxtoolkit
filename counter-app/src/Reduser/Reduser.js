const initalstate=0;


const ChangeNumber =(state=initalstate,action)=>{

    switch(action.type){
        case "Increment":return state + 1
        case "Dicrement":return state - 1
        case "Multipal":return state * action.payload


        default : return state



    }

}

export default ChangeNumber