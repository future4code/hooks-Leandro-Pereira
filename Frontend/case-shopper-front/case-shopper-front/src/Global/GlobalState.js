const GlobalState = (props) => {

    return(
        <GlobalStateContext.Provider>
            {props.children}
        </GlobalStateContext.Provider>
    )
}