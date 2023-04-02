<%-- 
    Document   : register
    Created on : Apr 2, 2023, 12:05:51 PM
    Author     : HELLO
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Đăng ký tài khoản</title>
</head>
<body>
    <h1>Đăng ký tài khoản</h1>
    <form action="register" method="post">
        <label for="username">Tên đăng nhập:</label>
        <input type="text" id="username" name="username"><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br>
        <label for="password">Mật khẩu:</label>
        <input type="password" id="password" name="password"><br>
        <label for="confirm_password">Nhập lại mật khẩu:</label>
        <input type="password" id="confirm_password" name="confirm_password"><br>
        <input type="submit" value="Đăng ký">
        <a href="forgot_password.jsp">Quên mật khẩu?</a>
    </form>
</body>
</html>