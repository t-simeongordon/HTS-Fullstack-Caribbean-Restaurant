package com.htc.caribbeanrestaurant.service;

import org.springframework.stereotype.Service;

@Service
public class InventoryServiceImpl implements InventoryService{


    @Override
    public String getIngredients() {
        return "apple";
    }
}
