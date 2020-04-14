const ADD_MESSAGE = "ADD-MESSAGE";



const initialState = {
    dialogs: [
        {
            id:1,
            name:'Dima1',
            img:'https://cdn4.iconfinder.com/data/icons/travel-vol1-outline-bukeicon/32/coffee_enjoy_bukeicon_travel_cup_drinks.svg.2019_05_30_10_16_19.0-512.png',
        },
        {
            id:2,
            name:'Dima2',
            img:'data:image/png;base64,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',
        },
        {
            id:3,
            name:'Dima3',
            img:'data:image/png;base64,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',
        },
        {
            id:4,
            name:'Dima4',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0gFeXT6jYgH3DjvvPtOUXxx4qpKZ2CFDQPgwsUzKx6VlpMTa4',
        },
        {
            id:5,
            name:'Dima5',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0gFeXT6jYgH3DjvvPtOUXxx4qpKZ2CFDQPgwsUzKx6VlpMTa4',
        },
        {
            id:6,
            name:'Dima6',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0gFeXT6jYgH3DjvvPtOUXxx4qpKZ2CFDQPgwsUzKx6VlpMTa4',
        }
    ],
    messages: [
        {id:1,message:"hi"},
        {id:2,message:"blabla"},
        {id:3,message:"hyo"},
        {id:4,message:"hi"},
        {id:5,message:"hi"},
        {id:6,message:"hi"}
    ]
};



const dialogsReducer = (state = initialState,action)=>{
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages:[
                    ...state.messages,
                    {
                        id:state.messages.length+1,
                        message: action.BLLText,
                    }
                ],
            };
            break;
        default:
            return state;
            //alert("Error from dialogsReducer.js: method dispatch!")
            break;
    }
};



export const addMesActionCreator = (newMessageBody)=> {
    return {
        type: ADD_MESSAGE,
        BLLText: newMessageBody
    }
};
export default dialogsReducer;