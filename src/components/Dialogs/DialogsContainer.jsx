import React from 'react';
import {addMesActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';
import {withAuthRedirectComponent} from "../../HOC/withAuthRedirect";
import {compose} from 'redux';



const mapStateTiProps = (state)=>{
    return {
        state: state.DialogsPage,
        isAuth: state.auth.isAuth
    }
};
const mapDispatchToProps = (dispatch)=>{
    return {
        sendMessageCont:(newMessageBody)=>{
            dispatch(addMesActionCreator(newMessageBody));
        },
    }
};

export default compose(
    withAuthRedirectComponent,
    connect(mapStateTiProps,mapDispatchToProps),
)(Dialogs)

/*
const AuthRedirectComponent = withAuthRedirectComponent(Dialogs)

const SuperDialogsContainer = connect(mapStateTiProps,mapDispatchToProps)(AuthRedirectComponent)

export default SuperDialogsContainer;*/



/*
const DialogsContainer = (props)=>{
    //debugger

    return(
        <StoreContext.Consumer>
            {
                (store)=> {
                    const state = store.getState(),
                        changeMessageText = (text)=>{
                            store.dispatch(updateMesActionCreator(text));
                        },
                        sendMessage = ()=>{
                            store.dispatch(addMesActionCreator());
                        };
                    return <Dialogs
                        updateMessageCont={changeMessageText}
                        sendMessageCont={sendMessage}
                        state={state.DialogsPage}
                    />
                }
            }
        </StoreContext.Consumer>

    );
}
 */