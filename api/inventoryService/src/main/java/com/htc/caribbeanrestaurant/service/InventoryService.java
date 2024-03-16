package com.htc.caribbeanrestaurant.service;

import org.springframework.stereotype.Service;

import com.htc.caribbeanrestaurant.model.MenuItem;

public interface InventoryService {
    void addNewMenu(MenuItem menuItem);
    String getIngredients();
}
