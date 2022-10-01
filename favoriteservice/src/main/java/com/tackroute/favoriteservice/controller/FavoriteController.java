package com.tackroute.favoriteservice.controller;

import com.tackroute.favoriteservice.exception.FavoriteAlreadyExistException;
import com.tackroute.favoriteservice.exception.FavoriteListDoesNotExistException;
import com.tackroute.favoriteservice.model.Country;
import com.tackroute.favoriteservice.model.Favorite;
import com.tackroute.favoriteservice.service.FavoriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/v1")
public class FavoriteController {

    private FavoriteService favoriteService;

    @Autowired
    public FavoriteController(FavoriteService favoriteService) {
        this.favoriteService = favoriteService;
    }

    @PostMapping("/addfavorite")
    public ResponseEntity<?> addToFavorites(@RequestBody Favorite favorite) {
        try {
            Favorite response = favoriteService.addToFavorite(favorite);
            return new ResponseEntity<Favorite>(response, HttpStatus.OK);
        } catch (FavoriteAlreadyExistException exception) {
            return new ResponseEntity<String>("Country already exists.", HttpStatus.CONFLICT);
        }
    }

    @DeleteMapping("favorite/{email}/deleteFromFavorite/{countryName}")
    public void deleteFromFavorite(@PathVariable("email") String email, @PathVariable String countryName) {
        favoriteService.deleteFavoriteByFavoriteId(email, countryName);
    }

    @PostMapping("{email}/createFavoriteList")
    public ResponseEntity<?> createFavoriteList(@PathVariable("email") String email, @RequestBody Favorite user) {
        return new ResponseEntity<>(this.favoriteService.createFavoriteList(email, user), HttpStatus.CREATED);
    }

    @GetMapping("countrylist/{email}/getFavoriteCountry")
    public ResponseEntity<?> getFavoriteCountry(@PathVariable String email) {
        try {
            List<Country> response = favoriteService.getFavoriteCountry(email);
            return new ResponseEntity<List<Country>>(response, HttpStatus.OK);
        } catch (FavoriteListDoesNotExistException exception) {
            return new ResponseEntity<String>("Country List does not exists.", HttpStatus.CONFLICT);
        }
    }

}
