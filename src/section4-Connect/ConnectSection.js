import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import './ConnectSection.css';

function ConnectSection() {
    return (
        <section id="connectSection">
            <h3>Connect</h3>
            <div>
                <span>If you have any questions, project inquiries, or just a good joke to share, feel free to reach out to me via the following channels:</span>
                <ul id="connectList">
                    <li><a href="mailto:axeldevdesign@gmail.com" title="Send Axel Straube an email"><IoIosMail /></a></li>
                    <li><a href="https://www.linkedin.com/in/axelstraube/" title="Connect with Axel Straube on LinkedIn" target="_blank"><FaLinkedin /></a></li>
                    <li><a href="https://github.com/a-straube" title="Follow Axel Straube on GitHub" target="_blank"><FaGithub /></a></li>
                </ul>
                <span className="new-line-span">I look forward to hearing from you and potentially working with you on your next project!</span>
            </div>
        </section>
    );
}

export default ConnectSection