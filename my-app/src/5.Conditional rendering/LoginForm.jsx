function LoginForm() {
    return (
        <form className="login-form">
            <label htmlFor="username">Username</label>
            <input id="username" name="username" />
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
            <button>Login</button>
        </form>
    );
}

export default LoginForm;