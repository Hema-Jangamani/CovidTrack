package com.tackroute.favoriteservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
//@EnableAutoConfiguration(exclude={MongoAutoConfiguration.class})
public class FavoriteserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(FavoriteserviceApplication.class, args);
	}

}
