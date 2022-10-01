package com.tackroute.favoriteservice.repository;
import com.tackroute.favoriteservice.model.Favorite;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FavoriteRepository extends MongoRepository<Favorite, String> {
}
