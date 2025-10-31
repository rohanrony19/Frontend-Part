function UserInput(props,ref){
    return(
        <div>
            <input type="text" ref={ref}/>
            <input type="text" ref={props.ref}/>
        </div>
    )
}

export default UserInput