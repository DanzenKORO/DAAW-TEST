package daaw.backend.controllers;

import daaw.backend.config.AppProps;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SimpleController {

    private final AppProps appProps;

    // Spring injects AppProps here automatically (constructor injection)
    public SimpleController(AppProps appProps) {
        this.appProps = appProps;
    }

    @GetMapping("/")
    public String homePage(Model model) {
        model.addAttribute("appName", appProps.getName());
        model.addAttribute("version", appProps.getVersion());
        return "home";
    }

}
