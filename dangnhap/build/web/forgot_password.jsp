<%-- 
    Document   : forgot_password
    Created on : Apr 2, 2023, 12:11:59 PM
    Author     : HELLO
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Quên mật khẩu</title>
</head>
<body>
    <h1>Quên mật khẩu</h1>
    <form action="forgot_password" method="post">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br>
        <input type="submit" value="Gửi yêu cầu">
        <a href="register.jsp">Đăng ký tài khoản</a>
    </form>
</body>
</html>
