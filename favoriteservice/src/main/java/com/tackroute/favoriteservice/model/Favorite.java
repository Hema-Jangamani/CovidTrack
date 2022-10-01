package com.tackroute.favoriteservice.model;

import org.springframework.data.annotation.Id;

import java.util.List;

public class Favorite {
    @Id
    private String email;
    private List<Country> countries;

    public Favorite() {
    }

    public Favorite(String email, List<Country> countries) {
        this.email = email;
        this.countries = countries;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Country> getCountries() {
        return countries;
    }

    public void setCountries(List<Country> countries) {
        this.countries = countries;
    }

    @Override
    public String toString() {
        return "Favorite{" +
                "email='" + email + '\'' +
                ", countries=" + countries +
                '}';
    }
}
