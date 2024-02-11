package com.htc.caribbeanrestaurant.controller;

import com.htc.caribbeanrestaurant.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
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
}
