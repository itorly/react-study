import AdminPanel from './AdminPanel.jsx';
import LoginForm from './LoginForm.jsx';

export default function ConditionalRendering() { 
    let content;
    const isLoggedIn = Math.random() < 0.5;
    if (isLoggedIn) {
        content = <AdminPanel />;
    } else {
        content = <LoginForm />;
    }
    return (
        <div>
            <h1>5. Conditional Rendering</h1>
            {content}
        </div>
    );
}
