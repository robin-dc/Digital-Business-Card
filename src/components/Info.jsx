import email from '/Mail.png';
import linkedin from '/linkedin.png';

function Info() {
    return (
        <div className="info">
            <img src="https://i.pinimg.com/originals/f8/f1/48/f8f148930e507ba14498e62e0dad5687.jpg" alt="" className='profile' />
            <div className="name">
                <h1>Nobita Nobi</h1>
                <p className='title'>Frontend Developer</p>
                <small><a href="#">doraemon.network</a></small>
            </div>
            <div className="action">
                <button className='email'>
                    <img src={email} alt="" />
                    <span>Email</span>
                </button>
                <button className='linkedin'>
                    <img src={linkedin} alt="" />
                    <span>Linkedin</span>
                </button>
            </div>
        </div>
     );
}

export default Info;
