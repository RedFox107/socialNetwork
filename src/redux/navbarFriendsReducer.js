const initialState = {
    friends:[
        {
            id:1,
            name:'Name1',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzP2c8xOMPhsgzCRsBmXFC96n1kJbzkXLaJqUMTiOH3dRN1icS'
        },
        {
            id:2,
            name:'Name2',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzP2c8xOMPhsgzCRsBmXFC96n1kJbzkXLaJqUMTiOH3dRN1icS'
        },
        {
            id:3,
            name:'Name3',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzP2c8xOMPhsgzCRsBmXFC96n1kJbzkXLaJqUMTiOH3dRN1icS'
        }
    ]
};

const navbarFriendsReducer = (state = initialState,action)=>{
    return state;
}

export default navbarFriendsReducer;