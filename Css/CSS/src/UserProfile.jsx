import style from './userProfile.module.css'
function UserProfile(){
    return(
        <div>
            {/* <h1 className={style.heading}>User Profile</h1> */}
            <div className={style.card}>
                <img className={style.img} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                <div className={style.textWrap}>
                    <h4>Rohan Prasad</h4>
                    <h4 className={style.text}>Software Developer</h4>
                </div>
            </div>
        </div>
    )
}
export default UserProfile