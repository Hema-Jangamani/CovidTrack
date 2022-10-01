package com.tackroute.favoriteservice.service;

import com.tackroute.favoriteservice.exception.FavoriteAlreadyExistException;
import com.tackroute.favoriteservice.exception.FavoriteDoesNotExistException;
import com.tackroute.favoriteservice.exception.FavoriteListDoesNotExistException;
import com.tackroute.favoriteservice.exception.UserNotFoundException;
import com.tackroute.favoriteservice.model.Country;
import com.tackroute.favoriteservice.model.Favorite;
import com.tackroute.favoriteservice.repository.FavoriteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FavoriteServiceImpl implements FavoriteService {
    private FavoriteRepository favoriteRepository;

    @Autowired
    public FavoriteServiceImpl(FavoriteRepository favoriteRepository) {
        this.favoriteRepository = favoriteRepository;
    }

    @Override
    public Favorite addToFavorite(Favorite favorite) throws FavoriteAlreadyExistException {
        Optional<Favorite> favoriteResult = favoriteRepository.findById(favorite.getEmail());
        if (favoriteResult.isPresent()) {
            List<Country> countryList = favoriteResult.get().getCountries();
            boolean present = false;
            for (Country country : countryList) {
                if (country.getCountryName().equals(favorite.getCountries().get(0).getCountryName())) {
                    present = true;
                }
            }
            if (present) throw new FavoriteAlreadyExistException();
            favoriteResult.get().getCountries().add(favorite.getCountries().get(0));
            return favoriteRepository.save(favoriteResult.get());
        } else return favoriteRepository.save(favorite);
    }


    @Override
    public Optional<Favorite> getAllFavorites(String email) {
        final Optional<Favorite> allFavorite = this.favoriteRepository.findById(email);
        if (allFavorite.isPresent())
            return allFavorite;
        else
            throw new UserNotFoundException();
    }

    @Override
    public List<Country> deleteFavoriteByFavoriteId(String email, String countryName) throws FavoriteDoesNotExistException, UserNotFoundException {
        Optional<Favorite> fav = getAllFavorites(email);
        int index = 0;
        boolean found = false;
        if (fav != null) {
            List<Country> details = fav.get().getCountries();
            for (int i = 0; i < details.size(); i++) {
                if (details.get(i).getCountryName().equals(countryName)) {
                    index = i;
                    found = true;
                    break;
                }
            }
            if (found) {
                Country favdetail = details.get(index);
                details.remove(index);
                fav.get().setCountries(details);
                favoriteRepository.save(fav.get());
                return details;
            } else {
                throw new FavoriteDoesNotExistException("Favorite Not Found");
            }
        } else {
            throw new UserNotFoundException("User Not Found");
        }
    }


    @Override
    public List<Country> getFavoriteCountry(String email) throws FavoriteListDoesNotExistException {
        Optional<Favorite> favoriteResult = favoriteRepository.findById(email);
        if (favoriteResult.isPresent()) {
            List<Country> countryList = favoriteResult.get().getCountries();
            if (countryList.size() >= 1) {
                return countryList;
            } else {
                throw new FavoriteListDoesNotExistException();
            }
        }
        return null;
    }

    @Override
    public Favorite createFavoriteList(String email, Favorite favorite) {
        final Optional<Favorite> user = favoriteRepository.findById(email);
        if (user.isPresent()) {
            throw new FavoriteAlreadyExistException("User Already Exist");
        } else {
            return favoriteRepository.save(favorite);
        }
    }

}
