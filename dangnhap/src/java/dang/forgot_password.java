/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */

package dang;

import java.io.IOException;
import java.io.PrintWriter;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

/**
 *
 * @author HELLO
 */
@WebServlet(name="forgot_password", urlPatterns={"/forgot_password"})
public class forgot_password extends HttpServlet {
     
    private static final long serialVersionUID = 1L;
    private static Map<String, String> passwordResetRequests = new HashMap<>();
    private static Random random = new Random();
    /** 
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code> methods.
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet forgot_password</title>");  
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet forgot_password at " + request.getContextPath () + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    } 

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /** 
     * Handles the HTTP <code>GET</code> method.
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
        processRequest(request, response);
    } 

    /** 
     * Handles the HTTP <code>POST</code> method.
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
               response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        
        String email = request.getParameter("email");
        
        if (email == null || !email.endsWith("@gmail.com")) {
            out.println("Email không hợp lệ. Vui lòng nhập email có đuôi @gmail.com.");
        } else {
            String requestId = generateRequestId();
            passwordResetRequests.put(requestId, email);
            sendPasswordResetEmail(email, requestId);
            out.println("Yêu cầu đặt lại mật khẩu của bạn đã được gửi đến email " + email + ". Vui lòng kiểm tra email của bạn để đặt lại mật khẩu.");
        }
        out.close();
    }
    private String generateRequestId() {
        int requestId = random.nextInt(1000000);
        return String.format("%06d", requestId);
    }
    
    private void sendPasswordResetEmail(String email, String requestId) {
        // TODO: Gửi email đặt lại mật khẩu đến địa chỉ email của người dùng
    }
    /** 
     * Returns a short description of the servlet.
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
