package com.vootichote.mallnavigator.repository;

import com.vootichote.mallnavigator.model.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface RestaurantRepository extends JpaRepository<Restaurant, Long>{

List<Restaurant> findByNameContainingIgnoreCase(String name);

}