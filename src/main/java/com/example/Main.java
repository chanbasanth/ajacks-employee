package main.java.com.example;

import static spark.Spark.*;
import freemarker.template.*;
import spark.ModelAndView;
import spark.template.freemarker.FreeMarkerEngine;

import java.util.*;

public class Main {
    public static void main(String[] args) {
        port(4567); // localhost:4567

        // Set template directory
        FreeMarkerEngine engine = new FreeMarkerEngine();
        Configuration config = new Configuration(Configuration.VERSION_2_3_32);
        try {
            config.setClassForTemplateLoading(Main.class, "/templates");
            engine.setConfiguration(config);
        } catch (Exception e) {
            e.printStackTrace();
        }

        staticFiles.location("/static"); // for css/js

        // Mock data to pass into template
        List<Map<String, String>> employees = new ArrayList<>();
        Map<String, String> emp = new HashMap<>();
        emp.put("id", "1");
        emp.put("firstName", "John");
        emp.put("lastName", "Doe");
        emp.put("email", "john@example.com");
        emp.put("department", "IT");
        emp.put("role", "Developer");
        employees.add(emp);

        get("/", (req, res) -> {
            Map<String, Object> model = new HashMap<>();
            model.put("employees", employees);
            return new ModelAndView(model, "index.ftlh");
        }, engine);
    }
}
