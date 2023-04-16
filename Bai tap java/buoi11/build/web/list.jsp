<%-- 
    Document   : list
    Created on : Apr 15, 2023, 8:38:52 AM
    Author     : HELLO
--%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <style>
            #wrapper{
                font-family: arial;
                margin-left: 30px;
                width: 90%;
            }
            .clr {
                clear:both;
            }
            /*Phan Menu*/
            #menu_tab {
                width:100%;
            }
            ul.menu {
                float:left;
                background:url(images/background_menu.jpg) repeat-x;
                background-color: red;
                display:block;
                list-style-type:none;
                font-weight:bold;
                height: 55px;
                padding:12px;
                width: 100%;
            }
            ul.menu li {
                display:inline;
                font-size:14px;
                padding-top: 15px;
                text-align:center;
                line-height:30px;
                color:#E2D9BC;
            }
            ul.menu li a{
                margin: 10px;
                padding-left:0px;
                text-decoration:none;
                text-align:center;
                color:#E2D9BC;
                position:relative;
            }
            ul.menu li a img{
                float:left;
                margin-left:10px;
            }
            ul.menu li a:hover{
                color:#F90;
            }
            ul.menu li a:active{
                color:#FF0;
            }
            ul.menu li a:focus {
                color:#96F;
            }
            #content{
                margin-left: 20px;
            }
            table{
                border-collapse: collapse;
            }
            td{
                text-align: center;
            }


        </style>
    </head>
    <body>
        <div id="wrapper">
            <div id="menu_tab">
                <ul class="menu">
           <li><a href="product?cid=${0}">ALL</a></li>
                    <c:forEach items="${requestScope.data}" var="c">
                     
                        <li><a href="product?cid=${c.id}">${c.name}</a></li>

                    </c:forEach>
                </ul>
            </div>
            <div id="content">
                <table border="1px">
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Category name</th>
                    </tr>
                 
                        <c:forEach items="${requestScope.products}" var="p">
                            <tr>   
                        <td>${p.id}</td>
                        <td>${p.name}</td>
                        <td>${p.price}</td>
                        <td>${p.image}<img src="${p.image}" width="width" height="height" alt="alt"/></td>
                        <td>${p.category.name}</td>                                                                    
                           </tr>
                        </c:forEach>
                 
  
                </table>
            </div>
        </div>
    </body>
</html>
