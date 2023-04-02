<%-- 
    Document   : login
    Created on : Apr 2, 2023, 11:51:53 AM
    Author     : HELLO
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Đăng nhập</title>
</head>
<body>
    <h1>Đăng nhập</h1>
    <form action="login" method="post">
        <label for="username">Tài khoản:</label>
        <input type="text" name="username" id="username"><br><br>
        <label for="password">Mật khẩu:</label>
        <input type="password" name="password" id="password"><br><br>
        <input type="submit" value="Đăng nhập">
    </form>
    <br>
    <a href="#">Quên mật khẩu?</a>
    <br>
    <a href="#">Đăng ký</a>
    <br>
    <div id="message"></div>

    <script>
        const form = document.querySelector('form');
        const message = document.querySelector('#message');

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            fetch(form.action, {
                method: form.method,
                body: formData
            }).then(response => {
                return response.text();
            }).then(data => {
                message.innerHTML = data;
            });
        });
    </script>
</body>
</html>
