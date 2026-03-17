package com.vootichote.mallnavigator.controller;

import com.vootichote.mallnavigator.model.Restaurant;
import com.vootichote.mallnavigator.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class RestaurantController {

    @Autowired
    private RestaurantRepository restaurantRepository;

    // GET ALL
    @GetMapping("/restaurants")
    public List<Restaurant> getAllRestaurants(){
        return restaurantRepository.findAll();
    }

    // ADD
    @PostMapping("/restaurants")
    public Restaurant addRestaurant(@RequestBody Restaurant restaurant){
        return restaurantRepository.save(restaurant);
    }
}