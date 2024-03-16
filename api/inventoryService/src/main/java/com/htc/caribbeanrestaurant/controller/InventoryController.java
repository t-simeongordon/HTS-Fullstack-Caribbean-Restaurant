package com.htc.caribbeanrestaurant.controller;

import com.htc.caribbeanrestaurant.model.MenuItem;
import com.htc.caribbeanrestaurant.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hts/inventory")
public class InventoryController {

    @Autowired
    InventoryService inventoryService;


    @GetMapping("/health")
    public ResponseEntity<?> health(){
        return ResponseEntity.ok().body("Inventory service running");
    }
    @GetMapping("/ingredients")
    public ResponseEntity<String> getAllIngredients(){
        String result = inventoryService.getIngredients();
        return ResponseEntity.ok().body("getAllIngredients: "+ result);
    }

    @PostMapping("/menu/item")
    public ResponseEntity<String> addMenuItem(){
        MenuItem menuItem = new MenuItem();
        menuItem.builder()
                .id("1")
                .itemName("Curry Goat")
                .imageUrl("url")
                        .inStock(true).price(11.99)
        inventoryService.addNewMenu();
        return ResponseEntity.ok().body("Successfully added item to inventory");
    }
}
