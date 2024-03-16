package com.htc.caribbeanrestaurant.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.util.BeanUtil;
import com.htc.caribbeanrestaurant.entity.MenuItemEntity;
import com.htc.caribbeanrestaurant.model.MenuItem;
import com.htc.caribbeanrestaurant.repository.MenuItemRepository;

@Service
public class InventoryServiceImpl implements InventoryService{

    @Autowired
    MenuItemRepository menuItemRepository;

    @Override
    public void addNewMenu(MenuItem menuItem) {
        MenuItemEntity menuItemEntity = new MenuItemEntity();
        BeanUtils.copyProperties(menuItem, menuItemEntity);
        menuItemRepository.save(menuItemEntity);
        System.out.println("@@@addNewMenu::: complete");
    }

    @Override
    public String getIngredients() {
        BeanUtils.copyProperties(getIngredients(), getClass());
        return "apple";
    }
}
