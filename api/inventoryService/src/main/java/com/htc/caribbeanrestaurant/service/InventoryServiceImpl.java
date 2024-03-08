package com.htc.caribbeanrestaurant.service;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.util.BeanUtil;

@Service
public class InventoryServiceImpl implements InventoryService{


    @Override
    public String getIngredients() {
        BeanUtils.copyProperties(getIngredients(), getClass());
        return "apple";
    }
}
