import fb from '/Facebook Icon.png'
import twt from '/Twitter Icon.png'
import github from '/GitHub Icon.png'
import ig from '/Instagram Icon.png'

function Footer() {
    return (
        <footer className="footer">
            <ul>
                <li>
                    <a href='#'>
                        <img src={twt} alt="" />
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <img src={fb} alt="" />
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <img src={ig} alt="" />
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <img src={github} alt="" />
                    </a>
                </li>
            </ul>
        </footer>
     );
}

export default Footer;
