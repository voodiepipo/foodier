package com.vootichote.mallnavigator.model;

import jakarta.persistence.*;
@Entity
public class Restaurant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String category;
    private String mall;
    private String floor;
    private double latitude;
    private double longitude;

    public Restaurant() {}

    public Long getId() { return id; }

    public String getName() { return name; }

    public String getCategory() { return category; }

    public String getMall() { return mall; }

    public void setName(String name) { this.name = name; }

    public void setCategory(String category) { this.category = category; }

    public void setMall(String mall) { this.mall = mall; }
    public String getFloor() {
        return floor;
    }
    
    public void setFloor(String floor) {
        this.floor = floor;
    }
    
    public double getLatitude() {
        return latitude;
    }
    
    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }
    
    public double getLongitude() {
        return longitude;
    }
    
    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }
}