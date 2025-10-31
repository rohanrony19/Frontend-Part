import style from './UserProfile.module.css'

function UserProfile(){
    return(
        <div>
            <h1 className={style.heading}>Css Modules</h1>
            <div className={style.card}>
                <img className={style.img} src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" alt="" />
                <div className={style.textwrap}>
                    <h4>Rohan Prasad</h4>
                    <h4 className={style.text}>Java Developer</h4>
                </div>
            </div>
        </div>
    )
}

export default UserProfile