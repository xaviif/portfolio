import com.sun.net.httpserver.HttpContext;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;
import java.io.IOException;

import java.net.InetSocketAddress;
import java.util.Map;
import java.io.IOException;

import java.util.Map;
import java.sql.*;
//javac -cp sqlite-jdbc-3.23.1.jar; ServerExample.java
public class ServerExample {

    public static void main(String[] args) throws IOException {		
        int port = 8500;	
        HttpServer server = HttpServer.create(new InetSocketAddress(port),0);

		//Server Webpage
		String cssFile = Input.readFile("../public/css/main.css");
		server.createContext("/myPage/css/main.css", new RouteHandler(cssFile));

        String fontFile = Input.readFile("../public/assets/fonts/Lato-Regular.ttf");
		server.createContext("/myPage", new RouteHandler(htmlFile));

		String htmlFile = Input.readFile("index.htm");
		server.createContext("/myPage", new RouteHandler(htmlFile));
		
        server.start(); 
		
        System.out.println("Server is listening on port " + port );
    }    
}



