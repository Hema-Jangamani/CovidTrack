package com.stackroute.searchservice.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/v1")
public class SearchController {

    private RestTemplate restTemplate;
    @Autowired
    public SearchController(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @GetMapping("/{country}")
    public ResponseEntity<?> getLogin(@PathVariable("country") String country) {

       // RestTemplate rt=new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        //headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
        String url="http://corona.lmao.ninja/v2/countries/"+country;
        HttpEntity<String> entity = new HttpEntity<>(headers);
        //String message=restTemplate.getForObject(url, String.class);
        return restTemplate.exchange(url, HttpMethod.GET, entity , Object.class);
//        System.out.println("message"+message);
//        return message;
    }


}
