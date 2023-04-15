<%-- 
    Document   : indec
    Created on : Apr 9, 2023, 1:46:49 PM
    Author     : HELLO
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Calculator</title>
</head>
<body>
	<h1>Calculator</h1>
	<form action="caculator" method="post">
		<input type="number" name="num1" required> 
		<select name="operator" required>
			<option value="+">+</option>
			<option value="-">-</option>
			<option value="*">*</option>
			<option value="/">/</option>
		</select>
		<input type="number" name="num2" required>
		<input type="submit" value="Calculate">
	</form>



 <%= request.getAttribute("result")  %>
</body>
</html>
