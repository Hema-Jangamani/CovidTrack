package com.tackroute.favoriteservice.service;

import com.tackroute.favoriteservice.exception.FavoriteAlreadyExistException;
import com.tackroute.favoriteservice.exception.FavoriteListDoesNotExistException;
import com.tackroute.favoriteservice.exception.UserNotFoundException;
import com.tackroute.favoriteservice.model.Country;
import com.tackroute.favoriteservice.model.Favorite;

import java.util.List;
import java.util.Optional;

public interface FavoriteService {
    Favorite addToFavorite(Favorite favorite) throws FavoriteAlreadyExistException;
    Optional<Favorite> getAllFavorites(String email);
    List<Country> deleteFavoriteByFavoriteId(String email, String countryName);
    List<Country> getFavoriteCountry(String email) throws FavoriteListDoesNotExistException;
    Favorite createFavoriteList(String email, Favorite favorite);
}